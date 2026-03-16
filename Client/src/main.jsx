import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Dashboard from "./features/dashboard/Dashboard";
import ExpenseList from "./features/expenses/ExpenseList";
import RecurringList from "./features/recurring/RecurringList";
import CategoryList from "./features/categories/CategoryList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="expenses" element={<ExpenseList />} />
          <Route path="recurring" element={<RecurringList />} />
          <Route path="categories" element={<CategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
