"use client";

import qs from "query-string";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoryId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            categoryId: categoryId
        };

        // search in the url
        const url = qs.stringifyUrl({
            url: window.location.href,
            query: query,
            // if query and name are empty or null remove them from the query
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debouncedValue, router, categoryId]);

    return (
        <div className="relative">
            <SearchIcon className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
        </div>
    );
};