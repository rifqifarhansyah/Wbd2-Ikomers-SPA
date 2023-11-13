import { ReactNode, useState } from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../../components/Navigation/Sidebar";
import Navbar from "../../components/Navigation/Navbar";

// import { REST_BASE_URL } from "@/constant/constants";

import { useNavigate } from "react-router-dom";
import SubscriptionRequest from "@/components/SubscriptionRequest/SubscriptionRequest";
// import Transfer from "@/components/WalletManagement/Transfer";
import TopUp from "@/components/WalletManagement/TopUp/TopUp";
import Logo from "../../assets/logo-text-color.png";

interface InterfaceLink {
    icon: ReactNode;
    text: string;
    url?: string;
    action?: () => void;
}

const Home = () => {
    // const [userID, setUserID] = useState<number>(-1);
    const [isAuth, setIsAuth] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    const navigate = useNavigate();

    const userLinks: InterfaceLink[] = [
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                    fill="#ffffff"
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
                </>
            ),
            text: "Top-Up",
            url: "/topup",
        },
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path 
                    fill="#ffffff"
                    d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
                </>
            ),
            text: "Transfer",
            url: "/transfer",
        },
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path 
                    fill="#ffffff"
                    d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg>
                </>
            ),
            text: "History",
            url: "/history",
        },
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                    fill="#ffffff"
                    d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                    />
                </svg>
                </>
            ),
            text: "Log out",
            action: () => {
                localStorage.removeItem("token");
                navigate("/login");
            },
        },
    ];

    
    const adminLinks: InterfaceLink[] = [
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path 
                    fill="#ffffff"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    />
                </svg>
                </>
            ),
            text: "Subscription Request",
            url: "/sub",
        },
        {
            icon: (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                    fill="#ffffff"
                    d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                    />
                </svg>
                </>
            ),
            text: "Log out",
            action: () => {
                localStorage.removeItem("token");
                navigate("/login");
            },
        },
    ];

    

    if (isAuth) {
        if (!isAdmin) {
        
        return (
            <>
                <div className="flex">
                    <Sidebar sidebarLinks={userLinks} />
                    <div className="w-full">
                        <Navbar navbarLinks={userLinks} />
                        <main className="p-8">
                            <TopUp/>
                        </main>
                    </div>
                </div>
            </>
            );
        } else {
            return (
            <>
                <div className="flex">
                    <Sidebar sidebarLinks={adminLinks} />
                    <div className="w-full">
                        <Navbar navbarLinks={adminLinks} />
                        <main className="p-8">
                            <SubscriptionRequest />
                        </main>
                    </div>
                </div>
            </>
            );
        }
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <img
                    src={Logo}
                    alt="App Logo"
                    className="max-w-lg"
                />

                <p className="text-lg text-black mb-1">
                    You don't have access to this page.
                </p>

                <Link to="/login" className="text-blue-500 hover:text-darkgreen">
                    Go back to login
                </Link>
            </div>
        );
    }
};

export default Home;