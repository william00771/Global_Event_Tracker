using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Event.Tracker.API.Repository
{
    public class EventsRepository : IEventsRepository
    {
        private readonly EventDbContext _eventContext;
        private readonly IPhotoUploader _photoUploader;

        public EventsRepository(EventDbContext eventContext, IPhotoUploader photoUploader)
        {
            _eventContext = eventContext;
            _photoUploader = photoUploader;
        }
        public async Task<List<EventModel>> GetAllEventsAsync()
        {
            var events = await _eventContext.Events.ToListAsync();
            return events;
        }

        public async Task<EventModel> PostEventAsync(EventModelRequestDto eventModelRequestDto)
        {
            var imageUploadResponseObject = await _photoUploader.Addphoto(eventModelRequestDto.Image);

            var newEventModel = new EventModel{
                Name = eventModelRequestDto.Name,
                Location = eventModelRequestDto.Location,
                Description = eventModelRequestDto.Description,
                Duration = eventModelRequestDto.Duration,
                WebsiteUrl = eventModelRequestDto.WebsiteUrl,
                NumberOfPeople = eventModelRequestDto.NumberOfPeople,
                Keywords = eventModelRequestDto.Keywords,
                Image = imageUploadResponseObject.Url,
            };

            await _eventContext.Events.AddAsync(newEventModel);
            await _eventContext.SaveChangesAsync();

            return newEventModel;
        }
    }
}