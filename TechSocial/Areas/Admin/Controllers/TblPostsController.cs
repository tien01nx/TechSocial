﻿using System;
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
using TechSocial.Repository;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class TblPostsController : Controller
    {
        private readonly IPostRepository _repository;
        private readonly IWebHostEnvironment _webHostEnvironment;


        public TblPostsController(IPostRepository repository, IWebHostEnvironment webHostEnvironment)
        {
            _repository = repository;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: Admin/TblPosts
        public async Task<IActionResult> Index()
        {
            return View(await _repository.GetAll());
        }

        // GET: Admin/TblPosts/Details/5
        public async Task<IActionResult> Details(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var tblPost = await _repository.Get(id.Value);
            if (tblPost == null)
            {
                return NotFound();

            }

            return View(tblPost);
        }

        // GET: Admin/TblPosts/Create
        public IActionResult Create()
        {
            var categories = _repository.GetCategory();
            ViewData["CategoryId"] = new SelectList(categories, "CategoryId", "CategoryName");

            var accounts = _repository.GetAccounts();
            ViewData["AccountId"] = new SelectList(accounts, "AccountId", "FullName");
            return View();
        }

        // POST: Admin/TblPosts/Create
      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(TblPost tblPost, IFormFile? file)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    await _repository.Create(tblPost, file);
                    return RedirectToAction(nameof(Index));
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }
            return View(tblPost);
        }

        // GET: Admin/TblPosts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblPost = await _repository.Get(id.Value);
            if (tblPost == null)
            {
                return NotFound();

            }

            return View(tblPost);
        }

        // POST: Admin/TblPosts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, TblPost tblPost, IFormFile? file)
        {
            if (ModelState.IsValid)
            {
                await _repository.Update(tblPost, file);
                return RedirectToAction(nameof(Index));
                //return View("Index");
            }
            return View(tblPost);
        }

        // GET: Admin/TblPosts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var tblPost = await _repository.Get(id.Value);
            if (tblPost == null)
            {
                return NotFound();

            }

            return View(tblPost);
        }

        // POST: Admin/TblPosts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var tblPost = await _repository.Delete(id);
            if (tblPost == null)
            {
                return NotFound();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool TblPostExists(int id)
        {
          return true;
        }
    }
}
