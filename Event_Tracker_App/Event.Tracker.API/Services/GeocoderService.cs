using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Services
{
    public class GeocoderService : IGeocoderService
    {
        private readonly HttpClient _httpClient;
        private readonly string _geocoderApiKey;
        public GeocoderService(IConfiguration config)
        {
            _httpClient = new HttpClient();
            _geocoderApiKey = config.GetValue<string>("Geocoder:ApiKey");
        }
        public async Task<GeocoderApiResponse> GetCoordinatesFromAddressAsync(string address)
        {
            try
            {
                // HttpResponseMessage response = await _httpClient.GetAsync($"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={_geocoderApiKey}");
                HttpResponseMessage response = await _httpClient.GetAsync($"https://maps.googleapis.com/maps/api/geocode/json?address=Stockholm&key=AIzaSyBetmu8K_98HiP-_W1HagWU-HPJmQXmyG4");

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var jsonResponse = await response.Content.ReadFromJsonAsync<GeocoderApiResponse>();
                
                return jsonResponse;
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return null;
            }
        }
    }
}