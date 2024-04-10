using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Contracts
{
    public interface IGeocoderService
    {
        Task<Coordinates> GetCoordinatesFromAddressAsync(string address);
    }
}