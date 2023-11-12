// import { REST_BASE_URL, SUBS_PAGE_SIZE } from "../../constants/constants";

// import { toast } from "react-toastify";

interface InterfaceSubscription {
    index: number;
    subscriberID: number;
    subscriberName: string;
}

// TO DO: Add accept and reject function

const SingleSubscription =  ({ index, subscriberID, subscriberName}: InterfaceSubscription) =>{
    return (
        <tr>
            <td className="text-left py-4 px-4 m-0">
                <p>{index}</p>
            </td>
            <td className="text-left py-4 px-4 m-0">
                {subscriberID}
            </td>
            <td className="text-left py-4 px-4 m-0">
                {subscriberName}
            </td>
            <td  className="text-left py-4 px-4 m-0">
                <div>
                    <button className="py-2 px-2 bg-darkgreen hover:bg-lightgreen text-white font-bold border rounded-sm mr-3">Accept</button>
                    <button  className="py-2 px-2 bg-red hover:bg-lightred text-white font-bold border rounded-sm mr-3">Reject</button>
                </div>
            </td>
        </tr>
    )
};

export default SingleSubscription;