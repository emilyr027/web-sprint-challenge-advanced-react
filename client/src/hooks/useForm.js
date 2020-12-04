// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (key, initialValue = '') => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item? JSON.parse(item) : initialValue;
    })

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}

export default useForm