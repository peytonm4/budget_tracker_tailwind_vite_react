const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/recurring-expenses`;

export async function getAllRecurring() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch recurring expenses");
  return res.json();
}

export async function createRecurring(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create recurring expense");
  return res.json();
}

export async function deleteRecurring(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete recurring expense");
  return res.json();
}
