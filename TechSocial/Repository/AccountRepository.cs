using BoxNews.Models;
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{

    public class AccountRepository : IAccountRepository
    {
        private readonly TechSocialDbConText _context;
        public AccountRepository(TechSocialDbConText context)
        {
            _context = context;
        }

        public async Task Create(TblAccount tblAccount)
        {

            _context.Add(tblAccount);
            await _context.SaveChangesAsync();
        }

        public async Task<TblAccount> Delete(int id)
        {
            var tblAccount = await _context.tblAccounts.FindAsync(id);
            if (tblAccount != null)
            {
                _context.Remove(tblAccount);
                await _context.SaveChangesAsync();

            }
            return tblAccount;
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<TblAccount> Get(int id)
        {
            return await _context.tblAccounts.FindAsync(id);
        }

        public async Task<IEnumerable<TblAccount>> GetAll()
        {
            return await _context.tblAccounts.ToListAsync();
        }

        public List<TblRole> GetRole()
        {
            return _context.tblRoles.ToList();
        }

        public async Task Update(TblAccount tblAccount)
        {
            _context.Update(tblAccount);
            await _context.SaveChangesAsync();
        }
    }
}
