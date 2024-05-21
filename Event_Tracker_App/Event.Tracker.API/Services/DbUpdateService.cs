using Event.Tracker.API.Contracts;
using Event.Tracker.API.Dtos;

namespace Event.Tracker.API.Services
{
    public class DbUpdateService
    {
        private static DateTime _lastChecked;
        private readonly IEventsRepository _eventsRepository;
        public DbUpdateService(IEventsRepository eventsRepository)
        {
            _lastChecked = DateTime.UtcNow;
            _eventsRepository = eventsRepository;
        }

        public async void UpdateEventsDb(List<EventModelRequestDto> events)
        {
            
        }
    }
}