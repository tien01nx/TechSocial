using Microsoft.AspNetCore.Mvc;
using TechSocial.Repository;
using TechSocial.Repository.IRepository;

namespace TechSocial.Controllers
{
    public class CommentController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        public CommentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
