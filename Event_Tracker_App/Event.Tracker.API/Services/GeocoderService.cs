using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Services
{
    public class GeocoderService : IGeocoderService
    {
        public Task<Coordinates> GetCoordinatesFromAddressAsync(string address)
        {
            throw new NotImplementedException();
        }
    }
}