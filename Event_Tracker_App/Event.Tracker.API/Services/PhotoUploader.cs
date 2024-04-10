using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Event.Tracker.API.Configuration;
using Event.Tracker.API.Contracts;
using Event.Tracker.API.Models.Cloudinary;
using Microsoft.Extensions.Options;

namespace Event.Tracker.API.Services
{
     public class PhotoUploader : IPhotoUploader
    {
        private readonly Cloudinary _cloudinary;
        public PhotoUploader(IOptions<CloudinarySettings> config)
        {
            var account = new Account(
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(account);
        }
        public async Task<PhotoUploadResult> Addphoto(IFormFile file)
        {
            if(file.Length > 0)
            {
                await using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    Transformation = new Transformation().Width(1280).Height(720).Crop("fill")
                };

                var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                if(uploadResult.Error != null)
                {
                    throw new Exception(uploadResult.Error.Message);
                }

                return new PhotoUploadResult
                {
                    PublicId = uploadResult.PublicId,
                    Url = uploadResult.SecureUrl.ToString()
                };
                
            }
            return null;
        }
    }
}