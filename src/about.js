import { Restaurant } from "./restaurant.js";

export class About extends Restaurant {
	constructor() {
		super();
		this.aboutSection = document.createElement("div");
		this.memberSection = document.createElement("div");
	}

	test() {
		console.log(this.container);
	}

	displaySection() {
		this.container.appendChild(this.aboutSection);
		this.container.appendChild(this.memberSection);
	}
}