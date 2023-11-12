import { useState } from "react";
// import { REST_BASE_URL, SUBS_PAGE_SIZE } from "../../constants/constants";
// import SingleSubscription from "./SingleSubscription";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// interface InterfaceSubscription {
//     subscriberID: number;
//     subscriberName: string;
// }

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
                <header className="mt-2">
                    <h1>Subscription Request</h1>
                    <p className="mt-2">Approve or reject user subscription request!</p>
                </header>
    
            </div>
        </>
    );
};

export default SubscriptionRequest;