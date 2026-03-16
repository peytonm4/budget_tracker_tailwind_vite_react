import React, { useEffect } from "react";
import useRecurringStore from "../../store/recurringStore";
import useCategoryStore from "../../store/categoryStore";
import RecurringItem from "./RecurringItem";
import RecurringForm from "./RecurringForm";

function RecurringList() {
  const { recurringExpenses, fetchRecurring, loading } = useRecurringStore();
  const { categories, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchRecurring();
    fetchCategories();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Recurring Expenses</h2>
      <RecurringForm />
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex gap-6 pb-2 border-b mb-1">
          <span className="w-40 text-xs font-semibold text-gray-400 uppercase">Vendor</span>
          <span className="w-32 text-xs font-semibold text-gray-400 uppercase">Category</span>
          <span className="w-24 text-xs font-semibold text-gray-400 uppercase">Amount</span>
          <span className="w-24 text-xs font-semibold text-gray-400 uppercase">Frequency</span>
          <span className="w-28 text-xs font-semibold text-gray-400 uppercase">Next Due</span>
        </div>
        {loading && <p className="text-gray-400 text-sm py-4">Loading...</p>}
        {!loading && recurringExpenses.length === 0 && (
          <p className="text-gray-400 text-sm py-4">No recurring expenses yet. Add one above.</p>
        )}
        {recurringExpenses.map((item) => {
          const cat = categories.find((c) => c.id === item.categoryId);
          return (
            <RecurringItem
              key={item.id}
              item={item}
              categoryName={cat?.name ?? "Unknown"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecurringList;
