import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Notes from "./components/notes/Notes";
// import Note from "./components/note/Note";

function App() {
	return (
		<section>
			<Header />
			<Notes />
			<Footer />
		</section>
	);
}

export default App;
