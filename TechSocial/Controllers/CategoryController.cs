using Microsoft.AspNetCore.Mvc;

namespace TechSocial.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
