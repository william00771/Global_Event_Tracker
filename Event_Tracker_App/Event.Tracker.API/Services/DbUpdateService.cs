using Event.Tracker.API.Contracts;
using Event.Tracker.API.Dtos;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Services
{
    public class DbUpdateService : IHostedService, IDisposable
    {
        private readonly IServiceProvider _serviceProvider;
        private Timer _timer;
        public DbUpdateService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _timer = new Timer(Run, null, TimeSpan.Zero, TimeSpan.FromMinutes(1440));
            return Task.CompletedTask;
        }

        private async void Run(object state)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var eventsRepository = scope.ServiceProvider.GetRequiredService<IEventsRepository>();
                var updateLogsRepository = scope.ServiceProvider.GetRequiredService<IUpdateLogsRepository>();
                var fetchExternalEventsToDb = scope.ServiceProvider.GetRequiredService<IFetchExternalEventsToDb>();
                await FetchAndUpdateAllEvents(eventsRepository, updateLogsRepository, fetchExternalEventsToDb);
            }
        }

        private async Task FetchAndUpdateAllEvents(IEventsRepository eventsRepository, IUpdateLogsRepository updateLogsRepository, IFetchExternalEventsToDb fetchExternalEventsToDb)
        {
            var lastUpdated = await updateLogsRepository.GetLatestUpdateLog();

            if(lastUpdated == null)
            {
                await FetchAndUpdateAllEvents(eventsRepository, updateLogsRepository, fetchExternalEventsToDb);
                return;
            }

            double minPassedSinceLastUpdated = (DateTime.UtcNow - lastUpdated.LastUpdated).TotalMinutes;
            double hoursPassedSinceLastUpdated = (DateTime.UtcNow - lastUpdated.LastUpdated).TotalHours;
            Console.WriteLine("Last Db Update: " + Math.Round(minPassedSinceLastUpdated) + " minutes ago");

            if(minPassedSinceLastUpdated > 1440){
                await UpdateEventsDb(eventsRepository, updateLogsRepository, fetchExternalEventsToDb);
            }
            else{
                return;
            }  
        }

        private async Task UpdateEventsDb(IEventsRepository eventsRepository, IUpdateLogsRepository updateLogsRepository, IFetchExternalEventsToDb fetchExternalEventsToDb)
        {
            await fetchExternalEventsToDb.FetchTickster();

            var updateLog = new UpdateLogItem
            {
                LastUpdated = DateTime.UtcNow
            };
            await updateLogsRepository.AddUpdateLog(updateLog);

            Console.WriteLine("Successfully Updated!");
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}