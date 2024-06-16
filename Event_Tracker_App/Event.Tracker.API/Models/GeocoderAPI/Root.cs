namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class Root
    {
        public List<Result> results { get; set; }
        public string status { get; set; }
    }
}