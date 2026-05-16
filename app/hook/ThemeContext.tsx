import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import type { ThemeContextProp } from "~/type";

const ThemeContext = createContext<ThemeContextProp | undefined>(undefined);

export function ThemeProvider({children}: {children: ReactNode}) {
    const [theme, setTheme] =useState<"" | "dark">("");
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            setDark();
        } else {
            setLight();
        }
    }, [location])

    const togleTheme = () => {
        setTheme((prev) => (prev === "" ? "dark" : ""));
        if (theme === '') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    }

    const setLight = () => {
        localStorage.removeItem('theme');
        setTheme("")
    }

    const setDark = () => {
        localStorage.setItem('theme', 'dark');
        setTheme("dark")
    }

    return (
        <ThemeContext.Provider value={{theme, togleTheme, setLight, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}