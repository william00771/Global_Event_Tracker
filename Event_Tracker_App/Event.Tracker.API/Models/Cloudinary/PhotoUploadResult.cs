using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Models.Cloudinary
{
    public class PhotoUploadResult
    {
        public string PublicId { get; set; }
        public string Url { get; set; }
    }
}