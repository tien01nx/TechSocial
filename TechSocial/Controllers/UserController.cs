using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Dynamic;
using System.Security.Claims;
using TechSocial.Models;
using TechSocial.Models.ViewModel;
using TechSocial.Repository.IRepository;

namespace TechSocial.Controllers
{
  
    public class UserController : Controller
    {
		private readonly IUnitOfWork _unitOfWork;

		public UserController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		public IActionResult Index(string Id)
        {

            UserVM userVM = new UserVM()
            {
                ListPostUser = _unitOfWork.Post.GetAll(u => u.IdentityUser.Id.Equals(Id), includeProperties: "Category,IdentityUser").Take(3).ToList(),
                InfoUser = _unitOfWork.Post.Get(u => u.IdentityUser.Id.Equals(Id), includeProperties: "IdentityUser")
            };
          

            return View(userVM);
           
        }



        // lấy thêm dữ liệu


        // User/LoadMorePosts
        [HttpGet]
        public IActionResult LoadMorePosts(string Id, int offset)
        {
            var posts = _unitOfWork.Post.GetAll(u => u.AccountId.Equals(Id),includeProperties: "IdentityUser")
                        .Skip(offset).Take(3).ToList();
            return Json(posts);
        }



        [Authorize]
        public IActionResult UserPost()
		{
            var potss = new List<TblPost>();

            // Lấy từ cookie
            foreach (var cookie in Request.Cookies)
            {
                if (cookie.Key.StartsWith("BaiViet_"))
                {
                    var postid = int.Parse(cookie.Key.Substring("BaiViet_".Length));
                    var product = _unitOfWork.Post.Get(u => u.PostId == postid, includeProperties: "Category,IdentityUser");
                    if (product != null)
                    {
                        potss.Add(product);
                    }
                }
            }

            return View(potss);

		}



      


        [HttpPost]
        public IActionResult PostComment(TblComments tblComments)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
            tblComments.AccountId = userId;

           tblComments.DateCreated= DateTime.Now;

            if (ModelState.IsValid)
            {
                _unitOfWork.Comment.Add(tblComments);
                _unitOfWork.Save();
                return RedirectToAction(nameof(HomeController.Details), "Home", new { id = tblComments.PostId });
            }
            else
            {
                ViewBag.ErrorMessages = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
            }
            return View(tblComments);
        }
    }
}
