

using TechSocial.Models;

namespace TechSocial.Repository.IRepository
{
    public interface IAccountRepository : IRepository<TblAccount>
    {

        void Update(TblAccount obj);

    }
}
