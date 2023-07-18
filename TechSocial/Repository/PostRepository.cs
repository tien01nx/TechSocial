
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class PostRepository : Repository<TblPost>, IPostRepository
    {
        private TechSocialDbConText _db;
        public PostRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }

    

        public IEnumerable<TblPost> GetNewest()
        {
            var newestPosts = _db.tblPosts
         .GroupBy(p => p.Category.CategoryName)
         .Select(g => g.OrderByDescending(p => p.CreatedAt).FirstOrDefault())
         .ToList();

            return newestPosts;
        }
        

        public void Update(TblPost obj)
        {
            _db.tblPosts.Update(obj);
        }
    }
}
