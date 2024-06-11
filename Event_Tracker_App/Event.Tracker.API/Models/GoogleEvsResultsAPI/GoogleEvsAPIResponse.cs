using Newtonsoft.Json;

namespace Event.Tracker.API.Models.GoogleEvsResultsAPI
{
    public class GoogleEvsApiResponse
    {
        [JsonProperty("search_metadata")]
        public SearchMetadata SearchMetadata { get; set; }

        [JsonProperty("search_parameters")]
        public SearchParameters SearchParameters { get; set; }

        [JsonProperty("search_information")]
        public SearchInformation SearchInformation { get; set; }

        [JsonProperty("events_results")]
        public List<EventResult> EventsResults { get; set; }
    }

    public class SearchMetadata
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("json_endpoint")]
        public string JsonEndpoint { get; set; }

        [JsonProperty("created_at")]
        public string CreatedAt { get; set; }

        [JsonProperty("processed_at")]
        public string ProcessedAt { get; set; }

        [JsonProperty("google_events_url")]
        public string GoogleEventsUrl { get; set; }

        [JsonProperty("raw_html_file")]
        public string RawHtmlFile { get; set; }

        [JsonProperty("total_time_taken")]
        public double TotalTimeTaken { get; set; }
    }

    public class SearchParameters
    {
        [JsonProperty("q")]
        public string Query { get; set; }

        [JsonProperty("engine")]
        public string Engine { get; set; }

        [JsonProperty("hl")]
        public string Language { get; set; }

        [JsonProperty("gl")]
        public string Country { get; set; }
    }

    public class SearchInformation
    {
        [JsonProperty("events_results_state")]
        public string EventsResultsState { get; set; }
    }

    public class EventResult
    {
        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("date")]
        public Date Date { get; set; }

        [JsonProperty("address")]
        public List<string> Address { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("event_location_map")]
        public EventLocationMap EventLocationMap { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("ticket_info")]
        public List<TicketInfo> TicketInfo { get; set; }

        [JsonProperty("venue")]
        public Venue Venue { get; set; }

        [JsonProperty("thumbnail")]
        public string Thumbnail { get; set; }

        [JsonProperty("image")]
        public string Image { get; set; }
    }

    public class Date
    {
        [JsonProperty("start_date")]
        public string StartDate { get; set; }

        [JsonProperty("when")]
        public string When { get; set; }
    }

    public class EventLocationMap
    {
        [JsonProperty("image")]
        public string Image { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("serpapi_link")]
        public string SerpapiLink { get; set; }
    }

    public class TicketInfo
    {
        [JsonProperty("source")]
        public string Source { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("link_type")]
        public string LinkType { get; set; }
    }

    public class Venue
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("rating")]
        public double Rating { get; set; }

        [JsonProperty("reviews")]
        public int Reviews { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }
    }
}