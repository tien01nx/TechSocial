using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
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
    }
}
