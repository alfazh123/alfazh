import { useRef } from "react";
import PianoBoard from "~/components/piano-board";
import { usePiano } from "~/hook/usePiano";

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