import { Restaurant } from "./restaurant.js";

export class Home extends Restaurant {
	constructor() {
		super();
	}

	addWrapper() {
		const wrapper = document.createElement("div");
		wrapper.id = "home-wrapper";
		this.container.appendChild(wrapper);
	}

	get wrapper() {
		const wrapper = document.querySelector("#home-wrapper");
		if (wrapper) {
			return wrapper;
		}
	}

	addTitle() {
		const wrapper = this.wrapper;
		const titleWrapper = document.createElement("div");
		titleWrapper.className = "title-wrapper"
		wrapper.appendChild(titleWrapper);

		const title = document.createElement('h1');
		title.className = "title";
		title.textContent = "Bladie's Pizzeria";
		titleWrapper.appendChild(title);
	}
}