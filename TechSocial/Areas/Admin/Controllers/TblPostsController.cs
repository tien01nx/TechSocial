using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BoxNews.Models;
using TechSocial.Models;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class TblPostsController : Controller
    {
        private readonly TechSocialDbConText _context;

        public TblPostsController(TechSocialDbConText context)
        {
            _context = context;
        }

        // GET: Admin/TblPosts
        public async Task<IActionResult> Index()
        {
            var techSocialDbConText = _context.tblPosts.Include(t => t.Account).Include(t => t.Category);
            return View(await techSocialDbConText.ToListAsync());
        }

        // GET: Admin/TblPosts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.tblPosts == null)
            {
                return NotFound();
            }

            var tblPost = await _context.tblPosts
                .Include(t => t.Account)
                .Include(t => t.Category)
                .FirstOrDefaultAsync(m => m.PostId == id);
            if (tblPost == null)
            {
                return NotFound();
            }

            return View(tblPost);
        }

        // GET: Admin/TblPosts/Create
        public IActionResult Create()
        {
            ViewData["AccountId"] = new SelectList(_context.tblAccounts, "AccountId", "AccountId");
            ViewData["CategoryId"] = new SelectList(_context.tblCategory, "CategoryId", "CategoryId");
            return View();
        }

        // POST: Admin/TblPosts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("PostId,Title,CreatedAt,Author,CategoryId,AccountId,Content,ImgSrc,PostsView,Comments")] TblPost tblPost)
        {
            if (ModelState.IsValid)
            {
                _context.Add(tblPost);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["AccountId"] = new SelectList(_context.tblAccounts, "AccountId", "AccountId", tblPost.AccountId);
            ViewData["CategoryId"] = new SelectList(_context.tblCategory, "CategoryId", "CategoryId", tblPost.CategoryId);
            return View(tblPost);
        }

        // GET: Admin/TblPosts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.tblPosts == null)
            {
                return NotFound();
            }

            var tblPost = await _context.tblPosts.FindAsync(id);
            if (tblPost == null)
            {
                return NotFound();
            }
            ViewData["AccountId"] = new SelectList(_context.tblAccounts, "AccountId", "AccountId", tblPost.AccountId);
            ViewData["CategoryId"] = new SelectList(_context.tblCategory, "CategoryId", "CategoryId", tblPost.CategoryId);
            return View(tblPost);
        }

        // POST: Admin/TblPosts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("PostId,Title,CreatedAt,Author,CategoryId,AccountId,Content,ImgSrc,PostsView,Comments")] TblPost tblPost)
        {
            if (id != tblPost.PostId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(tblPost);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TblPostExists(tblPost.PostId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["AccountId"] = new SelectList(_context.tblAccounts, "AccountId", "AccountId", tblPost.AccountId);
            ViewData["CategoryId"] = new SelectList(_context.tblCategory, "CategoryId", "CategoryId", tblPost.CategoryId);
            return View(tblPost);
        }

        // GET: Admin/TblPosts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.tblPosts == null)
            {
                return NotFound();
            }

            var tblPost = await _context.tblPosts
                .Include(t => t.Account)
                .Include(t => t.Category)
                .FirstOrDefaultAsync(m => m.PostId == id);
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
            if (_context.tblPosts == null)
            {
                return Problem("Entity set 'TechSocialDbConText.tblPosts'  is null.");
            }
            var tblPost = await _context.tblPosts.FindAsync(id);
            if (tblPost != null)
            {
                _context.tblPosts.Remove(tblPost);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TblPostExists(int id)
        {
          return (_context.tblPosts?.Any(e => e.PostId == id)).GetValueOrDefault();
        }
    }
}
