
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class CommentRepository : Repository<TblComments>, ICommentRepository
    {
        private TechSocialDbConText _db;
        public CommentRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }



      
        public void Update(TblComments obj)
        {
            _db.TblComments.Update(obj);
        }
    }
}
