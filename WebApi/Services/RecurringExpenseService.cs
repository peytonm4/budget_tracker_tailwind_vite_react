using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Contexts;
using WebApi.Models;

namespace WebApi.Services
{
    public class RecurringExpenseService
    {
        private readonly ExpenseTrackerContext _context;

        public RecurringExpenseService(ExpenseTrackerContext context)
        {
            _context = context;
        }

        public async Task<List<RecurringExpense>> GetAllRecurringExpenses()
        {
            return await _context.RecurringExpenses.ToListAsync();
        }

        public async Task<RecurringExpense> CreateRecurringExpense(RecurringExpense recurringExpense)
        {
            recurringExpense.DateAdded = DateTime.UtcNow;
            recurringExpense.StartDate = recurringExpense.StartDate.ToUniversalTime();
            recurringExpense.NextDueDate = recurringExpense.NextDueDate.ToUniversalTime();
            _context.RecurringExpenses.Add(recurringExpense);
            await _context.SaveChangesAsync();
            return recurringExpense;
        }

        public async Task<RecurringExpense?> DeleteRecurringExpense(int id)
        {
            var recurringExpense = await _context.RecurringExpenses.FindAsync(id);
            if (recurringExpense == null) return null;
            _context.RecurringExpenses.Remove(recurringExpense);
            await _context.SaveChangesAsync();
            return recurringExpense;
        }
    }
}
