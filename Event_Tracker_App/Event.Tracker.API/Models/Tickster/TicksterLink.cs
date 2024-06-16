using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterLink
    {
        [JsonPropertyName("rel")]
        public string Rel { get; set; }

        [JsonPropertyName("href")]
        public string Href { get; set; }

        [JsonPropertyName("method")]
        public string Method { get; set; }
    }
}