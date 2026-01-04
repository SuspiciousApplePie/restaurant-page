import { Restaurant } from "./restaurant.js";

export class About extends Restaurant {
	constructor() {
		super();
		this.aboutSection = document.createElement("div");
		this.memberSection = document.createElement("div");
		this.contactSection = document.createElement("div");
	}

	test() {
		console.log(this.container);
	}

	displaySection() {
		this.container.appendChild(this.aboutSection);
		this.container.appendChild(this.memberSection);
		this.container.appendChild(this.contactSection);
	}

	displayAboutUs() {
		const aboutUsInfo = "The Bladie's Pizzeria have been standing for the last 2 eons. Authentic and made with enlightenment."

		const aboutElement = document.createElement("p");
		aboutElement.textContent = aboutUsInfo;
		this.aboutSection.appendChild(aboutElement);

	}

	displayMember() {
		const members = [
			{
				name: "Blady",
				role: "Head Chef",
			},
			{
				name: "Lancet",
				role: "Assistant Chef",
			},
			{
				name: "Mes",
				role: "Waiter",
			}
		];

		members.forEach(member => {
			const memberWrapper = document.createElement("div");
			
			const name = document.createElement("p");
			name.textContent = member.name;

			const role = document.createElement("p");
			role.textContent = member.role;

			memberWrapper.appendChild(name);
			memberWrapper.appendChild(role);

			this.memberSection.appendChild(memberWrapper);
		});
	}

	displayContact() {
		const contact = {
			email: "thebladies@luminae.il",
			number: "LUMEN87209114455",
		}

		const email = document.createElement("div");
		email.textContent = contact.email;
		this.contactSection.appendChild(email);

		const contactNumber = document.createElement("div");
		contactNumber.textContent = contact.number;
		this.contactSection.appendChild(contactNumber);
	}
}