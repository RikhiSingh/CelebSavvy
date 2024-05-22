import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // every half second
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

        return () => {
            // prevent overflow
            clearTimeout(timer);
        }
    }, [value, delay]);

    return debouncedValue;
}