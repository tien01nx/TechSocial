using BoxNews.Models;

namespace TechSocial.Repository.IRepository
{
    public interface IPostRepository
    {
        Task<IEnumerable<TblPost>> GetAll();
        Task<TblPost> Get(int id);
        Task Create(TblPost tblPost, IFormFile? file);
        Task<TblPost> Delete(int id);
        Task Update(TblPost tblPost, IFormFile? file);
        bool Exists(int id);
        List<TblCategory> GetCategory();
        List<TblAccount> GetAccounts();

    }
}
