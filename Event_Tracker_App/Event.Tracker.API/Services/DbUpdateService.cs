using Event.Tracker.API.Contracts;
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
            _timer = new Timer(Run, null, TimeSpan.Zero, TimeSpan.FromMinutes(1440)); //Every 24 hours
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _timer?.Change(Timeout.Infinite, 0);
            return Task.CompletedTask;
        }

        private async void Run(object state)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var updateLogsRepository = scope.ServiceProvider.GetRequiredService<IUpdateLogsRepository>();
                var fetchExternalEventsToDb = scope.ServiceProvider.GetRequiredService<IFetchExternalEventsToDb>();
                await FetchAndUpdateAllEvents(updateLogsRepository, fetchExternalEventsToDb);
            }
        }

        private async Task FetchAndUpdateAllEvents(IUpdateLogsRepository updateLogsRepository, IFetchExternalEventsToDb fetchExternalEventsToDb)
        {
            var lastUpdateLog = await updateLogsRepository.GetLatestUpdateLog();

            double minPassedSinceLastUpdated = -1;
            double minSinceTicksterUpdated = -1;
            double minSinceGoogleEvsUpdated = -1;

            if(lastUpdateLog == null)
            {
                Console.WriteLine("Running Initial Db Update");
            }
            else{
                minPassedSinceLastUpdated = minutesPassed(lastUpdateLog.LastUpdated);
                minSinceTicksterUpdated = minutesPassed(lastUpdateLog.TicksterLastUpdated);
                minSinceGoogleEvsUpdated = minutesPassed(lastUpdateLog.GoogleEvsLastUpdated);

                Console.WriteLine("Last Db Update: " + Math.Round(minPassedSinceLastUpdated) + " minutes ago");
                Console.WriteLine("Last Tickster Db Update: " + Math.Round(minSinceTicksterUpdated) + " minutes ago");
                Console.WriteLine("Last GoogleEvs Db Update: " + Math.Round(minSinceGoogleEvsUpdated) + " minutes ago");
            }

            var updateLog = new UpdateLogItem();

            var ticksterUpdated = false;
            var googleEvsUpdated = false;

            if(minSinceTicksterUpdated > 5760 || minSinceTicksterUpdated == -1)
            {
                await fetchExternalEventsToDb.FetchTickster();
                ticksterUpdated = true;
            }
            if(minSinceGoogleEvsUpdated > 0 || minSinceGoogleEvsUpdated == -1)
            {
                await fetchExternalEventsToDb.FetchGoogleEventsResult();
                googleEvsUpdated = true;
            }
            else{
                return;
            }

            updateLog.TicksterLastUpdated = ticksterUpdated ? DateTime.UtcNow : lastUpdateLog.TicksterLastUpdated;
            updateLog.GoogleEvsLastUpdated = googleEvsUpdated ? DateTime.UtcNow : lastUpdateLog.GoogleEvsLastUpdated;
            updateLog.LastUpdated = DateTime.UtcNow;

            await updateLogsRepository.AddUpdateLog(updateLog);
            
            Console.WriteLine($"Successfully Updated! {updateLog.LastUpdated} \nTickster Last Update: {updateLog.TicksterLastUpdated}\nGoogleEvs Last Update: {updateLog.GoogleEvsLastUpdated}");
        }

        private double minutesPassed(DateTime input)
        {
            return (DateTime.UtcNow - input).TotalMinutes;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}