import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import Logo from '../../../assets/logo-color.svg'
import ButtonNumber from "../ButtonNumber";
import ReceiptSingle from "./ReceiptSingle";

const Transfer = () => {
    const [balance, setBalance] = useState(1000);
    const [transferAmount, setTransferAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
    const [iWaletNumber, setiWaletNumber] = useState("");
    const [transactionStatus, setTransactionStatus] = useState(""); 
    const [receipt, setReceipt] = useState("");
    const [senderName, setSenderName] = useState("John Doe");
    const [senderIwaletID, setSenderIwaletID] = useState("12345678");
    const [receiverName, setReceiverName] = useState("Jane Smith");
    const [receiverIwaletID, setReceiverIwaletID] = useState("87654321");
    const [transactionCode, setTransactionCode] = useState("");
    const [receiptVisible, setReceiptVisible] = useState(false);

    const generateTransactionCode = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 8; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          code += characters.charAt(randomIndex);
        }
        return code;
    };

    const trimReceiverName = (name) => {
        const firstChar = name[0];
        const lastChar = name[name.length - 1];
        const stars = "*".repeat(name.length - 2);
        return `${firstChar}${stars}${lastChar}`;
    };

    const showToastSuccess = () => {
        toast.success("Transaksi berhasil!");
    };

    const showToastFailure = () => {
        toast.error("Transaksi gagal. Silakan coba lagi.");
    };

    const formatNumber = (value) => {
        return Intl.NumberFormat().format(value);
    };

    const handleTransfer = (amount) => {
        setTransferAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handleiWaletChange = (event) => {
        setiWaletNumber(event.target.value);
    };

    const handleTransferValid = () => {
        if (isTransferValid) {
            if (Math.random() < 0.5) {
                showToastSuccess();
                setTransactionStatus("Transaksi berhasil");
                setReceipt(`${transferAmount}`);
                setSenderIwaletID("12345678"); 
                setReceiverIwaletID("87654321");
                setReceiverName(trimReceiverName(receiverName));
                setTransactionCode(generateTransactionCode());
                setReceiptVisible(true);
            } else {
                showToastFailure();
                setReceiptVisible(false);
            }
        }
    };

    const isTransferValid = transferAmount > 0 && iWaletNumber.length === 8;

    return (
        <>
            <ToastContainer />
            <div>
                <div className="text-sm mx-auto my-auto font-semibold border-2 border-darkgreen rounded-lg flex items-center justify-start p-5 max-w-screen-2xl">
                    <FaWallet className="mr-2" /> Current Balance:&nbsp;<span className="font-normal">350.000</span>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <h1 className="text-4xl font-semibold mb-2">Transfer Amount:</h1>

                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                value={formatNumber(transferAmount)} // Format the value with thousands separators
                                onChange={(e) => {
                                    const inputValue = e.target.value.replace(/,/g, '');
                                    const newAmount = inputValue === "" ? 0 : parseInt(inputValue, 10);
                                    setTransferAmount(newAmount);
                                }}
                                className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                placeholder="Enter amount"
                            />
                        </label>
                    </div>

                    <div className="md:space-y-0 space-y-2">
                        <ButtonNumber amount={500000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={1000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={2000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={2500000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={5000000} onClickFunction={handleTransfer} />
                        <ButtonNumber amount={10000000} onClickFunction={handleTransfer} />
                    </div>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Recipient Number:</h1>
                        <div className="space-y-2">
                            <input
                                type="number"
                                placeholder="Enter Recepient iWalet Number"
                                value={iWaletNumber}
                                onChange={handleiWaletChange}
                                className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                            />
                        </div>
                    </div>
                </div>
                {isTransferValid && (
                    <div onClick={handleTransferValid} className="cursor-pointer hover:bg-lightgreen text-sm mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm">
                        <button >TRANSFER</button>
                    </div>
                )}
                <div className="text-center">
                {receiptVisible && (
                    //  RECEIPT
                    <ReceiptSingle
                        LogoSrc={Logo}
                        transactionCode={transactionCode}
                        receipt={receipt}
                        senderName={senderName}
                        senderIwaletID={senderIwaletID}
                        receiverName={receiverName}
                        receiverIwaletID={receiverIwaletID}
                    />
                )}
                </div>
            </div>
        </>
    );
};

export default Transfer;
