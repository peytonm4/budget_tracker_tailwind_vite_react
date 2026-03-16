import { create } from "zustand";
import { getAllRecurring, createRecurring, deleteRecurring } from "../api/recurringApi";

const useRecurringStore = create((set) => ({
  recurringExpenses: [],
  loading: false,
  error: null,

  fetchRecurring: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllRecurring();
      set({ recurringExpenses: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addRecurring: async (data) => {
    set({ loading: true, error: null });
    try {
      const created = await createRecurring(data);
      set((state) => ({ recurringExpenses: [...state.recurringExpenses, created], loading: false }));
      return created;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  removeRecurring: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteRecurring(id);
      set((state) => ({ recurringExpenses: state.recurringExpenses.filter((r) => r.id !== id), loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));

export default useRecurringStore;
