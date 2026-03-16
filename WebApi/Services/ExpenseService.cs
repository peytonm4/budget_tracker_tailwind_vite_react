using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Contexts;
using WebApi.Models;

namespace WebApi.Services
{
    public class ExpenseService
    {
        private readonly ExpenseTrackerContext _context;

        public ExpenseService(ExpenseTrackerContext context)
        {
            _context = context;
        }

        public async Task<List<Expense>> GetAllExpenses()
        {
            return await _context.Expenses.ToListAsync();
        }

        public async Task<Expense> CreateExpense(Expense expense)
        {
            expense.DateAdded = DateTime.UtcNow;
            expense.ExpenseDate = expense.ExpenseDate.ToUniversalTime();
            expense.DateModified = DateTime.UtcNow;
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return expense;
        }

        public async Task<Expense?> DeleteExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null) return null;
            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();
            return expense;
        }
    }
}
