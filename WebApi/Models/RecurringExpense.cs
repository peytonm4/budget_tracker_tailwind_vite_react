using System;

namespace WebApi.Models
{
    public class RecurringExpense
    {
        public int Id { get; set; }
        public string Vendor { get; set; } = "";
        public int CategoryId { get; set; }
        public decimal Amount { get; set; } = 0;
        public Category? Category { get; set; }
        public string Frequency { get; set; } = "Monthly"; // Weekly, Monthly, Yearly
        public DateTime StartDate { get; set; }
        public DateTime NextDueDate { get; set; }
        public DateTime DateAdded { get; set; } = DateTime.UtcNow;
    }
}
