import React, { useCallback, useState } from "react";
import ExpenseInputArea from "./ExpenseInputArea";
import ExpenseItem from "./ExpenseItem";

function CreateExpenseArea({ expenses, setExpenses }) {
	function addExpense(newexpense) {
		console.log("expense list: ", expenses);
		console.log("new expense: ", newexpense);
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newexpense];
		});
	}
	function deleteExpense(id) {
		setExpenses((prevExpenses) => {
			return prevExpenses.filter((newexpense, index) => {
				return index !== id;
			});
		});
		console.log("expense list: ", expenses);
	}
	return (
		<div className=" block h-full bg-green-400">
			<div className="flex w-auto flex-col bg-white">
				<ExpenseInputArea onAdd={addExpense} />
				{expenses.map((expenseItem, index) => {
					return (
						<ExpenseItem
							key={index}
							id={index}
							vendor={expenseItem.vendor}
							category={expenseItem.category}
							amount={expenseItem.amount}
							date={expenseItem.date}
							onDelete={deleteExpense}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CreateExpenseArea;
