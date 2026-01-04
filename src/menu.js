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

	addFood() {
		const menu = [
			{
				foodName: "Food 1",
				price: 30,
				type: "main",
			},
			{
				foodName: "Food 2",
				price: 25,
				type: "main",
			},
			{
				foodName: "Drink 1",
				price: 8,
				type: "beverages",
			},
			{
				foodName: "Drink 2",
				price: 11,
				type: "beverages",
			},
			{
				foodName: "Side 1",
				price: 15,
				type: "side",
			},
			{
				foodName: "Side 2",
				price: 18,
				type: "side",
			}
		];

		menu.forEach(item => {
			const food = document.createElement("section");
			food.className = "food-item";

			const itemElement = document.createElement("div");
			itemElement.textContent = item.foodName;
			const priceElement = document.createElement("div");
			priceElement.textContent = item.price;

			food.appendChild(itemElement);
			food.appendChild(priceElement);

			switch(item.type) {
				case "beverages":
					this.beverageSection.appendChild(food);
					break;
				case "main":
					this.mainSection.appendChild(food);
					break;
				case "side":
					this.sideSection.appendChild(food);
					break;
			}
		});
	}
}