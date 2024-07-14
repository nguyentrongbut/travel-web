"use client";
import IconArrowLeft from "@/components/icons/icon.arrow.left";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AppSignIn = () => {
    const FormSchema = z.object({
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have than 8 characters"),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values);
    };
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="w-[430px] text-center rounded-[12px] bg-white shadow p-[30px]">
                <div className="mb-[30px] relative">
                    <Link href="/" className="absolute left-0 top-1">
                        <IconArrowLeft className="w-8 h-8"></IconArrowLeft>
                    </Link>
                    <h2 className="font-bold text-[28px] mx-auto">Sign In</h2>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className="h-[60px] rounded-[30px] border border-[#191B1D26] text-lg px-6 outline-none mb-3"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className="h-[60px] rounded-[30px] border border-[#191B1D26] text-lg px-6 outline-none"
                                            placeholder="Password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full h-[60px] flex items-center justify-center bg-[#6d71f9] rounded-[30px] text-lg text-white mt-[27px] hover:opacity-95"
                        >
                            Sign In
                        </Button>
                    </form>
                    <p className="text-[18px] mt-5">
                        Don’t a have account?
                        <Link
                            href="/auth/signup"
                            className="font-medium hover:text-[#6d71f9] ml-2"
                        >
                            Sign Up
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default AppSignIn;
