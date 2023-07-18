using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;
using TechSocial.Models;
using TechSocial.Models.ViewModel;
using TechSocial.Repository.IRepository;

namespace TechSocial.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<IdentityUser> _userManager;

        public HomeController(ILogger<HomeController> logger,IUnitOfWork unitOfWork, UserManager<IdentityUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _userManager = userManager;
        }

        public IActionResult Index()
        {

          
            var categories = _unitOfWork.Category.GetAll().ToList();
            var users = _userManager.Users.ToList();
            

            //var users = _repository.GetAccounts();
            ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");
            ViewData["UserName"] = new SelectList(users, "id", "UserName");
            ListPost listPost = new ListPost()
            {
                AdnroidPost = _unitOfWork.Post.GetAll(u => u.Category.CategoryName.Equals("Android")).ToList(),
                IosPost = _unitOfWork.Post.GetAll(u => u.Category.CategoryName.Equals("iOS")).ToList(),
                WindowsPost = _unitOfWork.Post.GetAll(u => u.Category.CategoryName.Equals("Windows")).ToList(),
                PostNewest = _unitOfWork.Post.GetNewest()
            };
        

            return View(listPost);
         
        }

        public IActionResult Details(int id)
        {
            ListPost listPost = new ListPost()
            {
                TblCategory = new TblCategory(),
               
                TblPost = _unitOfWork.Post.Get(u => u.PostId == id, includeProperties: "Category,IdentityUser"),
               
                PostNewest = _unitOfWork.Post.GetNewest()
            };
        
            //// includeProperties: "Category" lấy thuộc tính từ bảng khác, khóa ngoại, 
            //TblPost detail = _unitOfWork.Post.Get(u => u.PostId == id,includeProperties: "Category,IdentityUser");


            return View(listPost);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


        //[HttpGet]
        public IActionResult Search()
        {
            var all  = _unitOfWork.Post.GetAll(includeProperties:"Category,IdentityUser").Select(p => new PostDTO
            {
                Id = p.PostId,
                Title = p.Title,
                UserName = p.IdentityUser.UserName,
                CategoryName = p.Category.CategoryName
             
            });

            return Json(all);
        }
    }
}