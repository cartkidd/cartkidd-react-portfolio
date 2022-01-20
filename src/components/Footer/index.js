import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/cartkidd"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github.png")}
						alt="Github logo"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin.png")}
						alt="LinkedIn logo"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/ig.png")}
						alt="Instagram logo"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;