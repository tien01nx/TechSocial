
using TechSocial.Models;

namespace TechSocial.Repository.IRepository
{
    public interface IRatingRepository : IRepository<TblRating>
    {

        void Update(TblRating obj);



    }
}
