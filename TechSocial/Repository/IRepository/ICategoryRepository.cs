
using TechSocial.Models;

namespace TechSocial.Repository.IRepository
{
    public interface ICategoryRepository : IRepository<TblCategory>
    {

        void Update(TblCategory obj);

    }
}
