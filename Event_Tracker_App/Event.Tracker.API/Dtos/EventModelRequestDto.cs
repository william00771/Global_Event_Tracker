using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Dtos
{
    public class EventModelRequestDto
    {
        public string Name { get; set; }
        public CoordinatesRequestDto CoordinatesRequest { get; set; }
        public string Description { get; set; }
        public DateTime? Time { get; set; }
        public DateTime? Date { get; set; }
        public DateTime? DateTo { get; set; }
        public int Duration { get; set; }
        public string WebsiteUrl { get; set; }
        public int? NumberOfPeople { get; set; }
        public List<string> Keywords { get; set; }
        public IFormFile Image { get; set; }
    }
}