using Microsoft.AspNetCore.Mvc;

namespace TechSocial.Areas.Admin.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
