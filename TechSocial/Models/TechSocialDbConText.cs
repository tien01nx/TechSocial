using BoxNews.Models;
using Microsoft.EntityFrameworkCore;

namespace TechSocial.Models
{
    public class TechSocialDbConText : DbContext
    {
        public TechSocialDbConText()
        {
        }


        public TechSocialDbConText(DbContextOptions<TechSocialDbConText> options) : base(options)
        {

        }

        public virtual DbSet<TblAccount> tblAccounts { get; set; } = null!;
        public virtual DbSet<TblCategory> tblCategory { get; set; } = null!;
        public virtual DbSet<TblPost> tblPosts { get; set; } = null!;
        public virtual DbSet<TblRating> tblRatings { get; set; } = null!;
        public virtual DbSet<TblRole> tblRoles { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
