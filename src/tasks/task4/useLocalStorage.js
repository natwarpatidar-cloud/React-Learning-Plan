import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedVal = localStorage.getItem(key);
        return storedVal ? JSON.parse(storedVal):initialValue;
    });

    const toggleTheme = () => {
        setValue(prev => prev === 'light'? "dark" : 'light');
    }

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue, toggleTheme];
}