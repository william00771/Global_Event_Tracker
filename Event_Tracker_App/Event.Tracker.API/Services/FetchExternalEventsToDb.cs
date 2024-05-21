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

        public FetchExternalEventsToDb(IHttpClientFactory httpClientFactory, IConfiguration configuration, ILogger<FetchExternalEventsToDb> logger)
        {
            _ticksterApiKey = configuration["Tickster:apiKey"];
            _httpClientFactory = httpClientFactory;
            _logger = logger;

            if (string.IsNullOrEmpty(configuration["Tickster:apiKey"]))
            {
                _logger.LogError("Tickster API key is null or empty. Please check the configuration.");
            }
        }
        public async Task<List<EventModel>> FetchTickster()
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("x-api-key", _ticksterApiKey);
            var response = await client.GetAsync("https://event.api.tickster.com/api/v1.0/sv/events?query=Stockholm&take=1&skip=0");

            if(response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var data = JsonSerializer.Deserialize<TicksterResponse>(jsonData);

                return null;
                // return data;
            }
            return null;
        }
    }
}