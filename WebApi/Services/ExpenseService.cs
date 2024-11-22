using System;
using System.Collections.Generic;
using System.Linq;
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
            expense.ExpenseDate.ToUniversalTime();
            expense.DateAdded.ToUniversalTime();
            expense.DateModified.ToUniversalTime();
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return expense;
        }

        public async Task<Expense> DeleteExpense(Expense expense)
        {
            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();
            return expense;
        }
    }
}