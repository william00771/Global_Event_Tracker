using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterDescription
    {
        [JsonPropertyName("markdown")]
        public string Markdown { get; set; }

        [JsonPropertyName("html")]
        public string Html { get; set; }
    }
}