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
            var lastUpdateLog = await updateLogsRepository.GetLatestUpdateLog();

            if(lastUpdateLog == null)
            {
                await FetchAndUpdateAllEvents(eventsRepository, updateLogsRepository, fetchExternalEventsToDb);
                return;
            }

            double minPassedSinceLastUpdated = (DateTime.UtcNow - lastUpdateLog.LastUpdated).TotalMinutes;
            double minSinceTicksterUpdated = (DateTime.UtcNow - lastUpdateLog.TicksterLastUpdated).TotalMinutes;
            Console.WriteLine("Last Db Update: " + Math.Round(minPassedSinceLastUpdated) + " minutes ago");
            Console.WriteLine("Last Tickster Db Update: " + Math.Round(minSinceTicksterUpdated) + " minutes ago");
            Console.WriteLine($"Next Tickster Update in: {Math.Round(5760 - minPassedSinceLastUpdated)} minutes");

            var updateLog = new UpdateLogItem();
            updateLog.TicksterLastUpdated = DateTime.UtcNow;
            if(minSinceTicksterUpdated > 5760){
                await fetchExternalEventsToDb.FetchTickster();
                updateLog.TicksterLastUpdated = DateTime.UtcNow;
            }
            else{
                return;
            }
            updateLog.LastUpdated = DateTime.UtcNow;
            await updateLogsRepository.AddUpdateLog(updateLog);
            Console.WriteLine($"Successfully Updated! {updateLog.LastUpdated} \nTickster Last Update: {updateLog.TicksterLastUpdated}");
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