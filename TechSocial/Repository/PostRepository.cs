using BoxNews.Models;
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{

    public class PostRepository : IPostRepository
    {
        private readonly TechSocialDbConText _context;
        private readonly IWebHostEnvironment _environment;
        public PostRepository(TechSocialDbConText context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        public async Task Create(TblPost tblPost, IFormFile? file)
        {

            string wwwRootPath = _environment.WebRootPath;
            if (file != null && file.Length > 0)
            {
                string fileExtension = Path.GetExtension(file.FileName).ToLower();
                if (fileExtension != ".png" && fileExtension != ".jpg")
                {
                    throw new Exception("Vui lòng chỉ chọn tập tin ảnh định dạng PNG hoặc JPG.");
                }

                string filename = Guid.NewGuid().ToString() + fileExtension;
                string postPath = Path.Combine(wwwRootPath, @"image\Post");

                string filePath = Path.Combine(postPath, filename);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                tblPost.ImgSrc = @"\image\Post\" + filename;
            }

            _context.Add(tblPost);
            await _context.SaveChangesAsync();
        }

        public async Task<TblPost> Delete(int id)
        {
            var tblPost = await _context.tblPosts.FindAsync(id);
            if (tblPost != null)
            {
                if(tblPost.ImgSrc != null)
                {
                    var oldImageUrl = Path.Combine(_environment.WebRootPath, tblPost.ImgSrc.TrimStart('\\'));

                    if (!string.IsNullOrEmpty(oldImageUrl) && System.IO.File.Exists(oldImageUrl))
                    {
                        System.IO.File.Delete(oldImageUrl);
                    }

                   
                }
                _context.Remove(tblPost);
                await _context.SaveChangesAsync();


            }
            return tblPost;
        }

        public bool Exists(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<TblPost> Get(int id)
        {
            return await _context.tblPosts.FindAsync(id);
        }

        public List<TblAccount> GetAccounts()
        {
            return _context.tblAccounts.ToList();
        }

        public async Task<IEnumerable<TblPost>> GetAll()
        {
            return await _context.tblPosts.ToListAsync();

        }

        public List<TblCategory> GetCategory()
        {
            return  _context.tblCategory.ToList();
        }

      

        public async Task Update(TblPost tblPost, IFormFile file)
        {
            string wwwRootPath = _environment.WebRootPath;
            if (file != null && file.Length > 0)
            {
                string fileExtension = Path.GetExtension(file.FileName).ToLower();
                if (fileExtension != ".png" && fileExtension != ".jpg")
                {
                    throw new Exception("Vui lòng chỉ chọn tập tin ảnh định dạng PNG hoặc JPG.");
                }

                string filename = Guid.NewGuid().ToString() + fileExtension;
                string postPath = Path.Combine(wwwRootPath, @"image\Post");

                string filePath = Path.Combine(postPath, filename);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }

                tblPost.ImgSrc = @"\image\Post\" + filename;
            }

            _context.Update(tblPost);
            await _context.SaveChangesAsync();

        }
    }
}
