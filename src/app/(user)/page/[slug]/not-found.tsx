import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex">
            <Image src="../../../../../public/notfound.png" width={500} height={500} alt="not-found"></Image>
            <div>
                <p className="text-[62px] font-medium text-[##676A6C]">Oopps!</p>
                <h2 className="text-[62px] font-semibold">Page not Found</h2>
            </div>
        </div>
    )
}