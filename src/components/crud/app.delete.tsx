"use client";
import { sendRequest } from "@/app/utils/api";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AppDelete = ({
    data,
    fetchPlaces,
}: {
    data: ITravel;
    fetchPlaces: () => void;
}) => {
    const handleDelete = async () => {
        const res = await sendRequest<ITravel[]>({
            url: `https://travel-web-json-server.onrender.com/api/places/${data.id}`,
            method: "DELETE",
        });
        if (res) {
            fetchPlaces();
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger>Delete</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete post {data?.id}?
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-[#6d71f9] text-white"
                        onClick={handleDelete}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AppDelete;
