import React, { useState } from "react";
import useCategoryStore from "../../store/categoryStore";
import useRecurringStore from "../../store/recurringStore";

const FREQUENCIES = ["Weekly", "Monthly", "Yearly"];

function RecurringForm() {
  const { categories } = useCategoryStore();
  const { addRecurring, loading, error } = useRecurringStore();

  const [form, setForm] = useState({
    vendor: "",
    categoryId: "",
    amount: "",
    frequency: "Monthly",
    startDate: "",
    nextDueDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addRecurring({ ...form, id: 0 });
    setForm({ vendor: "", categoryId: "", amount: "", frequency: "Monthly", startDate: "", nextDueDate: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Add Recurring Expense</h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Vendor</label>
          <input
            required
            name="vendor"
            value={form.vendor}
            onChange={handleChange}
            placeholder="e.g. Netflix"
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Category</label>
          <select
            required
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <option value="">-- Select --</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Amount</label>
          <input
            required
            name="amount"
            type="number"
            step="0.01"
            min="0"
            value={form.amount}
            onChange={handleChange}
            placeholder="0.00"
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Frequency</label>
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            {FREQUENCIES.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Start Date</label>
          <input
            required
            name="startDate"
            type="date"
            value={form.startDate}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Next Due Date</label>
          <input
            required
            name="nextDueDate"
            type="date"
            value={form.nextDueDate}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Recurring"}
        </button>
      </div>
    </form>
  );
}

export default RecurringForm;
