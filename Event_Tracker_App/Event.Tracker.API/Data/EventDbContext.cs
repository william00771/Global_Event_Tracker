using Event.Tracker.API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Threading.Tasks;

namespace Event.Tracker.API.Data
{
    public class EventDbContext : DbContext
    {
        public EventDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<EventModel> Events { get; set; }
        public DbSet<Coordinates> Coordinates { get; set; }
        public DbSet<UpdateLogItem> UpdateLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventModel>()
                .HasOne(e => e.Location)
                .WithOne()
                .HasForeignKey<EventModel>(e => e.CoordinatesId);
        }
    }
}