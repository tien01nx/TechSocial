
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class UnitOfWork : IUnitOfWork

    {

        private TechSocialDbConText _db;
        public ICategoryRepository Category { get; private set; }
        public IPostRepository Post { get; private set; }
       
        public IAccountRepository Account { get; private set; }


         public IRatingRepository Rating { get; private set; }

        public ICommentRepository Comment { get; private set; } 
        public UnitOfWork(TechSocialDbConText db)
        {
            _db = db;
            Post = new PostRepository(_db);
            Category = new CategoryRepository(_db);
            Account = new AccountRepository(_db);
           Rating = new RatingRepository(_db);
            Comment = new CommentRepository(_db);
          
        }


        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
