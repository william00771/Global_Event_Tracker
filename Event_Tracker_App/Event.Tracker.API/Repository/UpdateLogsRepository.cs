using Event.Tracker.API.Contracts;
using Event.Tracker.API.Data;
using Event.Tracker.API.Models;

namespace Event.Tracker.API.Repository
{
    public class UpdateLogsRepository : IUpdateLogsRepository
    {
        private readonly EventDbContext _dbContext;
        public UpdateLogsRepository(EventDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<UpdateLogItem> AddUpdateLog(UpdateLogItem logItem)
        {
            await _dbContext.UpdateLogs.AddAsync(logItem);
            return logItem;
        }
    }
}