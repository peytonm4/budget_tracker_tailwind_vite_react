
// TODO: Write your hook that has functions to call crud methods from your API backend, use useCategories as a reference for how to do this

import { useState } from "react";

const BASE_URL = "https://localhost:48935/api/expenses"; // Replace with your actual API base URL

const useExpenseApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Function to create a new expense
	const createExpense = async (expenseData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`${BASE_URL}/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(expenseData),
			});

			if (!response.ok) {
				throw new Error("Failed to create expense");
			}

			// Assuming the API returns some data after creating
			const data = await response.json();
			setLoading(false);
			return data; // You can customize what you return here based on API response
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed to create expense");
			throw error;
		}
	};

    // Function to delete an expense
	// const deleteExpense = async (expenseData) => {
	// 	setLoading(true);
	// 	setError(null);

	// 	try {
	// 		const response = await fetch(`${BASE_URL}/create`, {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(expenseData),
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error("Failed to create expense");
	// 		}

	// 		// Assuming the API returns some data after creating
	// 		const data = await response.json();
	// 		setLoading(false);
	// 		return data; // You can customize what you return here based on API response
	// 	} catch (error) {
	// 		setLoading(false);
	// 		setError(error.message || "Failed to create expense");
	// 		throw error;
	// 	}
	// };

	// Function to get all expense
	const getAllExpenses = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`${BASE_URL}/get-all-expenses`);

			if (!response.ok) {
				throw new Error("Failed to fetch expenses");
			}

			const data = await response.json();
			setLoading(false);
			return data; // You can customize what you return here based on API response
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed to fetch expenses");
			throw error;
		}
	};

	return {
		loading,
		error,
		createExpense,
        //deleteExpense,
		getAllExpenses,
	};
};

export default useExpenseApi;
