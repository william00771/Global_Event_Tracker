using Event.Tracker.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Event.Tracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{

    [HttpGet]
    public async Task<ActionResult<EventModel>> GetWeatherForecast()
    {
        var ev = new EventModel{
            Id = 1,
            Name = "Tomorrowland"
        };
        
        return Ok(ev);
    }

    [HttpPost]
    public async Task<IActionResult> PostEvent()
    {
        return Ok();
    }
}
