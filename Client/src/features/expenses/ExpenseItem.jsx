import React from "react";
import useExpenseStore from "../../store/expenseStore";

function ExpenseItem({ expense, categoryName }) {
  const { removeExpense } = useExpenseStore();

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex gap-6 flex-1">
        <span className="w-40 text-sm text-gray-800 font-medium truncate">{expense.vendor}</span>
        <span className="w-32 text-sm text-gray-500">{categoryName}</span>
        <span className={`w-24 text-sm font-mono ${expense.type === "income" ? "text-emerald-600" : "text-red-500"}`}>
          {expense.type === "income" ? "+" : "-"}${parseFloat(expense.amount).toFixed(2)}
        </span>
        <span className="w-28 text-sm text-gray-400">
          {new Date(expense.expenseDate).toLocaleDateString()}
        </span>
      </div>
      <button
        onClick={() => removeExpense(expense.id)}
        className="text-red-400 hover:text-red-600 text-sm font-medium ml-4"
      >
        Remove
      </button>
    </div>
  );
}

export default ExpenseItem;
