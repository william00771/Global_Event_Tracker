using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int CoordinatesId { get; set; }
        public Coordinates? Location { get; set; }
        public DateTime? Time { get; set; }
        public DateTime? Date { get; set; }
        public DateTime? DateTo { get; set; }
        public string? Description { get; set; }
        public int Duration { get; set; }
        public string? WebsiteUrl { get; set; }
        public int? NumberOfPeople { get; set; }
        public List<string>? Keywords { get; set; }
        public string? Image { get; set; }
    }
}