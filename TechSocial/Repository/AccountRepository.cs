
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class AccountRepository : Repository<TblAccount>, IAccountRepository
    {
        private TechSocialDbConText _db;
        public AccountRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }



        public void Update(TblAccount obj)
        {
            _db.tblAccounts.Update(obj);
        }
    }
}
