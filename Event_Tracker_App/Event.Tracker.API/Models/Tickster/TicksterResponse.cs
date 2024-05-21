using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterResponse
    {
        [JsonPropertyName("totalItems")]
        public int TotalItems { get; set; }

        [JsonPropertyName("skipped")]
        public int Skipped { get; set; }

        [JsonPropertyName("items")]
        public List<TicksterItem> Items { get; set; }

        [JsonPropertyName("links")]
        public List<TicksterLink> Links { get; set; }
    }
}