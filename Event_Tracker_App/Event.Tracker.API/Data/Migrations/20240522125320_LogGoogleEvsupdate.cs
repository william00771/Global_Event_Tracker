using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Event.Tracker.API.Data.Migrations
{
    /// <inheritdoc />
    public partial class LogGoogleEvsupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "GoogleEvsLastUpdated",
                table: "UpdateLogs",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GoogleEvsLastUpdated",
                table: "UpdateLogs");
        }
    }
}
