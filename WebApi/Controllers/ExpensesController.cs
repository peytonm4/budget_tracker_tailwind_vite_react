using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Contexts;
using WebApi.Models;
using WebApi.Services; 

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/expenses")]
    public class ExpensesController : ControllerBase
    {
        // here goes your service reference
        private readonly ExpenseService _expenseService;

        public ExpensesController(ExpenseService expenseService) 
        {
            _expenseService = expenseService;
        }

        [HttpGet("get-all-expenses")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<List<Expense>> GetAllExpenses()
        {
            return await _expenseService.GetAllExpenses();
        }

        [HttpPost("create")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Expense> CreateExpense(Expense expense)
        {
            return await _expenseService.CreateExpense(expense);
        }

        [HttpPost("delete")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<Expense> DeleteExpense(Expense expense)
        {
            return await _expenseService.DeleteExpense(expense);
        }
    }
}