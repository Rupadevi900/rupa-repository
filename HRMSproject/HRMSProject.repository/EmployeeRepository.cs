using HRMSProject.repository.interfaces;
using HRMSProject.repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRMSProject.repository
{
   public class EmployeeRepository : IEmployeeRepository
    {
        private readonly rardbContext myContext;

        public EmployeeRepository(rardbContext context)
        {
            myContext = context;
        }
    }
}
