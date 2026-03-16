import React, { useState } from "react";
import useCategoryStore from "../../store/categoryStore";
import useExpenseStore from "../../store/expenseStore";

function ExpenseForm() {
  const { categories } = useCategoryStore();
  const { addExpense, loading, error } = useExpenseStore();

  const [form, setForm] = useState({
    vendor: "",
    type: "expense",
    categoryId: "",
    amount: "",
    expenseDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addExpense({ ...form, id: 0 });
    setForm({ vendor: "", type: "expense", categoryId: "", amount: "", expenseDate: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Add Transaction</h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-3 mb-2">
        <button
          type="button"
          onClick={() => setForm((prev) => ({ ...prev, type: "expense" }))}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            form.type === "expense"
              ? "bg-red-100 text-red-700 ring-1 ring-red-300"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Expense
        </button>
        <button
          type="button"
          onClick={() => setForm((prev) => ({ ...prev, type: "income" }))}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            form.type === "income"
              ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Income
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">{form.type === "income" ? "Source" : "Vendor"}</label>
          <input
            required
            name="vendor"
            value={form.vendor}
            onChange={handleChange}
            placeholder={form.type === "income" ? "e.g. Paycheck" : "e.g. Amazon"}
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
          <label className="text-sm text-gray-600">Date</label>
          <input
            required
            name="expenseDate"
            type="date"
            value={form.expenseDate}
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
          {loading ? "Adding..." : form.type === "income" ? "Add Income" : "Add Expense"}
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
