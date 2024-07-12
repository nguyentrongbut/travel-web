import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AppSideBar from "@/components/sidebar/app.sidebar";
import AppGroupAction from "@/components/sidebar/app.group.action";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Travel Web",
    description: "This is Travel Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppSideBar></AppSideBar>
                <AppGroupAction></AppGroupAction>
                {children}
            </body>
        </html>
    );
}
