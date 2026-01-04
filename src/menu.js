import { Restaurant } from "./restaurant.js";

export class Menu extends Restaurant {
	constructor() {
		super();
		this.beverageSection = document.createElement("div");
		this.mainSection = document.createElement("div");
		this.sideSection = document.createElement("div");
	}

	displaySection() {
		const sections = [ this.beverageSection, this.mainSection, this.sideSection ];
		const label = ["Beverage", "Main", "Side"];
		
		sections.forEach((section, index) => {
			section.className = "food-section";
			const header = document.createElement("h1");
			header.textContent = label[index];
			section.appendChild(header);

			this.container.appendChild(section);
		})
	}
}