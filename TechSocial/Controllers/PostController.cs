using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using TechSocial.Models;
using TechSocial.Models.DTO;
using TechSocial.Repository.IRepository;

namespace TechSocial.Controllers
{
    public class PostController : Controller
    {

        private readonly IUnitOfWork _unitOfWork;

        public PostController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
       
        public IActionResult Index(string CategoryName)
        {
            var posts = _unitOfWork.Post.GetAll(u=>u.Category.CategoryName.Equals(CategoryName),includeProperties:"Category");

            return View(posts);
        }


        [HttpPost]
        public  IActionResult IncrementPostView(int id)
        {
            // Tìm kiếm bài viết với id được truyền vào
            var post =  _unitOfWork.Post.Get(u=>u.PostId ==id);

            if (post == null)
            {
                return NotFound();
            }

            // Tăng số lượt xem
            post.PostsView = (post.PostsView ?? 0) + 1;

            // Cập nhật bài viết
            _unitOfWork.Post.Update(post);
             _unitOfWork.Save();

            return Ok();
        }



        public IActionResult Search(string CategoryName)
        {
            var all = _unitOfWork.Post.GetAll(u=>u.Category.CategoryName.Equals(CategoryName),includeProperties: "Category,IdentityUser").Select(p => new PostDTO
            {
                Id = p.PostId,
                Title = p.Title,
                UserName = p.IdentityUser.UserName,
                Image = p.ImgSrc,
                CategoryName = p.Category.CategoryName,
                Created = p.CreatedAt

            });

            return Json(all);
        }

        [HttpGet]
        public IActionResult SearchCategoryName(string CategoryName)
        {
            var posts = _unitOfWork.Post.GetAll(u => u.Category.CategoryName.Equals(CategoryName), includeProperties: "Category,IdentityUser").Select(p => new PostDTO
            {
                Id = p.PostId,
                Title = p.Title,
                UserName = p.IdentityUser.UserName,
                Image = p.ImgSrc,
                CategoryName = p.Category.CategoryName,
                Created = p.CreatedAt

            });
            return Json(posts);
        }



        // Tìm kiếm  theo title của Posts
        //[HttpPost]
        //public IActionResult SearchCategory(string search)
        //{


        //    IEnumerable<PostDTO> all = _unitOfWork.Post.GetAll(u => u.Title.Contains(search), includeProperties: "Category,IdentityUser,").Select(p => new PostDTO
        //    {
        //        Id = p.PostId,
        //        Title = p.Title,
        //        UserName = p.IdentityUser.UserName,
        //        Image = p.ImgSrc,
        //        CategoryName = p.Category.CategoryName,
        //        Created = p.CreatedAt
        //    }).ToList();




        //    return View(all);
        //}


        //tìm kiếm theo Title của tblPost và theo bình luận

        //[HttpPost]
        // public IActionResult SearchCategory(string search)
        // {
        //     // Kết nối với bảng TblComments thông qua PostId
        //     var all = _unitOfWork.Post.GetAll(includeProperties: "Category,IdentityUser")
        //         .Join(_unitOfWork.Comment.GetAll(),
        //               post => post.PostId,
        //               comment => comment.PostId,
        //               (post, comment) => new { Post = post, Comment = comment })
        //         .Where(pc => pc.Post.Title.Contains(search) || pc.Comment.Description.Contains(search))
        //         .Select(pc => new PostDTO
        //         {
        //             Id = pc.Post.PostId,
        //             Title = pc.Post.Title,
        //             UserName = pc.Post.IdentityUser.UserName,
        //             Image = pc.Post.ImgSrc,
        //             CategoryName = pc.Post.Category.CategoryName,
        //             Created = pc.Post.CreatedAt
        //         })
        //         .ToList();

        //     return View(all);
        // }




        //  hàm trả về dữ liệu có tính tống người đã bình luận

        public IActionResult GetPostsAndCommentsCount()
        {


            var postsWithCommentsCount = _unitOfWork.Post.GetAll(includeProperties: "Category,IdentityUser")
                .Select(post => new PostResponseData
                {
                    PostId = post.PostId,
                    Title = post.Title,
                    CreatedAt = post.CreatedAt?.ToString("yyyy-MM-dd HH:mm:ss") ?? "N/A",
                    Content = post.Content,
                    ImgSrc = post.ImgSrc,
                    PostsView = post.PostsView,
                    UserName = post.IdentityUser.UserName,
                    CategoryId = post.CategoryId,
                    CommentsCount = _unitOfWork.Comment.GetAll(c => c.PostId == post.PostId).Count()
                })
                .ToList();

            return Json(postsWithCommentsCount);
        }


    }
}
