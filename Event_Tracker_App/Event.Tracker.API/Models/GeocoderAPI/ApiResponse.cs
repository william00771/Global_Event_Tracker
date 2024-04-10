using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models.GeocoderAPI
{
    public class ApiResponse
    {
        public List<Result> Results { get; set; }
        public string Status { get; set; }
    }
}