using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterItem
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        public TicksterDescription Description { get; set; }

        [JsonPropertyName("startUtc")]
        public DateTime StartUtc { get; set; }

        [JsonPropertyName("endUtc")]
        public DateTime EndUtc { get; set; }

        [JsonPropertyName("lastUpdatedUtc")]
        public DateTime LastUpdatedUtc { get; set; }

        [JsonPropertyName("state")]
        public string State { get; set; }

        [JsonPropertyName("infoUrl")]
        public string InfoUrl { get; set; }

        [JsonPropertyName("shopUrl")]
        public string ShopUrl { get; set; }

        [JsonPropertyName("eventHierarchyType")]
        public string EventHierarchyType { get; set; }

        [JsonPropertyName("parentEventId")]
        public string ParentEventId { get; set; }

        [JsonPropertyName("organizer")]
        public TicksterOrganizer Organizer { get; set; }

        [JsonPropertyName("venue")]
        public TicksterVenue Venue { get; set; }

        [JsonPropertyName("links")]
        public List<TicksterLink> Links { get; set; }
    }
}