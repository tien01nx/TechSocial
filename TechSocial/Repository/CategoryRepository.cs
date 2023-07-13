using BoxNews.Models;
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{

    public class CategoryRepository : ICategoryRepository
    {
        private readonly TechSocialDbConText _context;
        public CategoryRepository(TechSocialDbConText context)
        {
            _context = context;
        }

        public async Task Create(TblCategory tblCategory)
        {

            _context.Add(tblCategory);
            await _context.SaveChangesAsync();
        }

        public async Task<TblCategory> Delete(int id)
        {
            var tblCategory = await _context.tblCategory.FindAsync(id);
            if (tblCategory != null)
            {
                _context.Remove(tblCategory);
                await _context.SaveChangesAsync();

            }
            return tblCategory;
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<TblCategory> Get(int id)
        {
            return await _context.tblCategory.FindAsync(id);
        }

        public async Task<IEnumerable<TblCategory>> GetAll()
        {
            return await _context.tblCategory.ToListAsync();
        }

        public async Task Update(TblCategory tblCategory)
        {
            _context.Update(tblCategory);
            await _context.SaveChangesAsync();
        }
    }
}
