﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.CodeAnalysis;
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

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork, UserManager<IdentityUser> userManager)
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
                AdnroidPost = _unitOfWork.Post.GetPostsWithCommentsCount("Android"),
                IosPost = _unitOfWork.Post.GetPostsWithCommentsCount("iOS"),
                WindowsPost = _unitOfWork.Post.GetPostsWithCommentsCount("Windows"),
                MacOs = _unitOfWork.Post.GetPostsWithCommentsCount("macOS"),
                PostNewest = _unitOfWork.Post.GetNewest()
            };


            return View(listPost);

        }

        public IActionResult Details(int id)
        {

            ViewBag.TblPost = _unitOfWork.Post.Get(u => u.PostId == id, includeProperties: "Category,IdentityUser");
            ViewBag.PostNewest = _unitOfWork.Post.GetNewest();
            ViewBag.Comments = _unitOfWork.Comment.GetAll(u => u.PostId == id, includeProperties: "TblPost,IdentityUser").ToList();


            ViewBag.SoBL = _unitOfWork.Comment.GetAll(u => u.PostId == id).Count();


            TblComments tblComments= new TblComments();

            // thêm dữ liệu vào sesion để hiện ra danh sách bài viết đã xem
            var cookieOptions = new CookieOptions
            {
                Expires = DateTime.Now.AddDays(30)  // cookie will expire in 30 days
            };
            // Create a new cookie for the product view
            Response.Cookies.Append($"BaiViet_{id}", DateTime.Now.ToString(), cookieOptions);
            return View(tblComments);
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

        // [HttpPost]

        //public IActionResult CreateComment(TblComments tblComments)
        //{
        //    tblComments.
        //    return tblComments;
        //}


        [HttpGet]
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