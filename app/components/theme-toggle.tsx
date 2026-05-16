import { useTheme } from "~/hook/ThemeContext"

export default function ThemeToggle() {
    const {theme, togleTheme} = useTheme()

    return (
        <div onClick={togleTheme} className="w-10">
            <img
                src={(theme === "" ? "/navbar/sun.svg" : "/dark/navbar/moon.svg")}
                alt="theme"
            />
        </div>
    )
}