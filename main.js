import Router from "./router.js";

new Router([
	{
		href: "/404",
		path: "./app/components/notFoundComponent/notFound.html",
	},
	{
		href: "/",
		path: "./app/components/homeComponent/home.html",
	},
	{
		href: "/profile",
		path: "./app/components/profileComponent/profile.html",
	},
	{
		href: "/courses",
		path: "./app/components/coursesComponent/courses.html",
	},
	{
		href: "/projects",
		path: "./app/components/projectsComponent/projects.html",
	},
	{
		href: "/friends",
		path: "./app/components/friendsComponent/friends.html",
	},
	{
		href: "/files",
		path: "./app/components/filesComponent/files.html",
	},
	{
		href: "/settings",
		path: "./app/components/settingsComponent/settings.html",
	},
	{
		href: "/plans",
		path: "./app/components/plansComponent/plans.html",
	},
]);
