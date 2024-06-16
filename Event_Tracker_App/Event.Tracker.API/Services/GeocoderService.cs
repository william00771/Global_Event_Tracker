using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Services
{
    public class GeocoderService : IGeocoderService
    {
        private readonly HttpClient _httpClient;
        private readonly string _geocoderApiKey;
        public GeocoderService(IConfiguration config, IHttpClientFactory httpClientFactory)
        {
            _httpClient = new HttpClient();
            _geocoderApiKey = config.GetValue<string>("Geocoder:ApiKey");
        }
        public async Task<Coordinates> GetCoordinatesFromAddressAsync(string address)
        {
            try
            {
                HttpResponseMessage response = await _httpClient.GetAsync($"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={_geocoderApiKey}");

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var jsonResponse = await response.Content.ReadFromJsonAsync<GeocoderApiResponse>();

                if (jsonResponse?.Results?.Count > 0)
                {
                    var result = jsonResponse.Results[0]; 

                    var coordinates = new Coordinates
                    {
                        Lat = result.geometry.location.lat,
                        Lng = result.geometry.location.lng,
                        FormattedAddress = result.formatted_address
                    };

                    return coordinates;
                }
                else
                {
                    return null;
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return null;
            }
        }
    }
}