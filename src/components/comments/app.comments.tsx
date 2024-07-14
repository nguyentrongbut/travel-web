"use client";
import { sendRequest } from "@/app/utils/api";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const AppComments = (props: { data: ITravel }) => {
    const router = useRouter();
    const { data } = props;
    const [yourComment, setYourComment] = useState("");

    const handleSubmit = async () => {
        const res1 = await sendRequest<ITravel>({
            url: "http://localhost:9000/api/comments",
            method: "POST",
            body: {
                text: yourComment,
                placeId: data.id,
                userId: 1,
            },
        });
        if (res1) {
            setYourComment("");
            router.refresh();
        }
    };

    return (
        <div className="bg-white p-8 m-7 rounded-md">
            <div className="w-full flex gap-4 items-center">
                <div className="sprite"></div>
                <input
                    type="text"
                    value={yourComment}
                    onChange={(e) => setYourComment(e.target.value)}
                    placeholder="Comment here ...."
                    className="outline-none border-b border-[#6d71f9] w-full p-1"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                />
            </div>
            <div className="flex gap-10 mt-14">
                <div className="flex flex-col gap-2">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={100}
                            height={100}
                            alt="admin"
                            className="w-full h-full object-cover"
                        ></Image>
                    </div>
                    <p className="text-center line-clamp-1 font-medium">
                        Admin travel web
                    </p>
                </div>
                <div className="w-full">
                    {data.comments?.map((comment) => (
                        <div
                            key={comment.id}
                            className="flex gap-4 hover:bg-slate-300/50 rounded-md p-2"
                        >
                            <div className="sprite"></div>
                            <div>
                                <p className="text-lg font-medium line-clamp-1">
                                    {comment.user?.name}
                                </p>
                                <p className="line-clamp-2">{comment.text}</p>
                            </div>
                            <span className="text-sm ml-auto mt-1">
                                {dayjs(comment.createdAt).fromNow()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppComments;
