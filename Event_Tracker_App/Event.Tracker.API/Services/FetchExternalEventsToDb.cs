using System.Globalization;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GoogleEvsResultsAPI;
using Event.Tracker.API.Models.Tickster;
using Newtonsoft.Json;

namespace Event.Tracker.API.Services
{
    public class FetchExternalEventsToDb : IFetchExternalEventsToDb
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly string _ticksterApiKey;
        private readonly string _serpApiKey;
        private readonly IEventsRepository _eventsRepository;
        private readonly IGeocoderService _geocoderService;

        public FetchExternalEventsToDb(
            IHttpClientFactory httpClientFactory, 
            IConfiguration configuration, 
            ILogger<FetchExternalEventsToDb> logger, 
            IEventsRepository eventsRepository,
            IGeocoderService geocoderService
        )
        {
            _ticksterApiKey = configuration["Tickster:apiKey"];
            _serpApiKey = configuration["SerpApi:ApiKey"];
            _httpClientFactory = httpClientFactory;
            _eventsRepository = eventsRepository;
            _geocoderService = geocoderService;
        }

        private async Task<int> calcTicksterRunCountNeeded()
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("x-api-key", _ticksterApiKey);
            var response = await client.GetAsync($"https://event.api.tickster.com/api/v1.0/sv/events?query=Stockholm&take=1&skip=0");

            var jsonResponse = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<TicksterResponse>(jsonResponse);
            
            var runsRequired = (int)Math.Ceiling((double)data.TotalItems / 100);

            return runsRequired;
        }

        public async Task<List<EventModel>> FetchTickster()
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("x-api-key", _ticksterApiKey);

            var runsLeft = await calcTicksterRunCountNeeded();

            while(runsLeft > -1)
            {
                await Task.Delay(20000);
                var response = await client.GetAsync($"https://event.api.tickster.com/api/v1.0/sv/events?query=Stockholm&take=100&skip={runsLeft*100}");
                if(response.IsSuccessStatusCode)
                {
                    var jsonData = await response.Content.ReadAsStringAsync();
                    var data = JsonConvert.DeserializeObject<TicksterResponse>(jsonData);
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
                    if(runsLeft == 0)
                    {
                        return eventResponse;
                    }
                }
                runsLeft--;
            }
            return null;
        }
        public async Task<List<EventModel>> FetchGoogleEventsResult()
        {
            var client = _httpClientFactory.CreateClient();
            // client.DefaultRequestHeaders.Add("api_key", _serpApiKey);

            // var response = await client.GetAsync($"https://serpapi.com/search.json?engine=google_events&q=Events+in+Stockholm&hl=en&gl=us&num=20&api_key={_serpApiKey}");

            
            // if(response.IsSuccessStatusCode)
            // {
                string projectDirectory = Directory.GetParent(AppContext.BaseDirectory).Parent.Parent.Parent.FullName;
                string jsonFilePath = Path.Combine(projectDirectory, "Data", "jsonapiresponse.json");
                string responseJson = await File.ReadAllTextAsync(jsonFilePath);
                // var responseJson = await response.Content.ReadAsStringAsync();
                var data = JsonConvert.DeserializeObject<GoogleEvsApiResponse>(responseJson);
                var eventResponse = new List<EventModel>();
                if (data != null)
                {
                    foreach (var ev in data.EventsResults)
                    {
                        if (ev != null)
                        {
                            await Task.Delay(1000);
                            var address = await _geocoderService.GetCoordinatesFromAddressAsync(ev.Address[0]);
                            if(address != null)
                            {
                                var newCoordinates = new Coordinates
                                {
                                    Lat = address.Lat,
                                    Lng = address.Lng,
                                    FormattedAddress = address.FormattedAddress,
                                };

                                EventModel newEventModel = new EventModel
                                {
                                    Name = ev.Title ?? string.Empty,
                                    Location = newCoordinates,
                                    Description = ev.Title ?? string.Empty,
                                    Time = ParseGoogleEventAPIDate(ev.Date.StartDate) ?? DateTime.Now,
                                    Date = ParseGoogleEventAPIDate(ev.Date.StartDate) ?? DateTime.Now,
                                    DateTo = ParseGoogleEventAPIDate(ev.Date.StartDate) ?? DateTime.Now,
                                    Duration = 0,
                                    WebsiteUrl = ev.Link,
                                    NumberOfPeople = 0,
                                    Keywords = new List<string> { string.Empty },
                                    Image = ev.Thumbnail
                                };
                                if(newEventModel.Date != DateTime.Now)
                                {
                                    eventResponse.Add(newEventModel);
                                    await _eventsRepository.PostFullEventAsync(newEventModel);
                                } 
                            }
                        }
                    }
                    return eventResponse;
                }
            return null;
        }
        private DateTime? ParseGoogleEventAPIDate(string dateStr)
        {
            // Possible date formats From Google Events
            string[] formats = new[]
            {
                "MMM dd", // May 25
                "ddd, MMM dd, h:mm tt", // Fri, May 24, 8 PM
                "ddd, MMM dd, h:mm tt – ddd, MMM dd, h:mm tt", // Sat, May 25, 6:30 PM – Sun, May 26, 12:30 AM
                "ddd, MMM dd, h – h tt", // Fri, May 24, 8 – 10 PM
                "ddd, MMM dd, h:mm tt – h:mm tt" // Sat, May 25, 6:30 PM – 12:30 AM
            };

            // Attempt to parse the date string
            foreach (var format in formats)
            {
                if (DateTime.TryParseExact(dateStr, format, CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime date))
                {
                    return date;
                }
            }

            // Return null if parsing fails
            return null;
        }
    }
}

    