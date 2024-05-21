using Event.Tracker.API.Contracts;
using Event.Tracker.API.Dtos;

namespace Event.Tracker.API.Services
{
    public class DbUpdateService
    {
        private static IUpdateLogsRepository _updateLogsRepository;
        private readonly IEventsRepository _eventsRepository;
        public DbUpdateService(IEventsRepository eventsRepository, IUpdateLogsRepository updateLogsRepository)
        {
            _updateLogsRepository = updateLogsRepository;
            _eventsRepository = eventsRepository;
        }

        public async void UpdateEventsDb(List<EventModelRequestDto> events)
        {
            
        }
    }
}