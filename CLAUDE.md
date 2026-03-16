# Budget Tracker — Claude Code Instructions

## Project Structure

- `Client/` — React 18 + Vite + Tailwind CSS frontend (JavaScript, no TypeScript)
- `WebApi/` — .NET 8 ASP.NET Core backend with Entity Framework Core + PostgreSQL

## Running the Project

**Frontend:**
```bash
cd Client && npm run dev
```

**Backend:**
```bash
cd WebApi && dotnet run
```
Backend runs on `https://localhost:48935` (hardcoded in frontend hooks).

## Stack Conventions

- **Frontend:** React functional components, JSX, Tailwind utility classes, no TypeScript
- **State:** Context API for shared state (`CategoriesContext`), `useState` for local form state
- **API calls:** Native `fetch()` in custom hooks under `Client/src/hooks/`
- **Backend:** Services handle DB logic, Controllers handle HTTP routing
- **No authentication** — all endpoints are currently public

## Key Files

| File | Purpose |
|---|---|
| `Client/src/main.jsx` | Entry point, wraps app in `CategoriesProvider` |
| `Client/src/pages/App.jsx` | Main layout and expense summary |
| `Client/src/components/CreateCategoriesContext.jsx` | Global category state via Context API |
| `Client/src/hooks/useCategories.jsx` | API calls for categories |
| `Client/src/hooks/useExpenses.jsx` | API calls for expenses |
| `WebApi/Program.cs` | DI setup, middleware, CORS |
| `WebApi/Controllers/CategoryController.cs` | Category API endpoints |
| `WebApi/Controllers/ExpensesController.cs` | Expense API endpoints |
| `WebApi/Services/CategoryService.cs` | Category DB logic |
| `WebApi/Services/ExpenseService.cs` | Expense DB logic |
| `WebApi/appsettings.json` | DB connection string (PostgreSQL, localhost) |

## Known Issues / TODO

1. **Delete expense not wired up** — backend endpoint exists, frontend hook is commented out
2. **API URLs hardcoded** — `https://localhost:48935` in hooks, no env variable setup
3. **No error UI** — error states captured in hooks but not rendered
4. **No auth** — all endpoints are public

## Development Notes

- Always read a file before editing it
- No auto-commit — confirm before any git operations
- Prefer editing existing files over creating new ones
- Keep frontend changes in `Client/src/`, backend changes in `WebApi/`
- Update `.planning/CONTEXT.md` after significant changes
