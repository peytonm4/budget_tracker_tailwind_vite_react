import React from "react";
import ExpenseInputArea from "./ExpenseInputArea";
import ExpenseItem from "./ExpenseItem";

function CreateExpenseArea() {
	return (
		<div className="flex flex-col w-1/2 h-auto bg-slate-300">
			<ExpenseInputArea />
			<ExpenseItem />
			<ExpenseItem />
			<ExpenseItem />
		</div>
	);
}

export default CreateExpenseArea;
