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
           Name = eventModelRequestDto.Name,
           Location = eventModelRequestDto.Location,
           Description = eventModelRequestDto.Description,
           Duration = eventModelRequestDto.Duration,
           WebsiteUrl = eventModelRequestDto.WebsiteUrl,
           NumberOfPeople = eventModelRequestDto.NumberOfPeople,
           Keywords = eventModelRequestDto.Keywords,
        };

        await _eventRepository.PostEventAsync(newEvent);
        
        return CreatedAtAction(nameof(GetEvent), newEvent);
    }

    [HttpPost("postPhoto")]
    public async Task<ActionResult> postPhotoTESTING(IFormFile postEventDto)
    {
        var resultupload = await _photoUploader.Addphoto(postEventDto);
        return Ok(resultupload);
    }
}
