import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("project", "routes/projects.tsx"),
	route("project/:id", "routes/detail-project.tsx"),
	route("blog", "routes/post.tsx"),
	route("blog/:id", "routes/detail-post.tsx"),
	route("piano", "routes/piano.tsx"),
] satisfies RouteConfig;
