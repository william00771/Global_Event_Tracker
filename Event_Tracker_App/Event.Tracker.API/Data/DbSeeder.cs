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
                    // new EventModel{
                    //     Name = "",
                    //     Location = new Coordinates {
                    //         Lat = 59.37254,
                    //         Lng = 18.00041,
                    //         FormattedAddress = ""
                    //     },
                    //     Time = new DateTime(),
                    //     Date = new DateTime(),
                    //     DateTo = new DateTime(),
                    //     Description = "",
                    //     Duration = 3, 
                    //     WebsiteUrl = "",
                    //     NumberOfPeople = 100,
                    //     Keywords = new List<string> {
                    //         "",
                    //         "",
                    //         ""
                    //     },
                    //     Image = ""
                    // },
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
                    new EventModel{
                        Name = "Stockholm Fashion Week 2024",
                        Location = new Coordinates {
                            Lat = 59.3293,
                            Lng = 18.0686,
                            FormattedAddress = "Sergels torg, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 10, 19, 0, 0),
                        Date = new DateTime(2024, 4, 10),
                        DateTo = new DateTime(2024, 4, 10),
                        Description = "Annual fashion week event showcasing the latest trends and designs.",
                        Duration = 4,  
                        WebsiteUrl = "https://www.stockholmfashionweek.com",
                        NumberOfPeople = 200,  
                        Keywords = new List<string> {
                            "Fashion",
                            "Fashion Show",
                            "Trends"
                        },
                        Image = "https://i.pinimg.com/564x/e1/ae/a0/e1aea07ada75b0e3459ca66ced699a56.jpg"
                    },
                    new EventModel{
                        Name = "Filmmaking Masterclass: Directing Techniques",
                        Location = new Coordinates {
                            Lat = 59.3252,
                            Lng = 18.1051,
                            FormattedAddress = "Djurgården, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 15, 10, 0, 0),
                        Date = new DateTime(2024, 4, 15),
                        DateTo = new DateTime(2024, 4, 15),
                        Description = "Intensive workshop on directing techniques for aspiring filmmakers.",
                        Duration = 6,  
                        WebsiteUrl = "https://www.filmmakingmasterclass.com",
                        NumberOfPeople = 50,  
                        Keywords = new List<string> {
                            "Filmmaking",
                            "Workshop",
                            "Directing"
                        },
                        Image = "https://i.pinimg.com/564x/ab/d0/61/abd06122e8601556763cc6e9ae092d5f.jpg"
                    },
                    new EventModel{
                        Name = "Singles Mixer: Find Your Match!",
                        Location = new Coordinates {
                            Lat = 59.3305,
                            Lng = 18.0633,
                            FormattedAddress = "Gamla stan, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 25, 20, 0, 0),
                        Date = new DateTime(2024, 4, 25),
                        DateTo = new DateTime(2024, 4, 25),
                        Description = "An evening of fun and socializing for singles looking to meet new people.",
                        Duration = 4,  
                        WebsiteUrl = "https://www.singlesmixer.com",
                        NumberOfPeople = 60,  
                        Keywords = new List<string> {
                            "Dating",
                            "Singles",
                            "Socializing"
                        },
                        Image = "https://i.pinimg.com/736x/ac/b2/28/acb22845614e80ed857fc100e1207165.jpg"
                    },
                    new EventModel{
                        Name = "Photography Workshop: Mastering Portrait Photography",
                        Location = new Coordinates {
                            Lat = 59.3332,
                            Lng = 18.0652,
                            FormattedAddress = "Vasastan, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 4, 30, 9, 0, 0),
                        Date = new DateTime(2024, 4, 30),
                        DateTo = new DateTime(2024, 4, 30),
                        Description = "A hands-on workshop focused on mastering portrait photography techniques.",
                        Duration = 5,  
                        WebsiteUrl = "https://www.portraitphotographyworkshop.com",
                        NumberOfPeople = 30,  
                        Keywords = new List<string> {
                            "Photography",
                            "Workshop",
                            "Portrait Photography"
                        },
                        Image = "https://i.pinimg.com/736x/f6/21/f9/f621f906c3298a9f035ed26ba864fcf8.jpg"
                    },
                    new EventModel {
                        Name = "Spa Day Retreat",
                        Location = new Coordinates {
                            Lat = 59.3361,
                            Lng = 18.0721,
                            FormattedAddress = "Sturebadet Spa, Sturegallerian, Stureplan, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 4, 20),
                        DateTo = new DateTime(2024, 4, 20),
                        Description = "Relax and rejuvenate with a full day spa retreat at Sturebadet Spa.",
                        Duration = 8,
                        WebsiteUrl = "https://www.sturebadet.se",
                        NumberOfPeople = 50,
                        Keywords = new List<string> {
                            "Spa",
                            "Relaxation",
                            "Wellness"
                        },
                        Image = "https://i.pinimg.com/564x/31/38/a9/3138a9c038784324bf18dacea62c6d79.jpg"
                    },
                    new EventModel {
                        Name = "Squash Tournament",
                        Location = new Coordinates {
                            Lat = 59.3147,
                            Lng = 18.0824,
                            FormattedAddress = "Stockholm Squash Center, Hammarby Fabriksväg, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 4, 25),
                        DateTo = new DateTime(2024, 4, 25),
                        Description = "Compete in our annual squash tournament and showcase your skills.",
                        Duration = 8,
                        WebsiteUrl = "https://www.squashtournament.se",
                        NumberOfPeople = 100,
                        Keywords = new List<string> {
                            "Squash",
                            "Competition",
                            "Sports"
                        },
                        Image = "https://i.pinimg.com/564x/97/04/67/97046734f1dbcc70e2d1f435dcf6dd01.jpg"
                    },
                    new EventModel {
                        Name = "Street Food Festival",
                        Location = new Coordinates {
                            Lat = 59.3151,
                            Lng = 18.0265,
                            FormattedAddress = "Hornstull Market, Hornstullstrand, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 4, 27),
                        DateTo = new DateTime(2024, 4, 27),
                        Description = "Indulge in a variety of delicious street food from around the world at our festival.",
                        Duration = 8,
                        WebsiteUrl = "https://www.streetfoodfest.com",
                        NumberOfPeople = 200,
                        Keywords = new List<string> {
                            "Street Food",
                            "Food Festival",
                            "Cuisine"
                        },
                        Image = "https://i.pinimg.com/564x/3e/ea/f2/3eeaf273a76a419caff6a1bb4d8382db.jpg"
                    },
                    new EventModel {
                        Name = "Tech Summit 2024",
                        Location = new Coordinates {
                            Lat = 59.3284,
                            Lng = 18.0544,
                            FormattedAddress = "Stockholm Waterfront Congress Centre, Nils Ericsons Plan 4, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 4, 30),
                        DateTo = new DateTime(2024, 4, 30),
                        Description = "Join industry leaders and innovators at our annual tech summit.",
                        Duration = 8,
                        WebsiteUrl = "https://www.techsummit.se",
                        NumberOfPeople = 500,
                        Keywords = new List<string> {
                            "Tech",
                            "Innovation",
                            "Summit"
                        },
                        Image = "https://i.pinimg.com/736x/18/56/1e/18561e3f8837f8df5353ef7ab64e5622.jpg"
                    },
                    new EventModel {
                        Name = "Tennis Open Day",
                        Location = new Coordinates {
                            Lat = 59.3335,
                            Lng = 18.0892,
                            FormattedAddress = "Gärdet Tennis Club, Valhallavägen, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 5),
                        DateTo = new DateTime(2024, 5, 5),
                        Description = "Try your hand at tennis and enjoy a fun-filled day at our open event.",
                        Duration = 4,
                        WebsiteUrl = "https://www.tennisopenday.se",
                        NumberOfPeople = 50,
                        Keywords = new List<string> {
                            "Tennis",
                            "Sports",
                            "Open Day"
                        },
                        Image = "https://i.pinimg.com/564x/d3/f2/48/d3f2486b7ac99f10ca9b561c18cd75f1.jpg"
                    },
                    new EventModel {
                        Name = "VIP Cocktail Party",
                        Location = new Coordinates {
                            Lat = 59.3357,
                            Lng = 18.077,
                            FormattedAddress = "Berns Salonger, Berzelii Park, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 10),
                        DateTo = new DateTime(2024, 5, 10),
                        Description = "Experience luxury and exclusivity at our VIP cocktail party.",
                        Duration = 4,
                        WebsiteUrl = "https://www.vipcocktailparty.com",
                        NumberOfPeople = 50,
                        Keywords = new List<string> {
                            "VIP",
                            "Luxury",
                            "Exclusive"
                        },
                        Image = "https://i.pinimg.com/736x/1b/38/a8/1b38a80c092446761cd6d7e29aaa0477.jpg"
                    },
                    new EventModel {
                        Name = "Volunteer Cleanup Event",
                        Location = new Coordinates {
                            Lat = 59.3257,
                            Lng = 18.0997,
                            FormattedAddress = "Djurgården, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 15),
                        DateTo = new DateTime(2024, 5, 15),
                        Description = "Join us in making a positive impact on the environment by participating in a volunteer cleanup event.",
                        Duration = 4,
                        WebsiteUrl = "https://www.volunteercleanup.se",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Volunteer",
                            "Cleanup",
                            "Environment"
                        },
                        Image = "https://i.pinimg.com/564x/49/c6/2c/49c62c252a8e6846092c9a5273bb653e.jpg"
                    },
                    new EventModel {
                        Name = "Wildlife Photography Workshop",
                        Location = new Coordinates {
                            Lat = 59.324,
                            Lng = 18.1044,
                            FormattedAddress = "Skansen, Djurgårdsslätten, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 18),
                        DateTo = new DateTime(2024, 5, 18),
                        Description = "Learn wildlife photography techniques from experts at Skansen.",
                        Duration = 4,
                        WebsiteUrl = "https://www.wildlifephotographyworkshop.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Wildlife",
                            "Photography",
                            "Workshop"
                        },
                        Image = "https://i.pinimg.com/564x/e4/37/26/e437262fa8414ab3e028bcb899b389f1.jpg"
                    },
                    new EventModel {
                        Name = "Wine Tasting Tour",
                        Location = new Coordinates {
                            Lat = 59.3259,
                            Lng = 18.0708,
                            FormattedAddress = "Gamla Stan, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 22),
                        DateTo = new DateTime(2024, 5, 22),
                        Description = "Explore the flavors of Swedish wines on a guided tasting tour through Gamla Stan.",
                        Duration = 2,
                        WebsiteUrl = "https://www.winetastingtour.se",
                        NumberOfPeople = 15,
                        Keywords = new List<string> {
                            "Wine",
                            "Tasting",
                            "Tour"
                        },
                        Image = "https://i.pinimg.com/736x/c3/0e/4f/c30e4f832cfb37fbcb5d79e8e4f38fad.jpg"
                    },
                    new EventModel {
                        Name = "Writing Workshop: Crafting Short Stories",
                        Location = new Coordinates {
                            Lat = 59.3409,
                            Lng = 18.0561,
                            FormattedAddress = "Stockholm Public Library, Sveavägen, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 25),
                        DateTo = new DateTime(2024, 5, 25),
                        Description = "Hone your storytelling skills at our short story writing workshop.",
                        Duration = 3,
                        WebsiteUrl = "https://www.writingshortstories.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Writing",
                            "Workshop",
                            "Storytelling"
                        },
                        Image = "https://i.pinimg.com/736x/7a/9a/d0/7a9ad05da6d08ed72c2bc4e71dd6f6d2.jpg"
                    },
                    new EventModel {
                        Name = "Yoga in the Park",
                        Location = new Coordinates {
                            Lat = 59.3384,
                            Lng = 18.0868,
                            FormattedAddress = "Humlegården, Östermalm, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 28),
                        DateTo = new DateTime(2024, 5, 28),
                        Description = "Find peace and serenity with an outdoor yoga session in Humlegården.",
                        Duration = 2,
                        WebsiteUrl = "https://www.yogainthepark.se",
                        NumberOfPeople = 30,
                        Keywords = new List<string> {
                            "Yoga",
                            "Wellness",
                            "Outdoor"
                        },
                        Image = "https://i.pinimg.com/564x/69/b1/a8/69b1a8adc3d757bc05fdcf93b3b73001.jpg"
                    },
                    new EventModel {
                        Name = "Morning Run at Djurgården",
                        Location = new Coordinates {
                            Lat = 59.3237,
                            Lng = 18.0933,
                            FormattedAddress = "Djurgården, Stockholm, Sweden"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 1),
                        DateTo = new DateTime(2024, 6, 1),
                        Description = "Start your day with a refreshing morning run through the scenic trails of Djurgården.",
                        Duration = 1,
                        WebsiteUrl = "https://www.morningrun.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Running",
                            "Exercise",
                            "Outdoor"
                        },
                        Image = "https://i.pinimg.com/736x/31/89/19/31891953c5805b3b27693e3aa3350811.jpg"
                    },
                    new EventModel {
                        Name = "Paella Cooking Class",
                        Location = new Coordinates {
                            Lat = 41.3830,
                            Lng = 2.1830,
                            FormattedAddress = "Port Vell, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 10),
                        DateTo = new DateTime(2024, 5, 10),
                        Description = "Master the art of traditional Spanish paella in this hands-on cooking class right by the sea.",
                        Duration = 3,
                        WebsiteUrl = "https://www.paellacookingclassbarcelona.com",
                        NumberOfPeople = 15,
                        Keywords = new List<string> {
                            "Cooking",
                            "Paella",
                            "Class"
                        },
                        Image = "https://i.pinimg.com/564x/f9/e6/e6/f9e6e67331f121e76194cdc92590b455.jpg"
                    },
                    new EventModel {
                        Name = "Latin Concert Night",
                        Location = new Coordinates {
                            Lat = 41.3794,
                            Lng = 2.1729,
                            FormattedAddress = "El Poble-sec, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 15),
                        DateTo = new DateTime(2024, 6, 15),
                        Description = "Enjoy a vibrant evening of Latin music featuring top artists at a popular local venue.",
                        Duration = 4,
                        WebsiteUrl = "https://www.latinconcertnightbarcelona.com",
                        NumberOfPeople = 25,
                        Keywords = new List<string> {
                            "Concert",
                            "Music",
                            "Latin"
                        },
                        Image = "https://i.pinimg.com/736x/c5/e1/70/c5e170defe31a175c358323997e3bb6f.jpg"
                    },
                    new EventModel {
                        Name = "Stand-Up Comedy Evening",
                        Location = new Coordinates {
                            Lat = 41.3851,
                            Lng = 2.1734,
                            FormattedAddress = "Gothic Quarter, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 5),
                        DateTo = new DateTime(2024, 6, 5),
                        Description = "Laugh out loud with Barcelona's finest comedians in the heart of the historic Gothic Quarter.",
                        Duration = 2,
                        WebsiteUrl = "https://www.comedybarcelona.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Comedy",
                            "Stand-Up",
                            "Show"
                        },
                        Image = "https://i.pinimg.com/564x/f2/86/92/f2869296568bef34773e50f70ff4dd7c.jpg"
                    },
                    new EventModel {
                        Name = "Salsa Dance Fiesta",
                        Location = new Coordinates {
                            Lat = 41.3791,
                            Lng = 2.1890,
                            FormattedAddress = "Barceloneta, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 20),
                        DateTo = new DateTime(2024, 5, 20),
                        Description = "Swing to the rhythm of salsa with enthusiasts from all over the world, right on Barceloneta Beach.",
                        Duration = 3,
                        WebsiteUrl = "https://www.salsabeachfiesta.com",
                        NumberOfPeople = 30,
                        Keywords = new List<string> {
                            "Salsa",
                            "Dance",
                            "Party"
                        },
                        Image = "https://i.pinimg.com/564x/9c/aa/90/9caa90bab4502fb76ebcb59dddd4f151.jpg"
                    },
                    new EventModel {
                        Name = "Financial Freedom Workshop",
                        Location = new Coordinates {
                            Lat = 41.3927,
                            Lng = 2.1649,
                            FormattedAddress = "Eixample, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 10),
                        DateTo = new DateTime(2024, 6, 10),
                        Description = "Explore strategies for financial independence and wealth management with leading financial experts.",
                        Duration = 4,
                        WebsiteUrl = "https://www.financialfreedombarcelona.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Finance",
                            "Freedom",
                            "Workshop"
                        },
                        Image = "https://i.pinimg.com/564x/4d/0d/77/4d0d775fee52093540d29dfe234b3a74.jpg"
                    },
                    new EventModel {
                        Name = "Gymnastics Workshop at the Beach",
                        Location = new Coordinates {
                            Lat = 41.3676,
                            Lng = 2.1901,
                            FormattedAddress = "Barceloneta Beach, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 15),
                        DateTo = new DateTime(2024, 5, 15),
                        Description = "Join our beachfront gymnastics session to improve flexibility and core strength under the open sky.",
                        Duration = 2,
                        WebsiteUrl = "https://www.beachgymnasticsbarcelona.com",
                        NumberOfPeople = 15,
                        Keywords = new List<string> {
                            "Gym",
                            "Workout",
                            "Beach"
                        },
                        Image = "https://i.pinimg.com/564x/36/9f/63/369f63d4aede3212055986fd8d6c353a.jpg"
                    },
                    new EventModel {
                        Name = "Catalan Cooking Fiesta",
                        Location = new Coordinates {
                            Lat = 41.3773,
                            Lng = 2.1585,
                            FormattedAddress = "Ciutat Vella, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 12),
                        DateTo = new DateTime(2024, 6, 12),
                        Description = "Dive into the heart of Catalan cuisine and learn to cook traditional dishes with local chefs.",
                        Duration = 3,
                        WebsiteUrl = "https://www.catalancookingfiesta.com",
                        NumberOfPeople = 15,
                        Keywords = new List<string> {
                            "Cooking",
                            "Catalan",
                            "Gastronomy"
                        },
                        Image = "https://i.pinimg.com/564x/78/74/5d/78745dd404973d108a1c3a70697c5600.jpg"
                    },
                    new EventModel {
                        Name = "Spanish Language Immersion Day",
                        Location = new Coordinates {
                            Lat = 41.3810,
                            Lng = 2.1720,
                            FormattedAddress = "El Raval, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 8),
                        DateTo = new DateTime(2024, 6, 8),
                        Description = "Enhance your Spanish speaking skills through practical immersion techniques in a friendly setting.",
                        Duration = 6,
                        WebsiteUrl = "https://www.spanishimmersionday.com",
                        NumberOfPeople = 10,
                        Keywords = new List<string> {
                            "Language",
                            "Spanish",
                            "Learning"
                        },
                        Image = "https://i.pinimg.com/564x/26/68/41/2668417627be3593e8451c00579917b1.jpg"
                    },
                    new EventModel {
                        Name = "Gourmet Food Tour",
                        Location = new Coordinates {
                            Lat = 41.3850,
                            Lng = 2.1599,
                            FormattedAddress = "Las Ramblas, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 25),
                        DateTo = new DateTime(2024, 5, 25),
                        Description = "Savor the tastes of Barcelona on a gourmet tour featuring top eateries and hidden gems.",
                        Duration = 4,
                        WebsiteUrl = "https://www.gourmetfoodtourbarcelona.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Gastronomy",
                            "Food",
                            "Tour"
                        },
                        Image = "https://i.pinimg.com/564x/47/6b/65/476b6583525ca075ac63837534f4f690.jpg"
                    },
                    new EventModel {
                        Name = "Salsa Dance Workshop",
                        Location = new Coordinates {
                            Lat = 41.3785,
                            Lng = 2.1894,
                            FormattedAddress = "Barceloneta Beach, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 30),
                        DateTo = new DateTime(2024, 5, 30),
                        Description = "Learn the sensual moves of salsa from experienced dancers in an inspiring beachfront setting.",
                        Duration = 2,
                        WebsiteUrl = "https://www.salsadanceworkshop.com",
                        NumberOfPeople = 25,
                        Keywords = new List<string> {
                            "Salsa",
                            "Dance",
                            "Workshop"
                        },
                        Image = "https://i.pinimg.com/564x/56/7f/28/567f28e282ed546dac83866504df3bd0.jpg"
                    },
                    new EventModel {
                        Name = "Open Air Concert",
                        Location = new Coordinates {
                            Lat = 41.3922,
                            Lng = 2.1651,
                            FormattedAddress = "Eixample, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 6, 20),
                        DateTo = new DateTime(2024, 6, 20),
                        Description = "Experience an unforgettable night of live music under the stars at one of Barcelona's iconic open air venues.",
                        Duration = 3,
                        WebsiteUrl = "https://www.openairconcertbarcelona.com",
                        NumberOfPeople = 30,
                        Keywords = new List<string> {
                            "Concert",
                            "Music",
                            "Outdoor"
                        },
                        Image = "https://i.pinimg.com/564x/d1/20/fb/d120fb9c14bb302f9fe767375af0a185.jpg"
                    },
                     new EventModel {
                        Name = "Beach Yoga Sunrise Session",
                        Location = new Coordinates {
                            Lat = 41.4029,
                            Lng = 2.2171,
                            FormattedAddress = "Platja de la Nova Mar Bella, Barcelona, Spain"
                        },
                        Time = new DateTime(2024, 04, 01, 00, 00, 00),
                        Date = new DateTime(2024, 5, 5),
                        DateTo = new DateTime(2024, 5, 5),
                        Description = "Greet the day with a rejuvenating yoga session as the sun rises over the Mediterranean.",
                        Duration = 2,
                        WebsiteUrl = "https://www.beachyogabarcelona.com",
                        NumberOfPeople = 20,
                        Keywords = new List<string> {
                            "Yoga",
                            "Beach",
                            "Wellness"
                        },
                        Image = "https://i.pinimg.com/474x/5d/48/ad/5d48ad9aff34c95156edee0e0d2cf4f6.jpg"
                    },

                    
                };
                context.Events.AddRange(events);
                context.SaveChanges();
            }
        }
    }
}