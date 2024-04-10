using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class Location
    {
        public int Id { get; set;}
        public double lat { get; set; }
        public double lng { get; set; }
    }
}