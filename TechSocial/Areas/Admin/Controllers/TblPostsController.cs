using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Core.Types;
using TechSocial.Repository.IRepository;
using TechSocial.Repository;
using System.Security.Claims;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using TechSocial.Models;
using Microsoft.AspNetCore.Authorization;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize]
    public class TblPostsController : Controller
    {
     
       
        private readonly IUnitOfWork _unitOfWork;

        private readonly SignInManager<IdentityUser> _signInManager;

        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly UserManager<IdentityUser> _userManager;

        public TblPostsController( IWebHostEnvironment webHostEnvironment, IUnitOfWork unitOfWork,UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
         
            _signInManager = signInManager;
            _webHostEnvironment = webHostEnvironment;
            _unitOfWork = unitOfWork;
            _userManager = userManager;
        }

        // GET: Admin/TblPosts
        public  IActionResult Index()
        {
            //var claimsIdentity = (ClaimsIdentity)User.Identity;
            //var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
            var categories = _unitOfWork.Category.GetAll().ToList();
            var users = _userManager.Users.ToList();

            //var users = _repository.GetAccounts();
            ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");
            ViewData["UserName"] = new SelectList(users, "id", "UserName");
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;
            IEnumerable<TblPost> obj;
            if (User.IsInRole("Admin"))
            {
                obj = _unitOfWork.Post.GetAll().ToList();
            }
            else
            {
                obj = _unitOfWork.Post.GetAll(u => u.AccountId.Equals(userId)).ToList();

            }
            return View(obj);
        }

        // GET: Admin/TblPosts/Details/5
        public IActionResult Details(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var tblPost =  _unitOfWork.Post.Get(u=>u.PostId== id);
            if (tblPost == null)
            {
                return NotFound();

            }

            return View(tblPost);
        }

        // GET: Admin/TblPosts/Create
        public IActionResult Create()
        {


            var categories = _unitOfWork.Category.GetAll();
            ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");

           
            return View();
        }

        // POST: Admin/TblPosts/Create
      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(TblPost tblPost, IFormFile? file)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    string wwwRootPath = _webHostEnvironment.WebRootPath;
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
                        tblPost.CreatedAt = DateTime.Now;
                    }

                    _unitOfWork.Post.Add(tblPost);
                    _unitOfWork.Save();
                   
                    return RedirectToAction("Index");
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }
            return View(tblPost);
        }

        // GET: Admin/TblPosts/Edit/5
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblPost = _unitOfWork.Post.Get(u=>u.PostId == id);
            if (tblPost == null)
            {
                return NotFound();

            }
            var categories = _unitOfWork.Category.GetAll();
            ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");

           

            return View(tblPost);
        }

        // POST: Admin/TblPosts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, TblPost tblPost, IFormFile? file)
        {
            if (ModelState.IsValid)
            {
                string wwwRootPath = _webHostEnvironment.WebRootPath;
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

                tblPost.CreatedAt = DateTime.Now;

                var claimsIdentity = (ClaimsIdentity)User.Identity;
                var userId = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier).Value;

                tblPost.AccountId = userId;
                _unitOfWork.Post.Update(tblPost);
                _unitOfWork.Save();
                return RedirectToAction("Index");

            }
           
                return View(tblPost);

           
        }

        // GET: Admin/TblPosts/Delete/5
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblPost =  _unitOfWork.Post.Get(u=>u.PostId == id);
            if (tblPost == null)
            {
                return NotFound();

            }
            var categories = _unitOfWork.Category.Get(u => u.CategoryId == tblPost.CategoryId);
            ViewData["CategoryName"] = categories.CategoryName;
            //ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");


            return View(tblPost);
        }

        // POST: Admin/TblPosts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var tblPost = _unitOfWork.Post.Get(u=>u.PostId==id);
            if (tblPost != null)
            {
                if (tblPost.ImgSrc != null)
                {
                    var oldImageUrl = Path.Combine(_webHostEnvironment.WebRootPath, tblPost.ImgSrc.TrimStart('\\'));

                    if (!string.IsNullOrEmpty(oldImageUrl) && System.IO.File.Exists(oldImageUrl))
                    {
                        System.IO.File.Delete(oldImageUrl);
                    }


                }
                _unitOfWork.Post.Remove(tblPost);
                _unitOfWork.Save();
                return RedirectToAction("Index");


            }
            return View(tblPost);
            
        }

        private bool TblPostExists(int id)
        {
          return true;
        }

        // https://localhost:7139/admin/company/getall 
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userManager.Users.ToList();
        


            return Json(new
            {
                data = users
            });

        }

    }
}
