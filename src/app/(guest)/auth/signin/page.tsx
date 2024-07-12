"use client";
import Link from "next/link";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});
// import signinImage from "../../../../../public/signin.png";
const SignInPage = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-[430px] text-center rounded-[12px] bg-white shadow p-[30px]">
                <h2 className="font-bold text-[28px] mb-[30px]">Sign In</h2>
                <form action="">
                    <button className="w-full h-[60px] flex items-center justify-center bg-[#6d71f9] rounded-full text-lg text-white">
                        Sign In
                    </button>
                </form>
                <p className="text-[18px] mt-5">
                    Don’t a have account?{" "}
                    <Link
                        href="/auth/signup"
                        className="font-medium hover:text-[#6d71f9]"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;
