"use client";
import IconChart from "@/components/icons/icon.chart";
import IconHeart from "@/components/icons/icon.heart";
import IconHome from "@/components/icons/icon.home";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        name: "Overview",
        href: "/",
        icon: IconHome,
    },
    {
        name: "Favorite",
        href: "/favorite",
        icon: IconHeart,
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: IconChart,
    },
];
const AppSideBar = () => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    let firstParts = "/" + parts[1];

    if (parts[1] === "page") {
        firstParts = "/";
    }
    const isActive = (href: string) => href === firstParts;
    return (
        <aside className="fixed top-0 bottom-0 left-0 w-[14%] bg-white flex flex-col shadow-lg">
            <Link href="/" className="text-3xl font-bold ml-9 mt-10">
                Travel Web
            </Link>
            <nav>
                <ul className="flex flex-col gap-3 ml-7 mt-14 text-[#3c4457] text-lg">
                    {navLinks.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <li
                                key={link.name}
                                className={`font-semibold transition-opacity ${
                                    isActive(link.href)
                                        ? "text-[#6d71f9]"
                                        : "hover:opacity-80"
                                }`}
                            >
                                <Link href={link.href} className="flex gap-3 items-center">
                                    <LinkIcon className="text-[#3c4457] -mt-1 w-7 h-7 text-current"></LinkIcon>
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <footer className="mt-auto text-center mb-5 font-medium">
                @2024 Travel Web
            </footer>
        </aside>
    );
};

export default AppSideBar;
