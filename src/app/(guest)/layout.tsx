import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AppSideBar from "@/components/sidebar/app.sidebar";
import AppGroupAction from "@/components/sidebar/app.group.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sign in - Sign up",
    description: "This is sign in sign up page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
