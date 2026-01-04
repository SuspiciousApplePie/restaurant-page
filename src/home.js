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

	addReview() {
		const reviews = [
			{
				name: "Yukino",
				review: "The ramen pizza is good, but the ramen is better, dunno why they call themselves pizzeria, but you get the point!",
				rating: 10,
			},
			{
				name: "Charlotte",
				review: "The food is tasty, but it has high concentration of Aetherium according to my tests, if you are not a Luminary, proceed with caution.",
				rating: 10.
			}
		];

		const wrapper = this.wrapper;

		reviews.forEach(index => {
			const ratingWrapper = document.createElement("div");
			ratingWrapper.className = "content-wrapper"

			const nameElement = document.createElement("h1");
			nameElement.textContent = index.name;
			ratingWrapper.appendChild(nameElement);

			const reviewElement = document.createElement("p");
			reviewElement.textContent = index.review;
			ratingWrapper.appendChild(reviewElement);

			const ratingElement = document.createElement("p");
			ratingElement.textContent = `${index.rating}/10`;
			ratingWrapper.appendChild(ratingElement);

			wrapper.appendChild(ratingWrapper);
		})
	}
}