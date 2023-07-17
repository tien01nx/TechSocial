
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class CategoryRepository : Repository<TblCategory>, ICategoryRepository
    {
        private TechSocialDbConText _db;
        public CategoryRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }



        public void Update(TblCategory obj)
        {
            _db.tblCategory.Update(obj);
        }
    }
}
