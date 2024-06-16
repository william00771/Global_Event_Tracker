using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterVenue
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("address")]
        public object Address { get; set; }

        [JsonPropertyName("zipCode")]
        public object ZipCode { get; set; }

        [JsonPropertyName("city")]
        public object City { get; set; }

        [JsonPropertyName("country")]
        public object Country { get; set; }

        [JsonPropertyName("geo")]
        public TicksterGeo Geo { get; set; }
    }
}