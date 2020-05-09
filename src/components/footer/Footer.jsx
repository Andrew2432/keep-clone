import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();
function Footer() {
	return (
		<footer className="footer-container">
			<h3>&copy; {year}. Made by Andrew</h3>
			<h4>Developed using React.js</h4>
		</footer>
	);
}

export default Footer;
