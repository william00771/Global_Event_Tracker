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
    private readonly EventDbContext _eventContext;

    public EventController(EventDbContext eventContext)
    {
        _eventContext = eventContext;
    }

    [HttpGet]
    public async Task<ActionResult<EventModel>> GetEvent()
    {
        var events = await _eventContext.Events.ToListAsync();
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

        await _eventContext.Events.AddAsync(newEvent);
        await _eventContext.SaveChangesAsync();
        
        return CreatedAtAction(nameof(GetEvent), newEvent);
    }
}
