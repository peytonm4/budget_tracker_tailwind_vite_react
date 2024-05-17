import React from "react";

function ExpenseItem(props) {
	function handleClick(event) {
		props.onDelete(props.id);
	}

	return (
		<div className="ml-14 my-0 flex mx-auto w-auto p-0">
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">{props.vendor}</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">{props.category}</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">${props.amount}</div>
			</div>
			<div className="flex flex-col bg-slate-200">
				<div className="w-40 bg-white p-2 border-stone-900 border-2 text-center">{props.date}</div>
			</div>
			<div className="flex justify-end mr-10">
				<button
					className="text-red-700 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] px-2 w-4 rounded-xl"
					onClick={handleClick}
				>
					X
				</button>
			</div>
		</div>
	);
}

export default ExpenseItem;
