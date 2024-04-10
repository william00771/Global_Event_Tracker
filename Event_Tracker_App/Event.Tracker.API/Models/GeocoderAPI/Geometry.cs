using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class Geometry
    {
        public Bounds Bounds { get; set; }
        public Coordinates Location { get; set; }
        public string LocationType { get; set; }
        public Bounds Viewport { get; set; }
    }
}