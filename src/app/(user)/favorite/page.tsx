import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Favorite",
    description: "This is Favorite Page",
};

const FavoritePage = () => {
    return <div className="ml-[14%]">this is favorite page</div>;
};

export default FavoritePage;
