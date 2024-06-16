using Event.Tracker.API.Contracts;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.Utility;
using Microsoft.AspNetCore.Mvc;

namespace Event.Tracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{
    private readonly IEventsRepository _eventRepository;
    private readonly IPhotoUploader _photoUploader;

    public EventController(IEventsRepository eventRepository, IPhotoUploader photoUploader)
    {
        _eventRepository = eventRepository;
        _photoUploader = photoUploader;
    }

    [HttpGet]
    public async Task<ActionResult<EventModel>> GetEvent(DateTime? startDate, DateTime? endDate, string? keyword)
    {
        var events = await _eventRepository.GetAllEventsAsync(startDate, endDate, keyword);
        return Ok(events);
    }

    [HttpPost("GetEventFromCoordinates")]
    public async Task<ActionResult<EventModel>> GetEventFromCoordinates(BoundingBox boundingBox, int quantity, DateTime? startDate, DateTime? endDate, string? keyword)
    {
        if(quantity == 0)
        {
            return Ok();
        }
        var events = await _eventRepository.GetEventsFromCoordinates(boundingBox, quantity, startDate, endDate, keyword);
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
        
        return CreatedAtAction(nameof(GetEvent), new {Id = newEventModel.Id}, newEventModel);
        
    }
}
