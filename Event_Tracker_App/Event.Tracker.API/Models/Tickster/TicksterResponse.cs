namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterResponse
    {
        public int TotalItems { get; set; }
        public int Skipped { get; set; }
        public List<TicksterItem> Items { get; set; }
        public List<TicksterLink> Links { get; set; }
    }
}