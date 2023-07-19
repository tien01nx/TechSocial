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

        public IActionResult Search()
        {
            var all = _unitOfWork.Post.GetAll(includeProperties: "Category,IdentityUser").Select(p => new PostDTO
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
