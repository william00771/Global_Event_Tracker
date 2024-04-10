using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Contracts
{
    public interface IEventsRepository
    {
        Task<List<EventModel>> GetAllEventsAsync();
        Task PostEventAsync(EventModel eventModel);
    }
}