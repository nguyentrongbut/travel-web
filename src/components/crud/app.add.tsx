"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { sendRequest } from "@/app/utils/api";
import { useEffect, useState } from "react";

const formSchema = z.object({
    place: z.string().min(2).max(50),
    image: z.string().max(200).optional(),
    description: z.string().min(2).max(1000),
    country: z.string().min(2).max(50),
});

const AppAdd = ({ fetchPlaces }: { fetchPlaces: () => void }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await sendRequest<Country[]>({
                url: `http://localhost:9000/api/countries`,
                method: "GET",
            });
            setCountries(data);
        };

        fetchCountries();
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            place: "",
            image: "",
            description: "",
            country: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const selectedCountry = countries.find(
            (country) => country.name === values.country
        );

        const res = await sendRequest<ITravel>({
            url: `http://localhost:9000/api/places/`,
            method: "POST",
            body: {
                name: values.place,
                description: values.description,
                image: values.image,
                countryId: selectedCountry?.id,
            },
        });
        if (res) {
            fetchPlaces();
            document.getElementById("closeDialog")?.click();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Post</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Image URL"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="place"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Place</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Place"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a verified country to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {countries.map(
                                                (country: Country) => (
                                                    <SelectItem
                                                        value={country.name}
                                                        key={country.id}
                                                    >
                                                        {country.name}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="bg-[#6d71f9] text-white"
                            >
                                Add Post
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AppAdd;
