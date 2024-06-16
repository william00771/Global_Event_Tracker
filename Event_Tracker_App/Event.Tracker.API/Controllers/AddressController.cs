using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Event.Tracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly IGeocoderService _geocoderService;

        public AddressController(IGeocoderService geocoderService)
        {
            _geocoderService = geocoderService;
        }

        [HttpGet("getCoordinatesFromAddress")]
        public async Task<ActionResult<Coordinates>> getCoordinatesFromAddress(string Address)
        {
            var coordinates = await _geocoderService.GetCoordinatesFromAddressAsync(Address);

            if (coordinates == null){
                return NotFound();
            }
            
            return Ok(coordinates);
        }
    }
}