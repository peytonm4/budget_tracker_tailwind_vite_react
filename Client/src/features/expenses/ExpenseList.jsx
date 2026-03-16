import React, { useEffect } from "react";
import useExpenseStore from "../../store/expenseStore";
import useCategoryStore from "../../store/categoryStore";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";

function ExpenseList() {
  const { expenses, fetchExpenses, loading } = useExpenseStore();
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchExpenses();
    fetchCategories();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Transactions</h2>
      <ExpenseForm />
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex gap-6 pb-2 border-b mb-1">
          <span className="w-40 text-xs font-semibold text-gray-400 uppercase">Vendor</span>
          <span className="w-32 text-xs font-semibold text-gray-400 uppercase">Category</span>
          <span className="w-24 text-xs font-semibold text-gray-400 uppercase">Amount</span>
          <span className="w-28 text-xs font-semibold text-gray-400 uppercase">Date</span>
        </div>
        {loading && <p className="text-gray-400 text-sm py-4">Loading...</p>}
        {!loading && expenses.length === 0 && (
          <p className="text-gray-400 text-sm py-4">No transactions yet. Add one above.</p>
        )}
        {expenses.map((expense) => {
          const cat = categories.find((c) => c.id === expense.categoryId);
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              categoryName={cat?.name ?? "Unknown"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExpenseList;
