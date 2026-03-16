using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/recurring-expenses")]
    public class RecurringExpensesController : ControllerBase
    {
        private readonly RecurringExpenseService _recurringExpenseService;

        public RecurringExpensesController(RecurringExpenseService recurringExpenseService)
        {
            _recurringExpenseService = recurringExpenseService;
        }

        [HttpGet]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<List<RecurringExpense>> GetAllRecurringExpenses()
        {
            return await _recurringExpenseService.GetAllRecurringExpenses();
        }

        [HttpPost]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<RecurringExpense> CreateRecurringExpense(RecurringExpense recurringExpense)
        {
            return await _recurringExpenseService.CreateRecurringExpense(recurringExpense);
        }

        [HttpDelete("{id}")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteRecurringExpense(int id)
        {
            var deleted = await _recurringExpenseService.DeleteRecurringExpense(id);
            if (deleted == null) return NotFound();
            return Ok(deleted);
        }
    }
}
