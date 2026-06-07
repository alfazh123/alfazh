import type { Config } from "@react-router/dev/config";

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	prerender: [
		"/",
		"/about",
		"/project",
		"/blog",
		"/piano",
		// Dynamic blog posts
		"/blog/build-blog-with-nextjs",
		"/blog/built-wasm-package-with-rust",
		"/blog/i-like-hotkeys",
		"/blog/make-reusable-component-react",
		"/blog/what-i-like-in-my-portfolio",
		// Dynamic projects
		"/project/ace24",
		"/project/image-editor",
		"/project/pathxplorer",
	],
} satisfies Config;
