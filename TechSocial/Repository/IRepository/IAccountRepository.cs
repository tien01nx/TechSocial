using BoxNews.Models;

namespace TechSocial.Repository.IRepository
{
    public interface IAccountRepository
    {
        Task<IEnumerable<TblAccount>> GetAll();
        Task<TblAccount> Get(int id);
        Task Create(TblAccount tblAccount);
        Task<TblAccount> Delete(int id);
        Task Update(TblAccount tblAccount);
        bool Exists(int id);
        List<TblRole> GetRole();
    }
}
