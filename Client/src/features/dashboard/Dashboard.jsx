import React, { useEffect } from "react";
import useExpenseStore from "../../store/expenseStore";
import useCategoryStore from "../../store/categoryStore";
import useRecurringStore from "../../store/recurringStore";

function Dashboard() {
  const { expenses, fetchExpenses } = useExpenseStore();
  const { categories, fetchCategories } = useCategoryStore();
  const { recurringExpenses, fetchRecurring } = useRecurringStore();

  useEffect(() => {
    fetchExpenses();
    fetchCategories();
    fetchRecurring();
  }, []);

  const categoryTotals = categories.map((cat) => {
    const total = expenses
      .filter((e) => e.categoryId === cat.id && e.type !== "income")
      .reduce((sum, e) => sum + parseFloat(e.amount), 0);
    return { name: cat.name, total: total.toFixed(2) };
  });

  const grandTotal = expenses
    .filter((e) => e.type !== "income")
    .reduce((sum, e) => sum + parseFloat(e.amount), 0)
    .toFixed(2);

  // Monthly net cash flow
  const monthlyFlow = expenses.reduce((acc, e) => {
    const d = new Date(e.expenseDate);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!acc[key]) acc[key] = { income: 0, expenses: 0 };
    const amt = parseFloat(e.amount);
    if (e.type === "income") {
      acc[key].income += amt;
    } else {
      acc[key].expenses += amt;
    }
    return acc;
  }, {});

  const monthlyFlowEntries = Object.entries(monthlyFlow)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([month, { income, expenses: exp }]) => ({
      month,
      label: new Date(month + "-01").toLocaleDateString(undefined, { year: "numeric", month: "long" }),
      income,
      expenses: exp,
      net: income - exp,
    }));

  const upcoming = [...recurringExpenses]
    .sort((a, b) => new Date(a.nextDueDate) - new Date(b.nextDueDate))
    .slice(0, 5);

  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.expenseDate) - new Date(a.expenseDate))
    .slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

      {/* Spending Summary */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Spending by Category</h3>
        {categoryTotals.length === 0 ? (
          <p className="text-gray-400 text-sm">No data yet.</p>
        ) : (
          <div className="space-y-2">
            {categoryTotals.map(({ name, total }) => (
              <div key={name} className="flex justify-between items-center border-b pb-2 last:border-0">
                <span className="text-gray-600">{name}</span>
                <span className="font-mono font-semibold text-gray-800">${total}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 font-bold">
              <span>Total</span>
              <span className="text-emerald-600 font-mono">${grandTotal}</span>
            </div>
          </div>
        )}
      </div>

      {/* Monthly Net Cash Flow */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Net Cash Flow</h3>
        {monthlyFlowEntries.length === 0 ? (
          <p className="text-gray-400 text-sm">No data yet.</p>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-gray-400 uppercase border-b pb-2">
              <span>Month</span>
              <span className="text-right">Income</span>
              <span className="text-right">Expenses</span>
              <span className="text-right">Net</span>
            </div>
            {monthlyFlowEntries.map(({ month, label, income, expenses: exp, net }) => (
              <div key={month} className="grid grid-cols-4 gap-4 text-sm border-b pb-2 last:border-0">
                <span className="text-gray-700 font-medium">{label}</span>
                <span className="text-right font-mono text-emerald-600">+${income.toFixed(2)}</span>
                <span className="text-right font-mono text-red-500">-${exp.toFixed(2)}</span>
                <span className={`text-right font-mono font-semibold ${net >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {net >= 0 ? "+" : "-"}${Math.abs(net).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h3>
          {recentExpenses.length === 0 ? (
            <p className="text-gray-400 text-sm">No transactions yet.</p>
          ) : (
            <div className="space-y-2">
              {recentExpenses.map((e) => {
                const cat = categories.find((c) => c.id === e.categoryId);
                return (
                  <div key={e.id} className="flex justify-between text-sm border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium text-gray-700">{e.vendor}</p>
                      <p className="text-gray-400 text-xs">{cat?.name ?? "Unknown"}</p>
                    </div>
                    <span className={`font-mono ${e.type === "income" ? "text-emerald-600" : "text-red-500"}`}>
                      {e.type === "income" ? "+" : "-"}${parseFloat(e.amount).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Upcoming Recurring */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Upcoming Recurring</h3>
          {upcoming.length === 0 ? (
            <p className="text-gray-400 text-sm">No recurring expenses set up.</p>
          ) : (
            <div className="space-y-2">
              {upcoming.map((r) => {
                const cat = categories.find((c) => c.id === r.categoryId);
                return (
                  <div key={r.id} className="flex justify-between text-sm border-b pb-2 last:border-0">
                    <div>
                      <p className="font-medium text-gray-700">{r.vendor}</p>
                      <p className="text-gray-400 text-xs">
                        {cat?.name ?? "Unknown"} · {r.frequency}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-gray-800">${parseFloat(r.amount).toFixed(2)}</p>
                      <p className="text-gray-400 text-xs">
                        Due {new Date(r.nextDueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
