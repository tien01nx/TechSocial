using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TechSocial.Models;
using NuGet.Protocol.Core.Types;
using TechSocial.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using PagedList;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles ="Admin")]
    public class TblCategoriesController : Controller
    {
        private readonly IUnitOfWork  _unitOfWork;

        public TblCategoriesController(IUnitOfWork unitOfWork)
        {
           _unitOfWork = unitOfWork;
        }

        // GET: Admin/TblCategories
        //public async Task<IActionResult> Index()
        //{
        //    return View(_unitOfWork.Category.GetAll());
        //}


        // thêm bằng server silde

        [HttpPost]

        public IActionResult CreateCategory( TblCategory tblCategory)
        {
            if (ModelState.IsValid)
            {

                    _unitOfWork.Category.Add(tblCategory);
                    _unitOfWork.Save();
                TempData["success"] = "Thêm sản phẩm thành công";
                return RedirectToAction(nameof(Index));
             

            }
            return View("Edit",tblCategory);
        }

		public IActionResult EditSV(int? id)
		{


			if (id == null)
			{
				return NotFound();
			}
			var tblCategory = _unitOfWork.Category.Get(u => u.CategoryId == id);
			if (tblCategory == null)
			{
				return NotFound();
			}
			return View("Edit", tblCategory);
		}

        [HttpPost]
        public IActionResult SaveSV(TblCategory tblCategory)
            
        {
            if (ModelState.IsValid)
            {
                _unitOfWork.Category.Update(tblCategory);
                _unitOfWork.Save();
                TempData["success"] = "Cập nhật thành công";
                return RedirectToAction(nameof(Index));

            }
            return View("Edit", tblCategory);
        }



        public ActionResult Index(int page, int size)
        {
            int pageSize = size > 0 ? size : 10;
            int pageNumber = page > 0 ? page : 1;

            var recruitments = _unitOfWork.Category.GetAll().ToList();
            var pagedList = new PagedList<TblCategory>(recruitments, pageNumber, pageSize);
            return View(pagedList);
        }




        // GET: Admin/TblCategories/Details/5
        public  IActionResult Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblCategory =  _unitOfWork.Category.Get(u=>u.CategoryId == id);
            if (tblCategory == null)
            {
                return NotFound();

            }
            return View(tblCategory);
        }



        // GET: Admin/TblCategories/Create
        public IActionResult Create()
        {

            return View();
        }

        // POST: Admin/TblCategories/Create
       
        [HttpPost]
       
        public async Task<IActionResult> Create( [FromBody] TblCategory tblCategory)
        {
            if (ModelState.IsValid)
            {

                try
                {
                   _unitOfWork.Category.Add(tblCategory);
                    _unitOfWork.Save();
                    return Ok(tblCategory);
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }
            return BadRequest(tblCategory);
        }

        // GET: Admin/TblCategories/Edit/5



        public IActionResult Edit( int? id)
        {


            if (id == null)
            {
                BadRequest();
            }
            var tblCategory =  _unitOfWork.Category.Get(u=>u.CategoryId == id);
            if (tblCategory == null)
            {
                return BadRequest();
            }
            return Json(tblCategory);
        }

       
        [HttpPost]
       
        public  IActionResult Edit([FromBody] TblCategory tblCategory)
        {
            if (ModelState.IsValid)
            {
                _unitOfWork.Category.Update(tblCategory);
                _unitOfWork.Save();
                return Ok(tblCategory);
                //return View("Index");
            }
            return BadRequest(tblCategory);
        }

        // GET: Admin/TblCategories/Delete/5
        public IActionResult Delete(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var tblCategory = _unitOfWork.Category.Get(u => u.CategoryId == id);
            if (tblCategory == null)
            {
                return NotFound();

            }
            return View(tblCategory);
        }

        // POST: Admin/TblCategories/Delete/5
        [HttpPost, ActionName("Delete")]
 
        public  IActionResult DeleteConfirmed(int id)
        {
            var tblCategory =  _unitOfWork.Category.Get(u=>u.CategoryId==id);
            if (tblCategory == null)
            {
                return BadRequest();
            }
            else
            {
                _unitOfWork.Category.Remove(tblCategory);
                _unitOfWork.Save();
                return Ok(tblCategory);

            }
           
        }

        private bool TblCategoryExists(int id)
        {
          return true;
        }


        //tìm kiếm 
        [HttpGet]
        public IActionResult Search(string name)
        {
            var results = _unitOfWork.Category.GetAll(u => u.CategoryName.Contains(name));
            try
            {
                return Ok(results);
            }
            catch
            {
                return NotFound();
            }
        }




    }
}
