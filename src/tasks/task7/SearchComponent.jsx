import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const debounceVal = useDebounce(searchQuery, 2000);

    function handleValueChange (e) {
        setSearchQuery(e.target.value);
    }

    function onSearch (value) {
        console.log("Called after delay with val", value);
        setSearchQuery("");
        // ANy API call...
    }

    useEffect(() => {
        if(debounceVal) {
            onSearch(debounceVal);
        }
    }, [onSearch, debounceVal]);

    return (
        <div className="w-full h-[100vh] bg-black/30 flex justify-center items-center">
            <div className="bg-white p-6 rounded-2xl flex gap-2">
                <Input 
                    placeholder="Enter search query..."
                    name="search"
                    value={searchQuery}
                    onChange={handleValueChange}
                />
            </div>
        </div>
    );
}