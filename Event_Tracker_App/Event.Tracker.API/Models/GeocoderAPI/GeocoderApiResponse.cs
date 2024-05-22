namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class GeocoderApiResponse
    {
        public List<Result> Results { get; set; }
        public string Status { get; set; }
    }
}