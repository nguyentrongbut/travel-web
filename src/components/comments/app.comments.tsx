import Image from "next/image";

const AppComments = () => {
    return (
        <div className="bg-white p-8 m-7 rounded-md">
            <div className="w-full flex gap-4 items-center">
                <div className="sprite"></div>
                <input type="text" placeholder="Comment here ...." className="outline-none border-b border-[#6d71f9] w-full p-1"/>
            </div>
        </div>
    );
};

export default AppComments;
