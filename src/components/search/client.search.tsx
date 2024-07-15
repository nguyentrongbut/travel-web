"use client";

import { covertSlugUrl, sendRequest } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const ClientSearch = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const [posts, setPosts] = useState<ITravel[]>([]);

    const fetchPosts = async (query: string) => {
        const posts = await sendRequest<ITravel[]>({
            url: `https://travel-web-json-server.onrender.com/api/places?name_like=${query}`,
            method: "GET",
            nextOption: {
                cache: "no-store",
            },
        });
        if (posts) {
            setPosts(posts);
        }
    };

    useEffect(() => {
        document.title = `"${query}" on the Travel Web`;

        if (query) {
            fetchPosts(query);
        }
    }, [query]);

    if (!query || posts.length === 0) {
        return <div className="text-center mt-10">No search results exist</div>;
    }

    return (
        <section>
            <div className="text-center mt-10">
                Search results for keywords : <b>{query}</b>
            </div>
            <section>
                <div className="grid grid-cols-3 gap-3 m-7">
                    {posts.map((posts: ITravel) => {
                        return (
                            <div
                                key={`${posts.id}-all`}
                                className="flex border-2 border-[#f3f3f4] rounded-md p-5 gap-5 h-[200px]"
                            >
                                <Link
                                    href={`/page/${covertSlugUrl(posts.name)}-${
                                        posts.id
                                    }.html`}
                                    className="flex aspect-[1/1]"
                                >
                                    <Image
                                        src={posts.image}
                                        width={600}
                                        height={600}
                                        alt={posts.name}
                                        className="rounded-md object-cover h-full w-full select-none"
                                    ></Image>
                                </Link>
                                <div className="flex">
                                    <div className="flex flex-col">
                                        <Link
                                            href={`/page/${covertSlugUrl(
                                                posts.name
                                            )}-${posts.id}.html`}
                                        >
                                            <h3 className="text-lg font-semibold line-clamp-1">
                                                {posts.name}
                                            </h3>
                                        </Link>
                                        <p className="text-sm font-light line-clamp-4 mt-auto">
                                            {posts.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
};

const Page = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ClientSearch />
    </Suspense>
);

export default Page;
