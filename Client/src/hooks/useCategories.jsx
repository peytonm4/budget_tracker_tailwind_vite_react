import { useState } from "react";

const BASE_URL = "https://localhost:48935/api/categories"; // Replace with your actual API base URL

const useCategoryApi = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Function to create a new category
	const createCategory = async (categoryData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`${BASE_URL}/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(categoryData),
			});

			if (!response.ok) {
				throw new Error("Failed to create category");
			}

			// Assuming the API returns some data after creating
			const data = await response.json();
			setLoading(false);
			return data; // You can customize what you return here based on API response
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed to create category");
			throw error;
		}
	};

	// Function to get all categories
	const getAllCategories = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`${BASE_URL}/get-all-categories`);

			if (!response.ok) {
				throw new Error("Failed to fetch categories");
			}

			const data = await response.json();
			setLoading(false);
			return data; // You can customize what you return here based on API response
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed to fetch categories");
			throw error;
		}
	};

	return {
		loading,
		error,
		createCategory,
		getAllCategories,
	};
};

export default useCategoryApi;
