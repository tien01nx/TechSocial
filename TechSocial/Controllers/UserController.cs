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

            dynamic myModel = new ExpandoObject();
            myModel.ListPostUser = _unitOfWork.Post.GetAll(u => u.IdentityUser.Id.Equals(Id), includeProperties: "Category,IdentityUser").ToList();
            myModel.InfoUser= _unitOfWork.Post.Get(u=>u.IdentityUser.Id.Equals(Id),includeProperties:"IdentityUser");

            return View(myModel);
           
        }

        [HttpPost]
        public IActionResult PostComment(ListPost comments)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
            comments.TblComments.AccountId = userId;
           comments.TblComments.DateCreated= DateTime.Now;

            if (ModelState.IsValid)
            {
                _unitOfWork.Comment.Add(comments.TblComments);
                _unitOfWork.Save();
                return RedirectToAction(nameof(HomeController.Details), "Home", new { id = comments.TblComments.PostId });
            }
            else
            {
                ViewBag.ErrorMessages = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage).ToList();
            }
            return View(comments);
        }
    }
}
