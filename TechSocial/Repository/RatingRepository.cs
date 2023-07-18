
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class RatingRepository : Repository<TblRating>, IRatingRepository
    {
        private TechSocialDbConText _db;
        public RatingRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }



        public void Update(TblRating obj)
        {
            _db.tblRatings.Update(obj);
        }
    }
}
