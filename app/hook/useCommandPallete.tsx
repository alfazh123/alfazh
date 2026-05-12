import { useState } from "react";

export function useCommandPallete() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenCommandPallete = () => {
        setIsOpen(true)
    }

    const handleCloseCommandPallete = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        handleOpenCommandPallete,
        handleCloseCommandPallete,
    }
}