import AppSignUp from "@/components/auth/app.sign.up";
import Link from "next/link";

const SignUpPage = () => {
    
    return (
        // <div className="h-screen w-screen flex justify-center items-center">
        //     <div className="w-[430px] text-center rounded-[12px] bg-white shadow p-[30px]">
        //         <h2 className="font-bold text-[28px] mb-[30px]">Sign up</h2>
        //         <form action="">
        //             <button className="w-full h-[60px] flex items-center justify-center bg-[#6d71f9] rounded-full text-lg text-white">
        //                 Sign up
        //             </button>
        //         </form>
        //         <p className="text-[18px] mt-5">
        //             Have a account?{" "}
        //             <Link
        //                 href="/auth/signin"
        //                 className="font-medium hover:text-[#6d71f9]"
        //             >
        //                 Sign In
        //             </Link>
        //         </p>
        //     </div>
        // <>
        <AppSignUp></AppSignUp>
    );
};

export default SignUpPage;
