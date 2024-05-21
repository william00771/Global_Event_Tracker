using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterGeo
    {
        [JsonPropertyName("latitude")]
        public double Latitude { get; set; }

        [JsonPropertyName("longitude")]
        public double Longitude { get; set; }
    }
}