namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterOrganizer
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public string Email { get; set; }
        public string OrganizationalId { get; set; }
        public string SegmentName { get; set; }
        public List<object> Address { get; set; }
        public Dictionary<string, string> SocialMedia { get; set; }
        public object Links { get; set; }
    }
}