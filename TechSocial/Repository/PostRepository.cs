
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



        public void Update(TblPost obj)
        {
            _db.tblPosts.Update(obj);
        }
    }
}
