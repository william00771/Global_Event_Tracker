using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Dtos
{
    public class CoordinatesRequestDto
    {
        public required double Lat { get; set; }
        public required double Lng { get; set; }
        public required string FormattedAddress { get; set; }
    }
}