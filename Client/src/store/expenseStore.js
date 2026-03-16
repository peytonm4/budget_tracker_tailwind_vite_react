import { create } from "zustand";
import { getAllExpenses, createExpense, deleteExpense } from "../api/expensesApi";

const useExpenseStore = create((set) => ({
  expenses: [],
  loading: false,
  error: null,

  fetchExpenses: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getAllExpenses();
      set({ expenses: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addExpense: async (expenseData) => {
    set({ loading: true, error: null });
    try {
      const created = await createExpense(expenseData);
      set((state) => ({ expenses: [...state.expenses, created], loading: false }));
      return created;
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  removeExpense: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteExpense(id);
      set((state) => ({ expenses: state.expenses.filter((e) => e.id !== id), loading: false }));
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));

export default useExpenseStore;
