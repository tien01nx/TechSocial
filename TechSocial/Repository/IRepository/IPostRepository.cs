

using TechSocial.Models;

namespace TechSocial.Repository.IRepository
{
    public interface IPostRepository : IRepository<TblPost>
    {

        void Update(TblPost obj);

    }
}
