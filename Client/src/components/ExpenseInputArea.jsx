import React, { useContext, useState } from "react";
import { useCategoryContext } from "./CreateCategoriesContext";
import useExpenseApi from "../hooks/useExpenses";


function ExpenseInputArea({ fetchExpenses }) {

	const { categories } = useCategoryContext();
	const [newExpense, setNewExpense] = useState({
		id: 0,
    vendor: "",
    categoryId: "",
    amount: 0.00,
    expenseDate: ""
	});
	const { createExpense } = useExpenseApi();


	function handleChange(event) {
		const { name, value } = event.target;

		setNewExpense((prevExpense) => {
			return {
				...prevExpense,
				[name]: value,
			};
		});
	}

	// function submitExpense(event) {
	// 	props.onAdd(expense);
	// 	setExpense({
	// 		vendor: "",
	// 		category: "",
	// 		amount: 0,
	// 		date: "",
	// 	});
	// 	event.preventDefault();
	// }

	const addNewExpense = async (event) => {
		event.preventDefault();
		const newlyCreatedExpense = await createExpense(newExpense);
		await fetchExpenses();
		setNewExpense((prevExpense) => {
			return {
				id: 0,
				vendor: "",
				categoryId: "",
				amount: 0.00,
				expenseDate: ""
			};
		});
	}

	return (
		<form id="expenseForm" onSubmit={addNewExpense} className="mx-auto">
			<div className="flex p-4 pb-8 m-auto h-auto">
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Vendor</div>
					<input
						required
						name="vendor"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={newExpense.vendor}
						placeholder="Enter Vendor"
					></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Category</div>
					<select
						required
						name="categoryId"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={newExpense.categoryId}
					>
						<option value="" className="">
							--make selection--
						</option>
						{categories.map((item) => (
							<option value={item.id}>{item.name}</option>
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
						value={newExpense.amount}
						placeholder="Enter Amount"
					></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Date</div>
					<input
						required
						name="expenseDate"
						type="date"
						className="w-40 bg-yellow-200 text-center"
						onChange={handleChange}
						value={newExpense.expenseDate}
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
