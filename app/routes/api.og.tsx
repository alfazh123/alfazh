import type { Route } from "../+types/root";


export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);

	const title =
		url.searchParams.get("title") ??
		"Alfazh Portfolio";

	const blog = url.searchParams.get("blog") ?? false
	const project = url.searchParams.get("project") ?? false

	const svg = `
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1200"
			height="630"
			x="0"
			y="0"
		>
			<rect width="100%" height="100%" fill="#f4f4f5" />
			<foreignObject x="80" y="150" width="840" height="630">
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					style="
					width:100%;
					height:100%;
					display:flex;
					flex-direction:column;
					font-family:Inter,sans-serif;
					"
				>
					<div
					style="
						font-size:60px;
						font-weight:bold;
						color:black;
						line-height:1.2;
						word-break:break-word;
					"
					>
					${title}
					</div>

					<div
					style="
						margin-top:20px;
						font-size:30px;
						color:black;
					"
					>
					${blog ? "Blog by Alfazh" : "" }
					${project ? "Project by Alfazh" : "" }
					</div>
				</div>
			</foreignObject>
			<image href="/plant.svg" x="800" y="300" height="300" width="400" />
		</svg>
	`;

	return new Response(svg, {
		headers: {
			"Content-Type": "image/svg+xml",
		},
	});
}