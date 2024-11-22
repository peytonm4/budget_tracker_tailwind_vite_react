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
    [Route("api/categories")]
    public class CategoryController : ControllerBase
    {

        // here goes your service reference
        private readonly CategoryService _categoryService;

        public CategoryController(CategoryService categoryService) 
        {
            _categoryService = categoryService;
        }

        [HttpGet("get-all-categories")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<List<Category>>> GetAllCategories()
        {
            List<Category> categories = await _categoryService.GetAllCategories();

            return Ok(categories);
        }

        [HttpPost("create")]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Category>> CreateCategory([FromBody] Category category)
        {
            Category createdCategory =  await _categoryService.CreateCategory(category);
            return Ok(createdCategory);
        }
    }
}