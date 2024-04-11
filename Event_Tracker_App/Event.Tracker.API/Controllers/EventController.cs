using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

    [HttpPost]
    public async Task<IActionResult> PostEvent(EventModelRequestDto eventModelRequestDto)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var newEventModel = await _eventRepository.PostEventAsync(eventModelRequestDto, eventModelRequestDto.Image);
        
        return CreatedAtAction(nameof(GetEvent), new {Id = newEventModel.Id}, newEventModel);
        
    }
}
