import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateExpenseArea from "./CreateExpenseArea.jsx";
import categories from "./categories.js";

function App() {
	return (
		<div className="">
			<Header />
			<div className="flex flex-row">
				<div className="w-1/3 flex flex-col p-4">
					{categories.map((e) => {
						return (
							<div className="flex row ">
								<div className="w-36 border-stone-900 border-2 px-4">{e.category}</div>
								<div className="w-20 border-stone-900 border-2 bg-yellow-200 text-right pr-2">$$$</div>
							</div>
						);
					})}
				</div>
				<CreateExpenseArea />
			</div>
			<Footer />
		</div>
	);
}

export default App;
