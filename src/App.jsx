import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateExpenseArea from "./CreateExpenseArea.jsx";
import categories from "./categories.js";

function App() {
	const [expenses, setExpenses] = useState([]);

	// function ExpenseSummary() {
	// 	const categoryTotals = expenses.reduce((totals, expense) => {
	// 		if (!totals[expense.category]) {
	// 			totals[expense.category] = 0.0;
	// 		}
	// 		// categories.map((e) => {
	// 		// 	if (totals[e.category]) {
	// 		// 		return totals[e.category];
	// 		// 	} else {
	// 		// 		return
	// 		// 	}

	// 		// });
	// 		totals[expense.category] = (parseFloat(totals[expense.category]) + parseFloat(expense.amount)).toFixed(2);

	// 		return totals;
	// 	}, {});

	// 	return (
	// 		<div>
	// 			{Object.entries(categoryTotals).map(([category, total]) => (
	// 				<div key={category} className="flex row ">
	// 					<div className="w-36 border-stone-900 border-2 px-4">{category}</div>
	// 					<div className="w-20 border-stone-900 border-2 bg-yellow-200 text-right pr-2">{total}</div>
	// 				</div>
	// 			))}
	// 		</div>
	// 	);
	// }

	function ExpenseSummary() {
		// Initialize totals with all categories set to zero
		const initialTotals = categories.reduce((totals, category) => {
			totals[category.category] = 0.0;
			return totals;
		}, {});

		const categoryTotals = expenses.reduce((totals, expense) => {
			totals[expense.category] = (parseFloat(totals[expense.category]) + parseFloat(expense.amount)).toFixed(2);
			return totals;
		}, initialTotals);

		return (
			<div>
				{Object.entries(categoryTotals).map(([category, total]) => (
					<div key={category} className="flex row ">
						<div className="w-36 border-stone-900 border-2 px-4">{category}</div>
						<div className="w-20 border-stone-900 border-2 bg-yellow-200 text-right pr-2">{total}</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="" onLoad={ExpenseSummary}>
			<Header />
			<div className="flex flex-row">
				<div className="w-1/3 flex flex-col p-4">{ExpenseSummary()}</div>
				<CreateExpenseArea expenses={expenses} setExpenses={setExpenses} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
