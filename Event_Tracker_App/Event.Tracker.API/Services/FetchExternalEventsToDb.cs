using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Services
{
    public class FetchExternalEventsToDb : IFetchExternalEventsToDb
    {
        public Task<List<EventModel>> FetchTickster()
        {
            throw new NotImplementedException();
        }
    }
}