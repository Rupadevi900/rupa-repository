using HRMSProject.Business.interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HRMSProjectMVC.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IEmployeeBusiness _empBusiness;
      public EmployeeController(IEmployeeBusiness empBusiness)
        {
            _empBusiness = empBusiness;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
