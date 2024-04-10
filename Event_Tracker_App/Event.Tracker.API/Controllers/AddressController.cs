using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models;
using Event.Tracker.API.Models.GeocoderAPI;
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
        public async Task<ActionResult<GeocoderApiResponse>> getCoordinatesFromAddress(string Address)
        {
            var coordinates = await _geocoderService.GetCoordinatesFromAddressAsync(Address);
            return Ok(coordinates);
        }
    }
}