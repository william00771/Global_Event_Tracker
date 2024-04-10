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

    public EventController(IEventsRepository eventRepository)
    {
        _eventRepository = eventRepository;
    }

    [HttpGet]
    public async Task<ActionResult<EventModel>> GetEvent()
    {
        var events = await _eventRepository.GetAllEventsAsync();
        return Ok(events);
    }

    [HttpPost]
    public async Task<IActionResult> PostEvent(EventModelRequestDto eventModelRequestDto)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var newEvent = new EventModel{
           Name = eventModelRequestDto.name
        };

        await _eventRepository.PostEventAsync(newEvent);
        
        return CreatedAtAction(nameof(GetEvent), newEvent);
    }
}
