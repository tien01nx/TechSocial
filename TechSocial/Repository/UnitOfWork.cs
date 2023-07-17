﻿
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class UnitOfWork : IUnitOfWork

    {

        private TechSocialDbConText _db;
        public ICategoryRepository Category { get; private set; }
        public IPostRepository Post { get; private set; }
       
        public IAccountRepository Account { get; private set; }

      

        public UnitOfWork(TechSocialDbConText db)
        {
            _db = db;
            Post = new PostRepository(_db);
            Category = new CategoryRepository(_db);
            Account = new AccountRepository(_db);
          
        }


        public void Save()
        {
            _db.SaveChanges();
        }
    }
}
