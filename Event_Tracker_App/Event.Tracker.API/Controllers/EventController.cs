using Microsoft.AspNetCore.Mvc;

namespace Event.Tracker.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{

    [HttpGet]
    public async Task<ActionResult<string>> GetWeatherForecast()
    {
        return Ok("TestHeader");
    }

    [HttpPost]
    public async Task<IActionResult> PostEvent()
    {
        return Ok();
    }
}
