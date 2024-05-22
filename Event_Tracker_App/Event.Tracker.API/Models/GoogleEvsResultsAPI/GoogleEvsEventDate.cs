using Newtonsoft.Json;

namespace Event.Tracker.API.Models.GoogleEvsResultsAPI
{
    public class GoogleEvsEventDate
    {
        [JsonProperty("start_date")]
        public string StartDate { get; set; }
        [JsonProperty("when")]
        public string When { get; set; }
    }
}