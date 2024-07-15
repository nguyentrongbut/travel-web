"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import IconHeart from "@/components/icons/icon.heart";
import IconHeartNoBg from "@/components/icons/icon.heart.no.bg";
import IconStar from "@/components/icons/icon.star";
import Link from "next/link";
import { covertSlugUrl } from "@/app/utils/api";
import IconLocation from "@/components/icons/icon.location";

const AppSlider = (props: any) => {
    const { data, title } = props;

    return (
        <section className="bg-white pl-5 py-5 mt-7 rounded-md">
            <h2 className="text-[26px] font-bold mb-4">{title}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={5.3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((data: ITravel) => {
                    return (
                        <SwiperSlide key={data.id}>
                            <div className="flex rounded-md bg-slate-300 relative overflow-hidden z-10">
                                <div className="aspect-[6/7] w-full h-full">
                                    <Link
                                        href={`/page/${covertSlugUrl(
                                            data.name
                                        )}-${data.id}.html`}
                                    >
                                        <Image
                                            src={data.image}
                                            width={600}
                                            height={600}
                                            alt={data.name}
                                            className="absolute inset-0 w-full h-full object-cover select-none"
                                        ></Image>
                                    </Link>
                                    <button className="absolute right-4 top-4 bg-black bg-opacity-35 rounded-full w-8 h-8 flex justify-center items-center">
                                        <IconHeartNoBg className="text-white w-5 h-5"></IconHeartNoBg>
                                        {/* <IconHeart></IconHeart> */}
                                    </button>

                                    <div className="absolute bottom-4 left-4 text-white">
                                        <Link
                                            href={`/page/${covertSlugUrl(
                                                data.name
                                            )}-${data.id}.html`}
                                        >
                                            <h3 className="line-clamp-2">{data.name}</h3>
                                        </Link>
                                        <div className="mt-1 flex items-center gap-1 -ml-[2px]">
                                            <IconLocation className="w-4 h-4"></IconLocation>
                                            <h4 className="font-light text-sm text-white capitalize">
                                                {data.country?.name}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm mt-auto absolute bottom-4 right-4 text-white">
                                        <IconStar className="w-5 h-5 text-yellow-400 -mt-1"></IconStar>
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default AppSlider;
