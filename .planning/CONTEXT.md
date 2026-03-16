# Project Context

## Overview
Budget Tracker — a personal expense tracking app. Users create expense categories and log expenses against them. The app shows a summary of spending by category.

## Architecture
- **Frontend:** React 18 + Vite + Tailwind CSS (JavaScript, no TypeScript)
- **Backend:** .NET 8 ASP.NET Core Web API
- **Database:** PostgreSQL via Entity Framework Core (Npgsql)
- **API Base URL:** `https://localhost:48935` (hardcoded in frontend hooks)

## Current State (2026-03-15)
- Core CRUD for categories and expenses is functional (create + read)
- Delete expense exists on the backend but is not integrated in the frontend
- No authentication or user accounts — single-user app
- No environment variable setup for API URLs

## Data Models
- **Category:** `{ Id, Name }`
- **Expense:** `{ Id, Vendor, CategoryId, Amount, ExpenseDate, DateAdded, DateModified }`

## API Endpoints
| Method | Route | Description |
|---|---|---|
| GET | `/api/categories/get-all-categories` | Fetch all categories |
| POST | `/api/categories/create` | Create a new category |
| GET | `/api/expenses/get-all-expenses` | Fetch all expenses |
| POST | `/api/expenses/create` | Create a new expense |
| POST | `/api/expenses/delete` | Delete an expense (not wired on frontend) |

## Session Log

### 2026-03-15 — Full Frontend & Backend Rework
**Frontend:**
- Installed `react-router-dom` v6 and `zustand`
- New folder structure: `api/`, `store/`, `features/`, shared `components/`
- Replaced Context API + hooks with Zustand stores (`categoryStore`, `expenseStore`, `recurringStore`)
- Replaced `hooks/useCategories`, `hooks/useExpenses` with plain API modules in `api/`
- API base URL moved to `.env` (`VITE_API_BASE_URL`)
- Added React Router with 4 routes: `/` (Dashboard), `/expenses`, `/recurring`, `/categories`
- `Layout.jsx` wraps all pages with Header + nav + Footer
- New `Header.jsx` with `NavLink` navigation
- Dashboard shows spending by category, recent expenses, upcoming recurring
- All old components deleted: `CreateCategoriesContext`, `CreateExpenseArea`, `ExpenseInputArea`, `CreateNewCategoryArea`, `ExpenseItem` (old), `App.jsx`

**Backend:**
- Added `RecurringExpense` model (`Vendor`, `CategoryId`, `Amount`, `Frequency`, `StartDate`, `NextDueDate`, `DateAdded`)
- Added `RecurringExpenseService` and `RecurringExpensesController` (`GET /api/recurring-expenses`, `POST`, `DELETE /{id}`)
- Updated `ExpensesController` to RESTful routes (`GET /api/expenses`, `POST`, `DELETE /{id}`)
- Fixed `ExpenseService.DeleteExpense` to accept `id` (was full Expense object)
- Added `RecurringExpenses` DbSet to `ExpenseTrackerContext`
- Registered `RecurringExpenseService` in `Program.cs`
- Ran EF migration `AddRecurringExpenses` — `RecurringExpenses` table created in DB

**API Endpoints (updated):**
| Method | Route | Description |
|---|---|---|
| GET | `/api/categories` | Fetch all categories |
| POST | `/api/categories` | Create category |
| GET | `/api/expenses` | Fetch all expenses |
| POST | `/api/expenses` | Create expense |
| DELETE | `/api/expenses/{id}` | Delete expense |
| GET | `/api/recurring-expenses` | Fetch all recurring |
| POST | `/api/recurring-expenses` | Create recurring |
| DELETE | `/api/recurring-expenses/{id}` | Delete recurring |
