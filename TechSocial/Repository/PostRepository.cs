
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using TechSocial.Models.DTO;
using TechSocial.Repository.IRepository;

namespace TechSocial.Repository
{
    public class PostRepository : Repository<TblPost>, IPostRepository
    {
        private TechSocialDbConText _db;
        public PostRepository(TechSocialDbConText db) : base(db)
        {
            _db = db;
        }

     

        public IEnumerable<TblPost> GetNewest()
        {
            var newestPosts = _db.tblPosts
         .GroupBy(p => p.Category.CategoryName)
         .Select(g => g.OrderByDescending(p => p.CreatedAt).FirstOrDefault())
         .ToList();

            return newestPosts;
        }

        public IEnumerable<PostResponseData> GetPostsWithCommentsCount(string CategoryName)
        {
            return _db.tblPosts.Where(u=>u.Category.CategoryName.Equals(CategoryName))
                .Include(p => p.Category)
                .Include(p => p.IdentityUser)
                .Select(post => new PostResponseData
                {
                    PostId = post.PostId,
                    Title = post.Title,
                    CreatedAt = post.CreatedAt.HasValue ? post.CreatedAt.Value.ToString("yyyy-MM-dd HH:mm:ss") : "N/A",
                    Content = post.Content,
                    ImgSrc = post.ImgSrc,
                    PostsView = post.PostsView,
                    UserName = post.IdentityUser.UserName,
                    CategoryId = post.CategoryId,
                    CommentsCount = _db.TblComments.Count(c => c.PostId == post.PostId)
                })
                .ToList();
        }

        public IEnumerable<PostResponseData> GetPostTitle(string Title)
        {
            return _db.tblPosts.Where(u => u.Title.Equals(Title))
                .Include(p => p.Category)
                .Include(p => p.IdentityUser)
                .Select(post => new PostResponseData
                {
                    PostId = post.PostId,
                    Title = post.Title,
                    CreatedAt = post.CreatedAt.HasValue ? post.CreatedAt.Value.ToString("yyyy-MM-dd HH:mm:ss") : "N/A",
                    Content = post.Content,
                    ImgSrc = post.ImgSrc,
                    PostsView = post.PostsView,
                    UserName = post.IdentityUser.UserName,
                    CategoryId = post.CategoryId,
                    CommentsCount = _db.TblComments.Count(c => c.PostId == post.PostId)
                })
                .ToList();
        }

        public void Update(TblPost obj)
        {
            _db.tblPosts.Update(obj);
        }
    }
}
