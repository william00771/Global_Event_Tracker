using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.Utility;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event.Tracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly IEventsRepository _eventRepository;
    private readonly IPhotoUploader _photoUploader;

    public EventsController(IEventsRepository eventRepository, IPhotoUploader photoUploader)
    {
        _eventRepository = eventRepository;
        _photoUploader = photoUploader;
    }

    [HttpGet]
    public async Task<ActionResult<EventModel>> GetAllEvents(DateTime? startDate, DateTime? endDate, string? keyword)
    {
        var events = await _eventRepository.GetAllEventsAsync(startDate, endDate, keyword);
        return Ok(events);
    }

    [HttpGet("bounding-box")]
    public async Task<ActionResult<EventModel>> getEventsFromBoundingBox(double ynorth, double ysouth, double xeast, double xwest, int quantity, DateTime? startDate, DateTime? endDate, string? keyword)
    {
        if(quantity == 0)
        {
            var BaseEvents = new List<EventModel>()
            {

            };
            return Ok(BaseEvents);
        }
        var events = await _eventRepository.GetEventsFromBoundingBox(ynorth, ysouth, xeast, xwest, quantity, startDate, endDate, keyword);
        return Ok(events);
    }

    [HttpPost]
    public async Task<IActionResult> PostEvent([FromForm] EventModelRequestDto eventModelRequestDto)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var imageFile = eventModelRequestDto.Image;


        var newEventModel = await _eventRepository.PostEventAsync(eventModelRequestDto, imageFile);
        
        return CreatedAtAction(nameof(getEventsFromBoundingBox), new {Id = newEventModel.Id}, newEventModel);
        
    }
}
