using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Event.Tracker.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Event.Tracker.API.Data
{
    public class DbSeeder
    {
        public static void InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            seedMockEventData(scope.ServiceProvider.GetService<EventDbContext>());
        }
         private static void seedMockEventData(EventDbContext context)
        {
            context.Database.Migrate();

            if(context.Events.Any())
            {   
                return;
            }

            var events = new List<EventModel>(){
                new EventModel{
                    Name = "Tomorrowland",
                },
                new EventModel{
                    Name = "The Gothenburg International Science Festival 2024",
                },
                new EventModel{
                    Name = "The Sweden Festival",
                },
            };

            context.Events.AddRange(events);
            context.SaveChanges();
        }
    }
}