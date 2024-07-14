'use client'
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
import { useRouter } from "next/navigation";

const AppDelete = (props:any) => {
    const router = useRouter()
    const {data} = props
    const handleDelete = async() => {
        const res = await sendRequest<ITravel[]>({
            url: `http://localhost:9000/api/places/${data.id}`,
            method: "DELETE",
        });
        if(res) {
            router.refresh();
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger>Delete</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure you want to delete post {data.id}?
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-[#6d71f9] text-white" onClick={handleDelete}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AppDelete;
