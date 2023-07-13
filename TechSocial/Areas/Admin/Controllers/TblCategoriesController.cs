using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BoxNews.Models;
using TechSocial.Models;
using NuGet.Protocol.Core.Types;
using TechSocial.Repository.IRepository;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class TblCategoriesController : Controller
    {
        private readonly ICategoryRepository  _repository;

        public TblCategoriesController(ICategoryRepository repository)
        {
            _repository = repository;
        }

        // GET: Admin/TblCategories
        public async Task<IActionResult> Index()
        {
            return View(await _repository.GetAll());
        }

        // GET: Admin/TblCategories/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblCategory = await _repository.Get(id.Value);
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
        public async Task<IActionResult> Create( TblCategory tblCategory)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    await _repository.Create(tblCategory);
                    return RedirectToAction(nameof(Index));
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }
            return View(tblCategory);
        }

        // GET: Admin/TblCategories/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {


            if (id == null)
            {
                NotFound();
            }
            var tblCategory = await (_repository.Get(id.Value));
            if (tblCategory == null)
            {
                return NotFound();
            }
            return View(tblCategory);
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
                await _repository.Update(tblCategory);
                return RedirectToAction(nameof(Index));
                //return View("Index");
            }
            return View(tblCategory);
        }

        // GET: Admin/TblCategories/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var tblCategory = await _repository.Get(id.Value);
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
            var tblCategory = await _repository.Delete(id);
            if (tblCategory == null)
            {
                return NotFound();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool TblCategoryExists(int id)
        {
          return true;
        }
    }
}
