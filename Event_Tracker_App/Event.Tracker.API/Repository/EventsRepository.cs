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
        public async Task<List<EventModel>> GetAllEventsAsync(DateTime? startDate, DateTime? endDate)
        {
            IQueryable<EventModel> query = _eventContext.Events.Include(ev => ev.Location);

            if (startDate != null)
            {
                query = query.Where(ev => ev.Date >= startDate);
            }

            if (endDate != null)
            {
                query = query.Where(ev => ev.DateTo <= endDate);
            }

            var events = await query.ToListAsync();

            return events;
        }

        // IFormFile imageFileRequest
        public async Task<EventModel> PostEventAsync(EventModelRequestDto eventModelRequestDto, IFormFile imageFileRequest)
        {
            var imageUploadResponseObject = await _photoUploader.Addphoto(imageFileRequest);

            var newCoordinates = new Coordinates{
                Lat = eventModelRequestDto.CoordinatesRequest.Lat,
                Lng = eventModelRequestDto.CoordinatesRequest.Lng,
                FormattedAddress = eventModelRequestDto.CoordinatesRequest.FormattedAddress,
            };

            EventModel newEventModel = new EventModel{
                Name = eventModelRequestDto.Name,
                Location = newCoordinates,
                Description = eventModelRequestDto.Description,
                Time = eventModelRequestDto.Time,
                Date = eventModelRequestDto.Date,
                DateTo = eventModelRequestDto.DateTo,
                Duration = eventModelRequestDto.Duration,
                WebsiteUrl = eventModelRequestDto.WebsiteUrl,
                NumberOfPeople = eventModelRequestDto.NumberOfPeople,
                Keywords = eventModelRequestDto.Keywords,
                Image = imageUploadResponseObject.Url
            };

            await _eventContext.Events.AddAsync(newEventModel);
            await _eventContext.SaveChangesAsync();

            return newEventModel;
        }
    }
}