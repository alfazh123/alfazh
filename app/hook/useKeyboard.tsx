import { useEffect } from "react";

interface UseKeyboardProps {
	theme: "" | "dark";
	show: boolean;
	setLight: () => void;
	setDark: () => void;
	handleOpen: () => void;
	handleClose: () => void;
}

export function useKeyboard({
	theme,
	show,
	setLight,
	setDark,
	handleOpen,
	handleClose,
}: UseKeyboardProps) {
	useEffect(() => {
		if (!window) return;

		function handleKey(e: KeyboardEvent) {
			if (!show && e.key === "k") {
				e.preventDefault();
				handleOpen();
				document.body.classList.add("no-scroll");
			} else if (show && e.shiftKey && e.key.toLocaleLowerCase() === "k") {
				e.preventDefault();
				handleClose();
				document.body.classList.remove("no-scroll");
			}

			if (theme === "dark" && e.key === "l") {
				e.preventDefault();
				setLight();
			} else if (theme === "" && e.key === "n") {
				e.preventDefault();
				setDark();
			}

			// if (show) {
			// 	document.body.classList.add("no-scroll");
			// } else {
			// 	document.body.classList.remove("no-scroll");
			// }
		}

		window.addEventListener("keydown", (e: KeyboardEvent) => {
			handleKey(e);
		});

		return () => {
			window.removeEventListener("keydown", (e: KeyboardEvent) => {
				handleKey(e);
			});
		};
	}, [theme, show]);
}