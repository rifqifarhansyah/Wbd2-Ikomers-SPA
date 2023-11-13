import { useState } from "react";
// import { REST_BASE_URL, SUBS_PAGE_SIZE } from "../../constants/constants";
import SingleSubscription from "./SingleSubscription";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface InterfaceSubscription {
    subscriberID: number;
    subscriberName: string;
}

const SubscriptionRequest = () => {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    // const [subs, setSubs] = useState<InterfaceSubscription[]>([]);
    // const [subs, setSubs] = useState<number>(5);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [pageCount, setPageCount] = useState<number>(1);

    {/* TO DO: Add await function */}
    // const nextPage = async () => {
    //     if (currentPage < pageCount) {
    //         setCurrentPage(oldPage => oldPage + 1);
    //     }
    // }

    // const prevPage = async () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(oldPage => oldPage - 1);
    //     }
    // }
    // setSubs(0);

    return (
        <>
            <ToastContainer />
            <div className="pb-44">
                <header className="text-white rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkgreen via-lightgreen to-verylightgreen p-4">
                    <h1 className="font-bold text-4xl">Subscription Request ✨</h1>
                    <div className=" px-2">
                        <i>Accept or reject user subscription request~</i>
                    </div>
                </header>
                <div className="sus-table mt-0.5">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b-4 border-black text-left py-4 px-4 m-0">#</th>
                                <th className="border-b-4 border-black text-left py-4 px-4 m-0">Subscriber ID</th>
                                <th className="border-b-4 border-black text-left py-4 px-4 m-0">Subscriber Name</th>
                                <th className="border-b-4 border-black text-left py-4 px-4 m-0">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SingleSubscription
                                index={1}
                                subscriberID={3}
                                subscriberName={"Rifqi"}
                                />
                            <SingleSubscription
                                index={2}
                                subscriberID={4}
                                subscriberName={"Michael"}
                                />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SubscriptionRequest;