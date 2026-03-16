const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/categories`;

export async function getAllCategories() {
  const res = await fetch(`${BASE_URL}/get-all-categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function createCategory(categoryData) {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoryData),
  });
  if (!res.ok) throw new Error("Failed to create category");
  return res.json();
}

export async function deleteCategory(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete category");
  return res.json();
}
