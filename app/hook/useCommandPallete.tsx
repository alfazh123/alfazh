import { useState } from "react";

export function useCommandPallete() {
    const [show, setShow] = useState<boolean>(false);

		const handleOpen = () => {
			setShow(true);
			document.body.classList.add("no-scroll");
		};

		const handleClose = () => {
			setShow(false);
			document.body.classList.remove("no-scroll");
		};

		return {
			show,
			handleOpen,
			handleClose,
		};
}