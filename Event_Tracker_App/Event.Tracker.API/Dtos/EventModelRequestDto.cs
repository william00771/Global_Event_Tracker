namespace Event.Tracker.API.Dtos
{
    public class EventModelRequestDto
    {
        public required string Name { get; set; }
        public required CoordinatesRequestDto CoordinatesRequest { get; set; }
        public required string Description { get; set; }
        public required DateTime Time { get; set; }
        public required DateTime Date { get; set; }
        public required DateTime DateTo { get; set; }
        public required int Duration { get; set; }
        public required string WebsiteUrl { get; set; }
        public required int NumberOfPeople { get; set; }
        public required List<string> Keywords { get; set; }
        public required IFormFile Image { get; set; }
    }
}