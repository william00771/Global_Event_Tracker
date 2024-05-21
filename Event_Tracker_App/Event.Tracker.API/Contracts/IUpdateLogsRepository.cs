using Event.Tracker.API.Models;

namespace Event.Tracker.API.Contracts
{
    public interface IUpdateLogsRepository
    {
        Task<UpdateLogItem> AddUpdateLog(UpdateLogItem logItem);
        Task<UpdateLogItem> GetLatestUpdateLog();
    }
}