import React from "react";
import "./Notes.css";
import Note from "../note/Note";
import notes from "../data/notesDetails";

function createNotes(note) {
	return (
		<Note key={note.id} title={note.title} description={note.description} />
	);
}

function Notes() {
	return <main className="notes-container">{notes.map(createNotes)}</main>;
}

export default Notes;
