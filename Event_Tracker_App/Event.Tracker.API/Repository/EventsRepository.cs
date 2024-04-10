using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Event.Tracker.API.Repository
{
    public class EventsRepository : IEventsRepository
    {
        private readonly EventDbContext _eventContext;

        public EventsRepository(EventDbContext eventContext)
        {
            _eventContext = eventContext;
        }
        public async Task<List<EventModel>> GetAllEventsAsync()
        {
            var events = await _eventContext.Events.ToListAsync();
            return events;
        }

        public async Task PostEventAsync(EventModel eventModel)
        {
            await _eventContext.Events.AddAsync(eventModel);
            await _eventContext.SaveChangesAsync();
        }
    }
}