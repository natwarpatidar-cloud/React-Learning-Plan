import { Moon, Sun } from "lucide-react";
import { useLocalStorage } from "./useLocalStorage"

export default function ThemeToggle (){

    const [theme, setTheme, toggleTheme] = useLocalStorage('theme', 'light');

    return (
        <div className={`w-full h-[100vh] flex justify-center items-center ${theme === "dark"? "bg-black/70": "bg-black/10"}`}>
            <button onClick={toggleTheme} className={`cursor-pointer ${theme === "dark"? "text-white": "text-black" }`}>{ theme === "dark" ? (<Sun />) : (<Moon />) }</button>
        </div>
    )
}