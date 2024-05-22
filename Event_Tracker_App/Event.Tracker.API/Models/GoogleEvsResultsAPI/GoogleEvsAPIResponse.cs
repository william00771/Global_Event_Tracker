using Newtonsoft.Json;

namespace Event.Tracker.API.Models.GoogleEvsResultsAPI
{
    public class GoogleEvsAPIResponse
    {
        [JsonProperty("events_results")]
        public List<GoogleEvsEventResult> EventsResults { get; set; }
        [JsonProperty("more_events_link")]
        public string MoreEventsLink { get; set; }
    }
}