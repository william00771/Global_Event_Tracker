using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models.Cloudinary;

namespace Event.Tracker.API.Contracts
{
    public interface IPhotoUploader
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
    }
}