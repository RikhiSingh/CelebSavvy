"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
    return (
        <div className="relative">
            <SearchIcon className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <Input 
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
        </div>
    );
};