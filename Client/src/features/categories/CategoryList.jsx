import React, { useEffect } from "react";
import useCategoryStore from "../../store/categoryStore";
import CategoryForm from "./CategoryForm";

function CategoryList() {
  const { categories, fetchCategories, removeCategory, loading } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
      <CategoryForm />
      <div className="bg-white rounded-xl shadow p-6">
        {loading && <p className="text-gray-400 text-sm">Loading...</p>}
        {!loading && categories.length === 0 && (
          <p className="text-gray-400 text-sm">No categories yet. Add one above.</p>
        )}
        <ul className="divide-y">
          {categories.map((cat) => (
            <li key={cat.id} className="py-3 flex justify-between items-center">
              <span className="text-gray-700 text-sm font-medium">{cat.name}</span>
              <button
                onClick={() => removeCategory(cat.id)}
                className="text-red-400 hover:text-red-600 text-xs font-medium"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
