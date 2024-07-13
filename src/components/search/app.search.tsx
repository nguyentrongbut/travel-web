'use client'

import IconSearch from "@/components/icons/icon.search";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const AppSearch = () => {
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const searchQuery = (e.target as HTMLFormElement).elements.namedItem("search") as HTMLInputElement;
        if (searchQuery?.value) {
            router.push(`/search?q=${searchQuery.value}`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-[45px] border-2 border-[#ededf0] rounded-md w-full overflow-hidden"
        >
            <button type="submit" className="mx-3">
                <IconSearch className="text-[#9ca3af]" />
            </button>
            <input
                type="text"
                name="search"
                placeholder="Search"
                className="outline-none h-full w-full"
            />
        </form>
    );
};

export default AppSearch;
