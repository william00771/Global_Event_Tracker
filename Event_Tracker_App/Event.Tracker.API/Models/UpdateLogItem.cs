namespace Event.Tracker.API.Models
{
    public class UpdateLogItem
    {
        public int Id { get; set; }
        public DateTime LastUpdated { get; set; }
        public DateTime TicksterLastUpdated { get; set; }
    }
}