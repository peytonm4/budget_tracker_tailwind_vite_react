import React, { useContext, useEffect, useState } from "react";
import useCategoryApi from "../hooks/useCategories";
import { useCategoryContext } from "./CreateCategoriesContext";

function CreateNewCatergoryArea() {
	const [newCategory, setNewCategory] = useState({
		id: 0,
		name: ""
	});
	const { createCategory } = useCategoryApi();
	const { fetchCategories } = useCategoryContext();

	function handleChange(event) {
		const { name, value } = event.target;

		setNewCategory((prevCategory) => {
			return {
				...prevCategory,
				[name]: value,
			};
		});
	}

	const addNewCategory = async (event) => {
		event.preventDefault();
		// use the inputted category name from the user to send to the API to create a category
		const newlyCreatedCategory = await createCategory(newCategory);
		await fetchCategories();
		console.log("Our new category", newlyCreatedCategory);
		setNewCategory((prevCategory) => {
			return {
				id: 0,
				name: ""
			};
		});
	}

	return (
		<form onSubmit={addNewCategory}>
			<div className="flex flex-col h-20 mt-4 ml-4 w-52 items-end">
				<h3 className="mr-0">Need New Category?</h3>
				<input name="name" className="text-end bg-yellow-200" placeholder="Category name" onChange={handleChange} value={newCategory.name} />
				<button type="submit" className="bg-emerald-500 border-solid border-2 border-black px-2 rounded-xl">
					Add Category
				</button>
			</div>
		</form>
	);
}

export default CreateNewCatergoryArea;
