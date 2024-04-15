using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.Utility;
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
        public async Task<List<EventModel>> GetAllEventsAsync(DateTime? startDate, DateTime? endDate, string? keyword)
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

            if (!string.IsNullOrEmpty(keyword))
            {
                query = query.Where(ev => 
                    ev.Name.Contains(keyword) ||
                    ev.Description.Contains(keyword) ||
                    ev.WebsiteUrl.Contains(keyword) ||
                    ev.Keywords.Any(k => k.Contains(keyword))
                );
            }

            var events = await query.ToListAsync();

            return events;
        }

        public async Task<List<EventModel>> GetEventFromBoundingBox(double north, double south, double east, double west, int quantity, DateTime? startDate, DateTime? endDate, string? keyword)
        {
            IQueryable<EventModel> query = _eventContext.Events
                .Where(ev => 
                    ev.Location.Lat <= south &&
                    ev.Location.Lat >= north &&
                    ev.Location.Lng >= west &&
                    ev.Location.Lng <= east)
                .Include(ev => ev.Location)
                .Take(quantity);
                
            if (startDate != null)
            {
                query = query.Where(ev => ev.Date >= startDate);
            }

            if (endDate != null)
            {
                query = query.Where(ev => ev.DateTo <= endDate);
            }

            if (!string.IsNullOrEmpty(keyword))
            {
                query = query.Where(ev => 
                    ev.Name.Contains(keyword) ||
                    ev.Description.Contains(keyword) ||
                    ev.WebsiteUrl.Contains(keyword) ||
                    ev.Keywords.Any(k => k.Contains(keyword))
                );
            }
            

            var events = await query.ToListAsync();

            return events;
        }

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