import { useRef } from "react";
import PianoBoard from "~/components/piano-board";
import { usePiano } from "~/hook/usePiano";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Piano" },
		{ name: "description", content: "Piano games" },
		{ property: "og:title", content: "Piano" },
		{
			property: "og:description",
			content: "Piano games",
		},
		{
			property: "og:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Piano`,
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://porto.alfazh.dev/piano" },
		{ property: "twitter:card", content: "summary_large_image" },
		{ property: "twitter:site", content: "@alfazh" },
		{
			property: "twitter:title",
			content: `Piano`,
		},
		{
			property: "twitter:description",
			content: `Piano games`,
		},
		{
			property: "twitter:image",
			content: `${process.env.API_ENDPOINT}/api/og?title=Piano`,
		},
	];
}

export default function Labs() {
    const element = useRef<HTMLDivElement>(null);

    usePiano()

    return (
			<div
				className="flex flex-col gap-10 w-screen justify-center items-center"
				ref={element}>
				<PianoBoard />
				<div className="text-center dark:text-white">
					<p>Play piano with number</p>
					<p>play with number 1 - 7 for white key</p>
					<p>play with number q, w, e, r, t for black key</p>
				</div>
			</div>
		);
}