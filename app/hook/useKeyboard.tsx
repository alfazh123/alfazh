import { useEffect } from "react";

export function useKeyboard() {
	function changeLight(setLight: () => void, theme: "" | "dark") {
		useEffect(() => {
			if (!window) return;

			window.addEventListener("keydown", (e: KeyboardEvent) => {
				if (e.key === "l") {
					setLight();
				}
			});
		}, [theme]);
	}

	function changeDark(setDark: () => void, theme: "" | "dark") {
		useEffect(() => {
			if (!window) return;

			window.addEventListener("keydown", (e: KeyboardEvent) => {
				if (e.key === "n") {
					setDark();
				}
			});
		}, [theme]);
	}

	function toggleCommandPallete(
		show: boolean,
		handleOpen: () => void,
		handleClose: () => void,
	) {
		useEffect(() => {
			if (!window) return;

			function handleHotKeys(e: KeyboardEvent) {
				if (show === false) {
					if (e.key === "k") {
						e.preventDefault();
						handleOpen();
					}
					document.body.classList.add("no-scroll");
				} else {
					if (e.shiftKey && e.key.toLocaleLowerCase() === "k") {
						handleClose();
					}
					document.body.classList.remove("no-scroll");
				}
			}

			window.addEventListener("keydown", handleHotKeys);

			return () => {
				window.removeEventListener("keydown", handleHotKeys);
			};
		}, [show]);
	}

	return {
		changeLight,
		changeDark,
		toggleCommandPallete,
	};
}