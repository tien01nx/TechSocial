using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Areas.Admin.Controllers
{
	[Area("Admin")]
	public class AccountController : Controller
	{
		private readonly IUnitOfWork _unitOfWork;

		private readonly SignInManager<IdentityUser> _signInManager;
		private readonly IWebHostEnvironment _webHostEnvironment;
		private readonly UserManager<IdentityUser> _userManager ;

		public AccountController(IWebHostEnvironment webHostEnvironment, IUnitOfWork unitOfWork, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
		{

			_signInManager = signInManager;
			_webHostEnvironment = webHostEnvironment;
			_unitOfWork = unitOfWork;
			_userManager = userManager;
		}
		public IActionResult Index()
		{

			var users = _userManager.Users.ToList();
			return Json(users);
		}
	}
}
