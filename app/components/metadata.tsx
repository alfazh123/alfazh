interface MetadataProps {
    title: string;
    description: string;
    image: string;
}

export function createMeta({title, description, image}: MetadataProps) {
	return [
		{ title: `${title}` },
		{ name: "description", content: `${description}` },
		{ property: "og:title", content: `${title}` },
		{
			property: "og:description",
			content: `${description}`,
		},
		{
			property: "og:image",
			// content: `${import.meta.env.VITE_API_ENDPOINT}/api/og?title=Alfazh%20Portfolio`,
			content: `${image}`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `${title}`,
		},
		{
			property: "twitter:description",
			content: `${description}`,
		},
		{
			property: "twitter:image",
			// content: `${import.meta.env.VITE_API_ENDPOINT}/api/og?title=Alfazh%20Portfolio`,
			content: `${image}`,
		},
		{ property: "profile:first_name", content: "Ahmd Mufahras Li" },
		{ property: "profile:last_name", content: "Alfazh Assardew" },
		{ property: "profile:username", content: "ahmd alfazh" },
	];
}