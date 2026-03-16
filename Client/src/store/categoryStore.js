import { create } from "zustand";
import { getAllCategories, createCategory, deleteCategory } from "../api/categoriesApi";

const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllCategories();
      set({ categories: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addCategory: async (categoryData) => {
    set({ loading: true, error: null });
    try {
      const created = await createCategory(categoryData);
      set((state) => ({ categories: [...state.categories, created], loading: false }));
      return created;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  removeCategory: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteCategory(id);
      set((state) => ({ categories: state.categories.filter((c) => c.id !== id), loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));

export default useCategoryStore;
