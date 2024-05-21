using System.Text.Json;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Event.Tracker.API.Services
{
    public class FetchExternalEventsToDb : IFetchExternalEventsToDb
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public FetchExternalEventsToDb(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<List<EventModel>> FetchTickster()
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("x-api-key", "");
            var response = await client.GetAsync("");

            if(response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var data = JsonSerializer.Deserialize<Model>(jsonData);
                // return data;
            }
            return null;
        }
    }
}