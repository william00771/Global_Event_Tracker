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

            if(!context.Events.Any())
            {   
                var events = new List<EventModel>(){
                    new EventModel{
                        Name = "",
                        Location = new Coordinates {
                            Lat = 59.37254,
                            Lng = 18.00041,
                            FormattedAddress = ""
                        },
                        Time = new DateTime(),
                        Date = new DateTime(),
                        DateTo = new DateTime(),
                        Description = "",
                        Duration = 3, 
                        WebsiteUrl = "",
                        NumberOfPeople = 100,
                        Keywords = new List<string> {
                            "",
                            "",
                            ""
                        },
                        Image = ""
                    },
                    new EventModel{
                        Name = "P!NK - SUMMER CARNIVAL 2024",
                        Location = new Coordinates {
                            Lat = 59.37254,
                            Lng = 18.00041,
                            FormattedAddress = "Friends Arena, Solna, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 7, 25, 18, 45, 0),
                        Date = new DateTime(2024, 7, 25),
                        DateTo = new DateTime(2024, 7, 25),
                        Description = "Music concert featuring P!NK at the Friends Arena in Solna.",
                        Duration = 3, 
                        WebsiteUrl = "https://www.ticketmaster.se/event/pnk--summer-carnival-2024-biljetter/648259",
                        NumberOfPeople = 100,
                        Keywords = new List<string> {
                            "Music",
                            "Concert",
                            "P!NK"
                        },
                        Image = "https://s1.ticketm.net/dam/a/49d/ee95b250-8556-47a1-afcd-e7de1556f49d_TABLET_LANDSCAPE_LARGE_16_9.jpg"
                    },
                    new EventModel{
                        Name = "THE THE",
                        Location = new Coordinates {
                            Lat = 59.33948,
                            Lng = 18.03484,
                            FormattedAddress = "Filadelfia Convention Center, Rörstrandsgatan 5, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 9, 13, 20, 0, 0),
                        Date = new DateTime(2024, 9, 13),
                        DateTo = new DateTime(2024, 9, 13),
                        Description = "Music concert featuring THE THE at the Filadelfia Convention Center.",
                        Duration = 2,  
                        WebsiteUrl = "https://www.ticketmaster.se/event/the-the-biljetter/655035",
                        NumberOfPeople = 30,  
                        Keywords = new List<string> {
                            "Music",
                            "Concert",
                            "THE THE"
                        },
                        Image = "https://s1.ticketm.net/dam/a/cc3/ff9037bd-7b76-4648-8642-c1fe5747acc3_TABLET_LANDSCAPE_LARGE_16_9.jpg"
                    },
                    new EventModel{
                        Name = "LOL Comedy Club | Tobias Persson, Shanthi Rydwall-Menon",
                        Location = new Coordinates {
                            Lat = 59.33638,
                            Lng = 18.07163,
                            FormattedAddress = "Hotel Kung Carl, Birger Jarlsgatan 21, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 11, 20, 0, 0),
                        Date = new DateTime(2024, 4, 11),
                        DateTo = new DateTime(2024, 4, 11),
                        Description = "Comedy event at Hotel Kung Carl featuring Tobias Persson and Shanthi Rydwall-Menon.",
                        Duration = 2,
                        WebsiteUrl = "https://www.ticketmaster.se/event/lol-comedy-club-tobias-persson-shanthi-rydwall-menon-biljetter/653135",
                        NumberOfPeople = 300,
                        Keywords = new List<string> {
                            "Comedy",
                            "LOL Comedy Club",
                            "Stand-up"
                        },
                        Image = "https://s1.ticketm.net/dam/c/50a/fa9caa1f-73a1-411e-b507-ec56fa59650a_106061_RETINA_LANDSCAPE_16_9.jpg"
                    },
                    new EventModel{
                        Name = "Svartklubben - Mat & Musik i Mörker",
                        Location = new Coordinates {
                            Lat = 59.31209,
                            Lng = 18.08133,
                            FormattedAddress = "Svartklubben, Södermannagatan 27, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 12, 18, 0, 0),
                        Date = new DateTime(2024, 4, 12),
                        DateTo = new DateTime(2024, 4, 12),
                        Description = "Dining and music experience in complete darkness at Svartklubben.",
                        Duration = 3, 
                        WebsiteUrl = "https://www.ticketmaster.se/event/svartklubben-mat--musik-i-morker-biljetter/653355",
                        NumberOfPeople = 100, 
                        Keywords = new List<string> {
                            "Dining in the Dark",
                            "Music",
                            "Svartklubben"
                        },
                        Image = "https://s1.ticketm.net/dam/a/841/1c1b2a57-616a-4e71-8e64-37d129780841_TABLET_LANDSCAPE_3_2.jpg"
                    },
                    new EventModel{
                        Name = "Spökvandring i Stockholm",
                        Location = new Coordinates {
                            Lat = 59.32524,
                            Lng = 18.07077,
                            FormattedAddress = "Utanför Nobelmuseet, Stortorget 2, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 11, 18, 30, 0),
                        Date = new DateTime(2024, 4, 11),
                        DateTo = new DateTime(2024, 4, 11),
                        Description = "Ghost walk around Stockholm starting outside the Nobel Museum.",
                        Duration = 2,
                        WebsiteUrl = "https://www.ticketmaster.se/event/spokvandring-i-stockholm-biljetter/649291",
                        NumberOfPeople = 50, 
                        Keywords = new List<string> {
                            "Ghost Walk",
                            "Tour",
                            "Historical"
                        },
                        Image = "https://s1.ticketm.net/dam/c/03e/e15ef00f-2c87-4421-ae61-d740851a703e_105891_TABLET_LANDSCAPE_3_2.jpg"
                    },
                };
                context.Events.AddRange(events);
                context.SaveChanges();
            }
        }
    }
}