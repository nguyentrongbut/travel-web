"use client";
import IconStar from "@/components/icons/icon.star";
import { useState } from "react";

const AppStarRating = () => {
    const [rating, setRating] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center bg-white p-8 m-7 rounded-md">
            <div className="flex">
                {[...Array(5)].map((_, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index} className="cursor-pointer" onClick={() => setRating(currentRating)}>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                className="hidden" // Hide the radio input
                            />
                            <IconStar
                                className={
                                    currentRating <= (rating ?? 0)
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                }
                            />
                        </label>
                    );
                })}
            </div>
            <p className="mt-2">Your rating is {rating ?? "not set"}</p>
        </div>
    );
};

export default AppStarRating;
