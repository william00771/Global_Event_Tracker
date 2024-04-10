using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required Location Location { get; set; }
        public required string Description { get; set; }
        public required int Duration { get; set; }
        public required string WebsiteUrl { get; set; }
        public required int NumberOfPeople { get; set; }
        public required List<string> Keywords { get; set; }
        public required string Image { get; set; }
    }
}