using System;
using System.Collections.Generic;

#nullable disable

namespace HRMSProject.repository.Models
{
    public partial class Empexp
    {
        public long? Employeeid { get; set; }
        public string Entity { get; set; }
        public string Expensecode { get; set; }
        public string Expensedate { get; set; }
        public long? Clientcode { get; set; }
        public long? Amount { get; set; }
        public long? Approvedby { get; set; }
        public string Approvaldate { get; set; }
        public string Modeofpayment { get; set; }
        public string Paymentdate { get; set; }
        public string Creationdate { get; set; }
        public long? Createdby { get; set; }
        public long? Updatedby { get; set; }
        public int Id { get; set; }
    }
}
