using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.Utility;

namespace Event.Tracker.API.Contracts
{
    public interface IEventsRepository
    {
        Task<List<EventModel>> GetAllEventsAsync(DateTime? startDate, DateTime? endDate, string? keyword);
        Task<List<EventModel>> GetEventsFromCoordinates(BoundingBox boundingBox, int quantity, DateTime? startDate, DateTime? endDate, string? keyword);
        Task<EventModel> PostEventAsync(EventModelRequestDto eventModel, IFormFile imageFileRequest); 
        Task<EventModel> PostFullEventAsync(EventModel eventModel);
    }
}