using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class Bounds
    {
        public Coordinates Northeast { get; set; }
        public Coordinates Southwest { get; set; }
    }
}