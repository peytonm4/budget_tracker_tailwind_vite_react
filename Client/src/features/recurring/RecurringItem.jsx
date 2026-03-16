import React from "react";
import useRecurringStore from "../../store/recurringStore";

function RecurringItem({ item, categoryName }) {
  const { removeRecurring } = useRecurringStore();

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0">
      <div className="flex gap-6 flex-1">
        <span className="w-40 text-sm text-gray-800 font-medium truncate">{item.vendor}</span>
        <span className="w-32 text-sm text-gray-500">{categoryName}</span>
        <span className="w-24 text-sm font-mono text-gray-800">${parseFloat(item.amount).toFixed(2)}</span>
        <span className="w-24 text-sm text-gray-500">{item.frequency}</span>
        <span className="w-28 text-sm text-gray-400">
          {new Date(item.nextDueDate).toLocaleDateString()}
        </span>
      </div>
      <button
        onClick={() => removeRecurring(item.id)}
        className="text-red-400 hover:text-red-600 text-sm font-medium ml-4"
      >
        Remove
      </button>
    </div>
  );
}

export default RecurringItem;
