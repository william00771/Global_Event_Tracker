using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Event.Tracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        [HttpGet("getCoordinatesFromAddress")]
        public async Task<ActionResult<EventMo>> getCoordinatesFromAddress(string Address)
        {
            
            return Ok();
        }
    }
}