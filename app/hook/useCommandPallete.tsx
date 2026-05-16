import { useState } from "react";

export function useCommandPallete() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenCommandPallete = () => {
			setIsOpen(true);
			document.body.classList.add("no-scroll");
		};

		const handleCloseCommandPallete = () => {
			setIsOpen(false);
			document.body.classList.remove("no-scroll");
		};

    return {
        isOpen,
        handleOpenCommandPallete,
        handleCloseCommandPallete,
    }
}