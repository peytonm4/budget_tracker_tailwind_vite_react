import React, { useContext, useState } from "react";
import categories from "./categories.js";
import CategoriesContext from "./CreateCategoriesContext.jsx";

function ExpenseInputArea(props) {
	const [expense, setExpense] = useState({
		vendor: "",
		category: "",
		amount: 0,
		date: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setExpense((prevExpense) => {
			return {
				...prevExpense,
				[name]: value,
			};
		});
	}

	function submitExpense(event) {
		props.onAdd(expense);
		setExpense({
			vendor: "",
			category: "",
			amount: 0,
			date: "",
		});
		event.preventDefault();
	}

	return (
		<form id="expenseForm" onSubmit={submitExpense} className="mx-auto">
			<div className="flex p-4 pb-8 m-auto h-auto">
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Vendor</div>
					<input
						required
						name="vendor"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={expense.vendor}
						placeholder="Enter Vendor"
					></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Category</div>
					<select
						required
						name="category"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={expense.category}
					>
						<option value="" className="">
							--make selection--
						</option>
						{useContext(CategoriesContext).map((item) => (
							<option value={item.category}>{item.category}</option>
						))}
					</select>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Amount</div>
					<input
						required
						name="amount"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={expense.amount}
						placeholder="Enter Amount"
					></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Date</div>
					<input
						required
						name="date"
						type="date"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={expense.date}
						placeholder="Enter Date"
					></input>
				</div>
			</div>
			<div className="flex justify-end">
				<button type="submit" className=" bg-emerald-500 border-solid border-2 border-black px-2 w-14 rounded-xl mb-4">
					Add
				</button>
			</div>
		</form>
	);
}

export default ExpenseInputArea;
