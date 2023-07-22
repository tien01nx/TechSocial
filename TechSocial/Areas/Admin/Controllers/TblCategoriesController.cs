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
        public async Task<IActionResult> Index()
        {
            return View(_unitOfWork.Category.GetAll());
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
        [ValidateAntiForgeryToken]
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
        public IActionResult Edit([FromBody] int? id)
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
            return Ok(tblCategory);
        }

        // POST: Admin/TblCategories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, TblCategory tblCategory)
        {
            if (ModelState.IsValid)
            {
                _unitOfWork.Category.Update(tblCategory);
                _unitOfWork.Save();
                return RedirectToAction(nameof(Index));
                //return View("Index");
            }
            return View(tblCategory);
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
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var tblCategory =  _unitOfWork.Category.Get(u=>u.CategoryId==id);
            if (tblCategory == null)
            {
                return NotFound();
            }
            else
            {
                _unitOfWork.Category.Remove(tblCategory);
                _unitOfWork.Save();

            }
            return RedirectToAction(nameof(Index));
        }

        private bool TblCategoryExists(int id)
        {
          return true;
        }
    }
}
