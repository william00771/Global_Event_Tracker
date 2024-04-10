using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GeocoderAPI;

namespace Event.Tracker.API.Contracts
{
    public interface IGeocoderService
    {
        Task<GeocoderApiResponse> GetCoordinatesFromAddressAsync(string address);
    }
}