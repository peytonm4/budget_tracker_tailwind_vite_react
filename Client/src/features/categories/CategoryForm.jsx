import React, { useState } from "react";
import useCategoryStore from "../../store/categoryStore";

function CategoryForm() {
  const { addCategory, loading, error } = useCategoryStore();
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addCategory({ id: 0, name });
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Add Category</h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex gap-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category name"
          className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
