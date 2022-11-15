using HRMSProject.Business.interfaces;
using HRMSProject.repository.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMSProject.Business
{
 
   public class EmployeeBusiness : IEmployeeBusiness
    {
        private readonly IEmployeeRepository _empRepository;

        public EmployeeBusiness(IEmployeeRepository empRepository)
        {
            _empRepository = empRepository;
        }
    }
}
 