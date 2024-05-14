import React from "react";

function ExpenseInputArea() {
	return (
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
	);
}

export default ExpenseInputArea;
