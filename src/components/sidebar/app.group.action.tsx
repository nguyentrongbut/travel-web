import IconSearch from "@/components/icons/icon.search";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import IconUser from "@/components/icons/icon.user";

const AppGroupAction = () => {
    return (
        <div className="bg-white">
            <nav className="py-8 w-1/4 ml-auto mr-8 flex gap-5 items-center">
                <form
                    action=""
                    className="flex h-[45px] border-2 border-[#ededf0] rounded-md w-full overflow-hidden"
                >
                    <button type="submit" className="mx-3">
                        <IconSearch className="text-[#9ca3af] "></IconSearch>
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none h-full w-full"
                    />
                </form>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                        {/* <div className="sprite"></div> */}
                        <IconUser className="w-7 h-7"></IconUser>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                        {/* <DropdownMenuLabel>Travel web</DropdownMenuLabel> */}
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem>Log out</DropdownMenuItem> */}
                        <DropdownMenuItem>
                            <Link href="/auth/signin" className="w-full h-full">
                                Sign in
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/auth/signup" className="w-full h-full">
                                Sign up
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </div>
    );
};

export default AppGroupAction;
