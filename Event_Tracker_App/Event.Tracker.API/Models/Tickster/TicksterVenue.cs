namespace Event.Tracker.API.Models.Tickster
{
    public class TicksterVenue
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public object Address { get; set; }
        public object ZipCode { get; set; }
        public object City { get; set; }
        public object Country { get; set; }
        public TicksterGeo Geo { get; set; }
    }
}