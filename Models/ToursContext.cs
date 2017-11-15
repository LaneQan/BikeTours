using Microsoft.EntityFrameworkCore;

namespace BikeTours.Models
{
    public class ToursContext : DbContext
    {
        public ToursContext(DbContextOptions<ToursContext> options): base(options) { }

        public DbSet<User> Users { get; set; }
    }
}