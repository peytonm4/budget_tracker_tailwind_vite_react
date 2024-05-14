import React, { useState } from "react";

function ExpenseInputArea() {
	const [expense, setExpense] = useState({
		vendor: "",
		category: "",
		amount: "",
		date: "",
	});

	return (
		<form>
			<div className="flex p-4 pb-8 m-auto w-auto h-auto">
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Vendor</div>
					<input className="w-40 bg-yellow-200 text-center" placeholder="Enter Vendor"></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Category</div>
					<input className="w-40 bg-yellow-200 text-center" placeholder="Enter Category"></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Amount</div>
					<input className="w-40 bg-yellow-200 text-center" placeholder="Enter Amount"></input>
				</div>
				<div className="flex flex-col bg-slate-200">
					<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Date</div>
					<input className="w-40 bg-yellow-200 text-center" placeholder="Enter Date"></input>
				</div>
			</div>
			<div className="flex justify-end mr-10">
				<button className=" bg-emerald-500 border-solid border-2 border-black px-2 w-14 rounded-xl mb-4">Add</button>
			</div>
		</form>
	);
}

export default ExpenseInputArea;
