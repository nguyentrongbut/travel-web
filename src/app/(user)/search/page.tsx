import ClientSearch from "@/components/search/client.search"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search",
    description: "This is Search Page",
};
const SearchPage = () => {
    return (
        <main className="ml-[14%]">
            <ClientSearch></ClientSearch>
        </main>
    )
}

export default SearchPage