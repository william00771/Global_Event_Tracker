using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Dtos
{
    public class EventModelRequestDto
    {
        public required string Name { get; set; }
        public required Location Location { get; set; }
        public required string Description { get; set; }
        public required int Duration { get; set; }
        public required string WebsiteUrl { get; set; }
        public required int NumberOfPeople { get; set; }
        public required List<string> Keywords { get; set; }
    }
}