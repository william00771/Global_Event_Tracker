using System.Text.Json.Serialization;

namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterOrganizer
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("website")]
        public string Website { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("organizationalId")]
        public string OrganizationalId { get; set; }

        [JsonPropertyName("segmentName")]
        public string SegmentName { get; set; }

        [JsonPropertyName("address")]
        public List<object> Address { get; set; }

        [JsonPropertyName("socialMedia")]
        public Dictionary<string, string> SocialMedia { get; set; }

        [JsonPropertyName("_links")]
        public object Links { get; set; }
    }
}