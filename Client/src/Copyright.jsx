import React from "react";

//<p>Created by {name}</p>
function Copyright() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const name = "Peyton McCutcheon";
	return (
		<div>
			<p>Created by {name}</p>
			<p>Copyright © {year}</p>
		</div>
	);
}

export default Copyright;
