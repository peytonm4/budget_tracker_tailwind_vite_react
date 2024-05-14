import React from "react";

function ExpenseItem() {
	return (
		<div className="my-0 flex ml-10 w-auto p-0">
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">AMZN</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">Shopping</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">$100</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">5/14/2024</div>
			</div>
			<div className="flex justify-end mr-10">
				<button className="text-red-700 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] px-2 w-4 rounded-xl">X</button>
			</div>
		</div>
	);
}

export default ExpenseItem;
