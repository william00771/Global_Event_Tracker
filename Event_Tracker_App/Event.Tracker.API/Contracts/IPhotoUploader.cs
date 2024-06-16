using Event.Tracker.API.Models.Cloudinary;

namespace Event.Tracker.API.Contracts
{
    public interface IPhotoUploader
    {
        Task<PhotoUploadResult> Addphoto(IFormFile file);
    }
}