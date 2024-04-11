using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models
{
    public class Coordinates
    {
        [Key]
        public int Id { get; set; }
        public required double Lat { get; set; }
        public required double Lng { get; set; }
        public required string FormattedAddress { get; set; }
    }
}