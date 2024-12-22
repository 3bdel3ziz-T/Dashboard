export default class Router {
	constructor(routes) {
		this.routes = routes;
		this.init();
		this.handleLocation(location.pathname);
	}
	init() {
		Array.from(document.querySelectorAll("a")).forEach((anchor) => {
			anchor.addEventListener("click", (event) => {
				event.preventDefault();
				this.handleLocation(anchor.getAttribute("href"));
			});
		});
	}
	handleLocation(link, pushState = true) {
		const route =
			this.routes.find((r) => r.href === link) || this.routes[0].href;
		history.pushState("", "", link);
		this.handleView(route);
	}
	async handleView(route) {
		const app = document.querySelector("#app");
		const html = await this.getTemplate(route.path);
		app.innerHTML = html;
	}
	async getTemplate(path) {
		const res = await fetch(path);
		return await res.text();
	}
}
