import type React from "react";
import { useEffect, useRef } from "react";

export default function Tooltip({
	children,
	text,
	side = "right",
}: {
	children: React.ReactNode;
	text: string;
	side?: "left" | "right";
}) {
	const component = useRef<HTMLDivElement>(null);
	const cursor = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = component.current;
		const cursorElement = cursor.current;

		if (!element || !cursorElement) return;

		const mouseMove = (e: MouseEvent) => {
			const rect = element.getBoundingClientRect();

			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			cursorElement.style.left =
				side === "right" ? `${x + 10}px` : `${x - 50}px`;
			cursorElement.style.top = `${y + 10}px`;

			console.log(x, y);
			console.log(
				side === "right" ? `${x + 10}px` : `${x - 20}px`,
				`${y + 10}px`,
			);

			console.log("a", cursorElement.style.left, cursorElement.style.left);
		};

		element.addEventListener("mousemove", mouseMove);

		return () => {
			element.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<div className="group relative cursor-tooltip" ref={component}>
			{children}
			<div
				className="group-hover:flex hidden absolute bg-black text-white px-1 rounded gochi-hand-regular"
				ref={cursor}>
				{text}
			</div>
		</div>
	);
}