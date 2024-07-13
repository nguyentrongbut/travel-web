import { covertSlugUrl, sendRequest } from "@/app/utils/api";
import IconHeartNoBg from "@/components/icons/icon.heart.no.bg";
import IconLocation from "@/components/icons/icon.location";
import IconStar from "@/components/icons/icon.star";
import AppSlider from "@/components/slider/app.slider";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
    const data = await sendRequest<ITravel[]>({
        url: "http://localhost:9000/api/places?_expand=country",
        method: "GET",
        nextOption: {
            cache: "no-store",
        },
    });

    console.log(data);

    return (
        <main className="ml-[14%] px-7">
            <AppSlider data={data} title="Popular Travel"></AppSlider>
            <section className="bg-white pl-5 py-5 mt-7 rounded-md">
                <h2 className="text-[26px] font-bold mb-4">All Travel</h2>
                <div className="grid grid-cols-3 gap-3">
                    {data.map((data: ITravel) => {
                        return (
                            <div
                                key={`${data.id}-all`}
                                className="flex border-2 border-[#f3f3f4] rounded-md p-5 gap-5 h-[200px]"
                            >
                                <Link
                                    href={`/page/${covertSlugUrl(data.name)}-${
                                        data.id
                                    }.html`}
                                    className="flex aspect-[1/1]"
                                >
                                    <Image
                                        src={data.image}
                                        width={600}
                                        height={600}
                                        alt={data.name}
                                        className="rounded-md object-cover h-full w-full select-none"
                                    ></Image>
                                </Link>
                                <div className="flex">
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={`/page/${covertSlugUrl(
                                                data.name
                                            )}-${data.id}.html`}
                                        >
                                            <h3 className="text-lg font-semibold line-clamp-1">
                                                {data.name}
                                            </h3>
                                        </Link>
                                        <div className="flex items-center gap-2">
                                            <IconLocation className="w-4 h-4"></IconLocation>
                                            <h4 className="font-light text-sm capitalize">
                                                {data.country?.name}
                                            </h4>
                                        </div>
                                        <p className="text-sm font-light line-clamp-4 mt-auto">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                                <button className="w-8 h-8 flex justify-center items-center bg-[#fdeffb] rounded-full flex-shrink-0 ml-auto">
                                    <IconHeartNoBg className="text-[#6d71f9]"></IconHeartNoBg>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Home;
