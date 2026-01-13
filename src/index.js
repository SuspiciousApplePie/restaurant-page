import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

(function () {
	const home = new Home();
	const menu = new Menu();
	const about = new About();
	const body = document.querySelector("body");

	body.addEventListener("click", (e) => {
		switch (e.target.id) {
			case "home":
				home.clearPage();
				home.displayPage();
				break;
			case "menu":
				menu.clearPage();
				menu.displayPage();
				break;
			case "about":
				about.clearPage();
				about.displayPage();
				break;
		};	
	});
})();