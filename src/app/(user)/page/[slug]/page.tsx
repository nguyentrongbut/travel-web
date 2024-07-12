import { sendRequest } from "@/app/utils/api";
import AppComments from "@/components/comments/app.comments";
import AppStarRatting from "@/components/ratting/app.star.ratting";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const temp = params?.slug?.split(".html") ?? [];
    const temp1 = temp[0]?.split("-");
    const id = temp1[temp1.length - 1];
    // fetch data
    const res = await sendRequest<ITravel>({
        url: `http://localhost:9000/api/places/${id}`,
        method: "GET",
    });

    return {
        title: res?.name,
        description: res?.description,
    };
}

const Page = async (props: any) => {
    const { params } = props;

    const temp = params?.slug?.split(".html") ?? [];
    const temp1 = (temp[0]?.split("-") ?? []) as string;
    const id = temp1[temp1.length - 1];
    const res = await sendRequest<ITravel>({
        url: `http://localhost:9000/api/places/${id}`,
        method: "GET",
    });

    // await new Promise((resolve) => setTimeout(resolve, 400));

    if (!res) {
        notFound();
    }

    return (
        <main className="ml-[14%]">
            <section className="bg-white p-8 m-7 rounded-md">
                <h2 className="font-bold text-3xl mb-4">{res.name}</h2>
                <div className="mb-5 w-[580px] h-[348px]">
                    <Image
                        src={res.image}
                        width={1000}
                        height={1000}
                        alt={res.name}
                        className="object-cover w-full h-full"
                    ></Image>
                </div>
                <p>{res.description}</p>
            </section>
            <AppStarRatting></AppStarRatting>
            <AppComments></AppComments>
        </main>
    );
};

export default Page;
