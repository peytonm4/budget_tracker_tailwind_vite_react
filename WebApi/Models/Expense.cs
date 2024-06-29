using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public string Vendor { get; set;} = "";
        public Category? Category { get; set; }
        public decimal Amount { get; set;} = 0;
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
        public DateTime ExpenseDate { get; set;}
        public DateTime DateModified { get; set; }
    }
}