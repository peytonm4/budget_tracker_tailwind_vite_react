import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateExpenseArea from "./CreateExpenseArea.jsx";
import ExpenseInputArea from "./ExpenseInputArea.jsx";

function App() {
	return (
		<div>
			<Header />
			<CreateExpenseArea />
			<Footer />
		</div>
	);
}

export default App;
