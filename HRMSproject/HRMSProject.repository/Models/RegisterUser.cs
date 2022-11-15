using System;
using System.Collections.Generic;

#nullable disable

namespace HRMSProject.repository.Models
{
    public partial class RegisterUser
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}
