import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CreateExpenseArea from "../components/CreateExpenseArea.jsx";
import categories from "../categories.js";
import CreateNewCatergoryArea from "../components/CreateNewCategoryArea.jsx";
import useCategoryApi from "../hooks/useCategories.jsx";
import { useCategoryContext } from "../components/CreateCategoriesContext.jsx";
import useExpenseApi from "../hooks/useExpenses.jsx";

function App() {
	const [expenses, setExpenses] = useState([]);

	const { categories } = useCategoryContext();

	const { getAllExpenses } = useExpenseApi();

	const fetchExpenses = useCallback(async () => {
        let allExpenses = await getAllExpenses();
        console.log("Expenses", allExpenses);
        setExpenses(allExpenses);
    }, []);
	
	useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses])


	function ExpenseSummary() {
		// Initialize totals with all categories set to zero
		const initialTotals = categories.reduce((totals, category) => {
			totals[category.name] = 0.0;
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
				<CreateNewCatergoryArea />
			</div>
			<Footer />
		</div>
	);
}

export default App;
