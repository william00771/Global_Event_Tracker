using System.Text.Json;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.Tickster;

namespace Event.Tracker.API.Services
{
    public class FetchExternalEventsToDb : IFetchExternalEventsToDb
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly string _ticksterApiKey;
        private readonly ILogger<FetchExternalEventsToDb> _logger;
        private readonly IEventsRepository _eventsRepository;

        public FetchExternalEventsToDb(IHttpClientFactory httpClientFactory, IConfiguration configuration, ILogger<FetchExternalEventsToDb> logger, IEventsRepository eventsRepository)
        {
            _ticksterApiKey = configuration["Tickster:apiKey"];
            _httpClientFactory = httpClientFactory;
            _logger = logger;
            _eventsRepository = eventsRepository;

            if (string.IsNullOrEmpty(configuration["Tickster:apiKey"]))
            {
                _logger.LogError("Tickster API key is null or empty. Please check the configuration.");
            }
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
                                    Keywords = new List<string> { ev.Name, ev.Description?.Markdown ?? string.Empty },
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
    }
}