import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [state, setValue] = useState(() => {
        const localStorageItem = localStorage.getItem(key);
        if (localStorageItem === null) return defaultValue;
        try {
            return JSON.parse(localStorageItem);
        } catch (err) {
            console.log(err);
            return defaultValue;
        }
    });

    const setLocalStorageState = (value) => {
        setValue(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setLocalStorageState];
};
