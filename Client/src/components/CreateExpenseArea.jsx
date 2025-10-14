import React, { useCallback, useEffect, useState } from "react";
import ExpenseInputArea from "./ExpenseInputArea";
import ExpenseItem from "./ExpenseItem"
import useExpenseApi from "../hooks/useExpenses";
import { useCategoryContext } from "./CreateCategoriesContext";

function CreateExpenseArea({ expenses, setExpenses }) {

	// TODO: Import the create expense function from your useExpenses.js hook
	const [newExpenseList, setNewExpenseList] = useState([]);
	const { getAllExpenses } = useExpenseApi();
	const { categories } = useCategoryContext();
	console.log("category values", categories.values);
	const fetchExpenses = useCallback(async () => {
        let allExpenses = await getAllExpenses();
        console.log("Expenses", allExpenses);
        setNewExpenseList(allExpenses);
    }, []);
	
	useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses])

	// TODO: rewrite this method to call your api
	const addNewExpense = async (event) => {
		event.preventDefault();
		const newlyCreatedExpense = await createExpense(newExpenseList);
		await fetchExpenses();

	}

	// TODO: rewrite this to call your api to delete it from the db (see john before)
	function deleteExpense(id) {
		setExpenses((prevExpenses) => {
			return prevExpenses.filter((newexpense, index) => {
				return index !== id;
			});
		});
		console.log("expense list: ", expenses);
	}
	// your logic here
	

	return (
        <div className=" block h-full bg-green-400">
			<div className="flex w-auto flex-col bg-white">
				<ExpenseInputArea fetchExpenses={fetchExpenses}  />
            {newExpenseList.map((expenseItem, index) => {
                // Find the category name by id
                const categoryObj = categories.find(cat => cat.id === expenseItem.categoryId);
                const categoryName = categoryObj ? categoryObj.name : "Unknown";
                return (
                    <ExpenseItem
                        key={index}
                        id={index}
                        vendor={expenseItem.vendor}
                        category={categoryName}
                        amount={expenseItem.amount}
                        date={expenseItem.expenseDate}
                        onDelete={deleteExpense}
                    />
                );
            })}
			</div>
        </div>
    );

}

export default CreateExpenseArea;
