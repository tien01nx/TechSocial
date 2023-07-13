using BoxNews.Models;

namespace TechSocial.Repository.IRepository
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<TblCategory>> GetAll();
        Task<TblCategory> Get(int id);
        Task Create(TblCategory tblCategory);
        Task<TblCategory> Delete(int id);
        Task Update(TblCategory tblCategory);
        bool Exists(int id);
    }
}
