import { ReactNode, useState } from "react";
import Sidebar from "../../components/Navigation/Sidebar";
import Navbar from "../../components/Navigation/Navbar";

// import { REST_BASE_URL } from "@/constant/constants";

import { useNavigate } from "react-router-dom";
import SubscriptionRequest from "@/components/SubscriptionRequest/SubscriptionRequest";
import TopUp from "@/components/WalletManagement/TopUp";

interface InterfaceLink {
    icon: ReactNode;
    text: string;
    url?: string;
    action?: () => void;
}

const Home = () => {
    // const [userID, setUserID] = useState<number>(-1);
    const [isAuth, setIsAuth] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

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
            url: "/",
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
            url: "/home",
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

    // TO DO :  Set admin dan auth dari rest

    if (isAuth) {
        if (!isAdmin) {
        // TODO: Pass user ID ke dalam WalletManagement
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
            <>
                <div className="flex">
                    <Sidebar sidebarLinks={adminLinks} />
                    <div className="w-full">
                        <Navbar navbarLinks={adminLinks} />
                        <main className="p-8">
                            <h1>Loading ...</h1>
                        </main>
                    </div>
                </div>
            </>
        );
    }
};

export default Home;