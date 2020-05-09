import React from "react";
import "./Note.css";

function Note(props) {
	return (
		<section className="note">
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</section>
	);
}

export default Note;
