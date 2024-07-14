import type { Metadata } from "next";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { sendRequest } from "@/app/utils/api";
import Image from "next/image";
import AppDelete from "@/components/crud/app.delete";
import AppAdd from "@/components/crud/app.add";
import AppEdit from "@/components/crud/app.edit";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "This is Dashboard Page",
};
const Dashboard = async () => {
    const data = await sendRequest<ITravel[]>({
        url: "http://localhost:9000/api/places?_expand=country",
        method: "GET",
        nextOption: {
            cache: "no-store",
        },
    });
    return (
        <main className="ml-[14%]">
            <section className="bg-white p-8 m-7 rounded-md">
                <div className="flex">
                    <div className="ml-auto">
                        <AppAdd></AppAdd>
                    </div>
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">ID</TableHead>
                            <TableHead className="text-center">Image</TableHead>
                            <TableHead className="text-center">Place</TableHead>
                            <TableHead className="text-center">
                                Country
                            </TableHead>
                            <TableHead className="text-center">
                                Ratting
                            </TableHead>
                            <TableHead className="text-center">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data: ITravel) => {
                            return (
                                <TableRow key={data.id}>
                                    <TableCell className="font-medium text-center">
                                        {data.id}
                                    </TableCell>
                                    <TableCell className="flex items-center justify-center">
                                        <div className="rounded-md overflow-hidden w-24 h-16">
                                            <Image
                                                src={data.image}
                                                alt={data.name}
                                                width={100}
                                                height={100}
                                                className="w-full h-full object-cover"
                                            ></Image>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {data.name}
                                    </TableCell>
                                    <TableCell className="text-center capitalize">
                                        {data.country.name}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {data.rating}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-4 justify-center">
                                            <AppEdit data={data}></AppEdit>
                                            <AppDelete data={data}></AppDelete>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </section>
        </main>
    );
};

export default Dashboard;
