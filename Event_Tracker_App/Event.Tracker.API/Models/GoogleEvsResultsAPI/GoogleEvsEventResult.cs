using Newtonsoft.Json;

namespace Event.Tracker.API.Models.GoogleEvsResultsAPI
{
    public class GoogleEvsEventResult
    {
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("date")]
        public GoogleEvsEventDate Date { get; set; }

        [JsonProperty("address")]
        public List<string> Address { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("thumbnail")]
        public string Thumbnail { get; set; }
    }
}