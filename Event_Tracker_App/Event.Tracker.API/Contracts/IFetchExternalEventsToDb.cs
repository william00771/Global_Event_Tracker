using Event.Tracker.API.Models;

namespace Event.Tracker.API.Contracts
{
    public interface IFetchExternalEventsToDb
    {
        public Task<List<EventModel>> FetchTickster();
    }
}