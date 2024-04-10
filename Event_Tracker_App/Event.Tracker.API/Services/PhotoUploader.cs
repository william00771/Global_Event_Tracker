using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models.Cloudinary;

namespace Event.Tracker.API.Services
{
    public class PhotoUploader : IPhotoUploader
    {
        public Task<PhotoUploadResult> AddPhoto(IFormFile file)
        {
            throw new NotImplementedException();
        }
    }
}