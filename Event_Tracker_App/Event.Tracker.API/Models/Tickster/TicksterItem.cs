namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public TicksterDescription Description { get; set; }
        public DateTime StartUtc { get; set; }
        public DateTime EndUtc { get; set; }
        public DateTime LastUpdatedUtc { get; set; }
        public string State { get; set; }
        public string InfoUrl { get; set; }
        public string ShopUrl { get; set; }
        public string EventHierarchyType { get; set; }
        public string ParentEventId { get; set; }
        public TicksterOrganizer Organizer { get; set; }
        public TicksterVenue Venue { get; set; }
        public List<TicksterLink> Links { get; set; }
    }
}