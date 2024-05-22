using System.Globalization;
using System.Text.Json;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GoogleEvsResultsAPI;
using Event.Tracker.API.Models.Tickster;

namespace Event.Tracker.API.Services
{
    public class FetchExternalEventsToDb : IFetchExternalEventsToDb
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly string _ticksterApiKey;
        private readonly string _serpApiKey;
        private readonly ILogger<FetchExternalEventsToDb> _logger;
        private readonly IEventsRepository _eventsRepository;
        private readonly IGeocoderService _geocoderService;

        public FetchExternalEventsToDb(IHttpClientFactory httpClientFactory, IConfiguration configuration, ILogger<FetchExternalEventsToDb> logger, IEventsRepository eventsRepository, IGeocoderService geocoderService)
        {
            _ticksterApiKey = configuration["Tickster:apiKey"];
            _serpApiKey = configuration["SerpApi:ApiKey"];
            _httpClientFactory = httpClientFactory;
            _logger = logger;
            _eventsRepository = eventsRepository;
            _geocoderService = geocoderService;

            if (configuration["Tickster:apiKey"] == "secret") _logger.LogError("Tickster API key is null or empty. Please check the configuration.");
            if (configuration["SerpApi:apiKey"] == "secret") _logger.LogError("SerpApi API key is null or empty. Please check the configuration.");
        }

        public async Task<List<EventModel>> FetchTickster()
        {
            var client = _httpClientFactory.CreateClient();
            var client2 = _httpClientFactory.CreateClient();

            client.DefaultRequestHeaders.Add("x-api-key", _ticksterApiKey);
            client2.DefaultRequestHeaders.Add("x-api-key", _ticksterApiKey);
            var initResponse = await client.GetAsync($"https://event.api.tickster.com/api/v1.0/sv/events?query=Stockholm&take=1&skip=0");
            var initJsonData = await initResponse.Content.ReadAsStringAsync();
            var initData = JsonSerializer.Deserialize<TicksterResponse>(initJsonData);
            var excecutionsLeft = (int)Math.Ceiling((double)initData.TotalItems / 100);

            while(excecutionsLeft > -1)
            {
                await Task.Delay(20000);
                var response = await client2.GetAsync($"https://event.api.tickster.com/api/v1.0/sv/events?query=Stockholm&take=100&skip={excecutionsLeft*100}");
                if(response.IsSuccessStatusCode)
                {
                    var jsonData = await response.Content.ReadAsStringAsync();
                    var data = JsonSerializer.Deserialize<TicksterResponse>(jsonData);
                    var eventResponse = new List<EventModel>();

                    if (data != null && data.Items != null)
                    {
                        foreach (var ev in data.Items)
                        {
                            if (ev != null)
                            {
                                var newCoordinates = new Coordinates
                                {
                                    Lat = ev.Venue?.Geo?.Latitude ?? 0,
                                    Lng = ev.Venue?.Geo?.Longitude ?? 0,
                                    FormattedAddress = ev.Venue?.Address?.ToString() ?? string.Empty,
                                };

                                EventModel newEventModel = new EventModel
                                {
                                    Name = ev.Venue?.Name ?? string.Empty,
                                    Location = newCoordinates,
                                    Description = ev.Description?.Markdown ?? string.Empty,
                                    Time = ev.StartUtc,
                                    Date = ev.StartUtc,
                                    DateTo = ev.EndUtc,
                                    Duration = 0,
                                    WebsiteUrl = ev.InfoUrl,
                                    NumberOfPeople = 0,
                                    Keywords = new List<string> { string.Empty },
                                    Image = "https://res.cloudinary.com/dlw9fdrql/image/upload/v1716306744/event_jmwpwd.jpg"
                                };

                                eventResponse.Add(newEventModel);
                                await _eventsRepository.PostFullEventAsync(newEventModel);
                            }
                        }
                    }
                    if(excecutionsLeft == 0)
                    {
                        return eventResponse;
                    }
                }
                excecutionsLeft--;
            }
            return null;
        }
        public async Task<List<EventModel>> FetchGoogleEventsResult()
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("api_key", _serpApiKey);

            var response = await client.GetAsync("https://api.serpapi.com/search?q=events+in+Stockholm&google_domain=google.com&gl=us&hl=en&num=20");
            if(response.IsSuccessStatusCode)
            {
                var responseJson = await response.Content.ReadAsStringAsync();
                var data = JsonSerializer.Deserialize<GoogleEvsAPIResponse>(responseJson);
                var eventResponse = new List<EventModel>();
                if (data != null && data.EventsResults.Count != null)
                {
                    foreach (var ev in data.EventsResults)
                    {
                        if (ev != null)
                        {
                            await Task.Delay(1000);
                            var address = await _geocoderService.GetCoordinatesFromAddressAsync(ev.Address[0]);
                            var newCoordinates = new Coordinates
                            {
                                Lat = address.Lat,
                                Lng = address.Lng,
                                FormattedAddress = address.FormattedAddress,
                            };
                            var dateUtc = DateTime.ParseExact(ev.Date.When.Substring(0, ev.Date.When.IndexOf('–')).Trim(), "ddd, MMM dd, h:mm tt", CultureInfo.InvariantCulture, DateTimeStyles.AssumeLocal).ToUniversalTime();
                            EventModel newEventModel = new EventModel
                            {
                                Name = ev.Title ?? string.Empty,
                                Location = newCoordinates,
                                Description = ev.Title ?? string.Empty,
                                Time = dateUtc,
                                Date = dateUtc,
                                DateTo = dateUtc,
                                Duration = 0,
                                WebsiteUrl = ev.Link,
                                NumberOfPeople = 0,
                                Keywords = new List<string> { string.Empty },
                                Image = ev.Thumbnail
                            };

                            eventResponse.Add(newEventModel);
                            await _eventsRepository.PostFullEventAsync(newEventModel);
                        }
                    }
                }
                return eventResponse;
            }
            return null;
        }
    }
}