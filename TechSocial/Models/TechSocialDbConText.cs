
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace TechSocial.Models
{
    public class TechSocialDbConText : IdentityDbContext<IdentityUser>
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
    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<TblAccount>().ToTable("AspNetUsers");
        }
    }
}
