import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("projects", "routes/projects.tsx"),
	route("blog", "routes/post.tsx"),
	route("blog/:id", "routes/detail-post.tsx"),
] satisfies RouteConfig;
