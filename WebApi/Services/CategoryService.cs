using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Contexts;
using WebApi.Models;

namespace WebApi.Services
{
    public class CategoryService
    {
        private readonly ExpenseTrackerContext _context;
        public CategoryService(ExpenseTrackerContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetAllCategories() 
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Category?> DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null) return null;
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return category;
        }
    }
}