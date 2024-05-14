import React from "react";
import ExpenseInputArea from "./ExpenseInputArea";
import ExpenseItem from "./ExpenseItem";

function CreateExpenseArea() {
	// const [expense, setExpense] = useState({
	// 	vendor: "",
	// 	category: "",
	// 	amount: "",
	// 	date: "",
	// });
	return (
		<div className="flex flex-col w-1/2 h-auto bg-slate-300">
			<ExpenseInputArea />
			<div className="flex justify-end mr-10">
				<button className=" bg-emerald-500 border-solid border-2 border-black px-2 w-14 rounded-xl mb-4">Add</button>
			</div>
			<ExpenseItem />
			<ExpenseItem />
			<ExpenseItem />
		</div>
	);
}

export default CreateExpenseArea;
