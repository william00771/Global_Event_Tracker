using Event.Tracker.API.Models;

namespace Event.Tracker.API.Contracts
{
    public interface IGeocoderService
    {
        Task<Coordinates> GetCoordinatesFromAddressAsync(string address);
    }
}