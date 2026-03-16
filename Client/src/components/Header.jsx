import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    `px-3 py-1 rounded-md text-sm font-medium transition-colors ${
      isActive ? "bg-emerald-700 text-white" : "text-emerald-100 hover:bg-emerald-600"
    }`;

  return (
    <header className="bg-emerald-500 px-6 py-4 flex items-center justify-between">
      <h1 className="text-white font-mono text-xl font-bold">Budget Tracker</h1>
      <nav className="flex gap-2">
        <NavLink to="/" end className={linkClass}>Dashboard</NavLink>
        <NavLink to="/expenses" className={linkClass}>Expenses</NavLink>
        <NavLink to="/recurring" className={linkClass}>Recurring</NavLink>
        <NavLink to="/categories" className={linkClass}>Categories</NavLink>
      </nav>
    </header>
  );
}

export default Header;
