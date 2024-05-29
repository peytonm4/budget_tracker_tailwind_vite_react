import React, { useContext, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateExpenseArea from "./CreateExpenseArea.jsx";
import categories from "./categories.js";
import CategoriesContext from "./CreateCategoriesContext.jsx";

function CreateNewCatergoryArea() {
	const [newCategory, setNewCategory] = useState([]);
	function addCategory(event) {
		//useContext(CategoriesContext).add({even.target: value , id})
		event.preventDefault();
	}

	function handleChange(event) {
		const { name, value } = event.target;

		setNewCategory((prevCategory) => {
			return {
				...prevCategory,
				[name]: value,
			};
		});
	}
	return (
		<form onSubmit={addCategory}>
			<div className="flex flex-col h-20 mt-4 ml-4 w-52 items-end">
				<h3 className="mr-0">Need New Category?</h3>
				<input className="text-end bg-yellow-200 " placeholder="Add text here" onChange={handleChange}></input>
				<button type="submit" className="bg-emerald-500 border-solid border-2 border-black px-2 rounded-xl">
					Add Category
				</button>
			</div>
		</form>
	);
}

export default CreateNewCatergoryArea;
