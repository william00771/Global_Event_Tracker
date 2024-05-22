namespace Event.Tracker.API.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public int CoordinatesId { get; set; }
        public required Coordinates Location { get; set; }
        public required DateTime Time { get; set; }
        public required DateTime Date { get; set; }
        public required DateTime DateTo { get; set; }
        public required string Description { get; set; }
        public required int Duration { get; set; }
        public required string WebsiteUrl { get; set; }
        public required int NumberOfPeople { get; set; }
        public required List<string> Keywords { get; set; }
        public required string Image { get; set; }
    }
}