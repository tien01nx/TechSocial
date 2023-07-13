using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BoxNews.Models;
using TechSocial.Models;
using TechSocial.Repository.IRepository;

namespace TechSocial.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class TblAccountsController : Controller
    {
        private readonly IAccountRepository _repository;

        public TblAccountsController(IAccountRepository repository)
        {
            _repository = repository;
        }

        // GET: Admin/TblAccounts
        public async Task<IActionResult> Index()
        {
            var role = _repository.GetRole();

            ViewData["RoleId"] = new SelectList(role, "RoleId", "RoleName");
            return View(await _repository.GetAll());
        }

        // GET: Admin/TblAccounts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var TblAccount = await _repository.Get(id.Value);
            if (TblAccount == null)
            {
                return NotFound();

            }

            return View(TblAccount);
        }

        // GET: Admin/TblAccounts/Create
        public IActionResult Create()
        {
            var role = _repository.GetRole();
       

            ViewData["RoleId"] = new SelectList(role, "RoleId","RoleName");
            return View();
        }

        // POST: Admin/TblAccounts/Create
        
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(TblAccount tblAccount)
        {
            if (ModelState.IsValid)
            {

                try
                {
                    await _repository.Create(tblAccount);
                    return RedirectToAction(nameof(Index));
                }
                catch (Exception ex)
                {
                    ModelState.AddModelError(string.Empty, ex.Message);
                }
            }
            return View(tblAccount);
        }

        // GET: Admin/TblAccounts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                NotFound();
            }
            var tblAccount = await (_repository.Get(id.Value));
            if (tblAccount == null)
            {
                return NotFound();
            }
            var role = _repository.GetRole();

            ViewData["RoleId"] = new SelectList(role, "RoleId", "RoleName");
            return View(tblAccount);
        }

        // POST: Admin/TblAccounts/Edit/5
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("AccountId,UserName,UserPassword,Email,FullName,RoleId,LastLogin")] TblAccount tblAccount)
        {
            if (ModelState.IsValid)
            {
                await _repository.Update(tblAccount);
                return RedirectToAction(nameof(Index));
                //return View("Index");
            }

            //var role = _repository.GetRole();

            //ViewData["RoleId"] = new SelectList(role, "RoleId", "RoleName");
            return View(tblAccount);
        }

        // GET: Admin/TblAccounts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {

            if (id == null)
            {
                return NotFound();
            }
            var tblAccount = await _repository.Get(id.Value);
            if (tblAccount == null)
            {
                return NotFound();

            }
            //var role = _repository.GetRole();

            //ViewData["RoleId"] = new SelectList(role, "RoleId", "RoleName");
            return View(tblAccount);
        }

        // POST: Admin/TblAccounts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var tblAccount = await _repository.Delete(id);
            if (tblAccount == null)
            {
                return NotFound();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool TblAccountExists(int id)
        {
          return true;
        }
    }
}
