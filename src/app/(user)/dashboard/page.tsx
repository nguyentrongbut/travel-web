"use client";
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
import { useEffect, useState, useCallback } from "react";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Dashboard";
    }, []);
    const [places, setPlaces] = useState<ITravel[]>([]);

    const fetchPlaces = useCallback(async () => {
        const data = await sendRequest<ITravel[]>({
            url: "http://localhost:9000/api/places?_expand=country",
            method: "GET",
        });
        setPlaces(data);
    }, []);

    useEffect(() => {
        fetchPlaces();
    }, [fetchPlaces]);

    return (
        <main className="ml-[14%]">
            <section className="bg-white p-8 m-7 rounded-md">
                <div className="flex">
                    <div className="ml-auto">
                        <AppAdd fetchPlaces={fetchPlaces}></AppAdd>
                    </div>
                </div>
                <Table>
                    <TableCaption>A list of posts</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">ID</TableHead>
                            <TableHead className="text-center">Image</TableHead>
                            <TableHead className="text-center">Place</TableHead>
                            <TableHead className="text-center">
                                Description
                            </TableHead>
                            <TableHead className="text-center">
                                Country
                            </TableHead>
                            <TableHead className="text-center">
                                Rating
                            </TableHead>
                            <TableHead className="text-center">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {places.map((place: ITravel) => (
                            <TableRow key={place.id}>
                                <TableCell className="font-medium text-center">
                                    <p className="line-clamp-1">{place.id}</p>
                                </TableCell>
                                <TableCell className="flex items-center justify-center">
                                    <div className="rounded-md overflow-hidden w-24 h-16">
                                        <Image
                                            src={place.image}
                                            alt={place.name}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="text-center">
                                    <h2 className="line-clamp-1">{place.name}</h2>
                                </TableCell>
                                <TableCell className="text-left max-w-[200px]">
                                    <p className="line-clamp-3">{place.description}</p>
                                </TableCell>
                                <TableCell className="text-center capitalize">
                                    <h3 className="line-clamp-1">{place.country.name}</h3>
                                </TableCell>
                                <TableCell className="text-center">
                                    {place.rating}
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-4 justify-center">
                                        <AppEdit
                                            data={place}
                                            fetchPlaces={fetchPlaces}
                                        ></AppEdit>
                                        <AppDelete
                                            data={place}
                                            fetchPlaces={fetchPlaces}
                                        ></AppDelete>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </main>
    );
};

export default Dashboard;
