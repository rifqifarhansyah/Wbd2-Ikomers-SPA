import QRCode from "qrcode.react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import Logo from '../../assets/logo-color.svg'

const Transfer = () => {
    const [balance, setBalance] = useState(1000); // Initial balance
    const [transferAmount, setTransferAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
    const [iWaletNumber, setiWaletNumber] = useState("");
    const [transactionStatus, setTransactionStatus] = useState(""); // Transaksi berhasil atau gagal
    const [receipt, setReceipt] = useState(""); // Receipt transaksi
    const [senderName, setSenderName] = useState("John Doe"); // Nama pengirim
    const [senderIwaletID, setSenderIwaletID] = useState("12345678"); // ID iwalet pengirim
    const [receiverName, setReceiverName] = useState("Jane Smith"); // Nama penerima
    const [receiverIwaletID, setReceiverIwaletID] = useState("87654321"); // ID iwalet penerima
    const [transactionCode, setTransactionCode] = useState(""); // Hapus ini
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
      

    // Function to format input value with thousands separators
    const formatNumber = (value) => {
        return Intl.NumberFormat().format(value);
    };

    const handleTransfer = (amount) => {
        // Update the input value and the balance when the user tops up
        setTransferAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handleiWaletChange = (event) => {
        setiWaletNumber(event.target.value);
    };

    const handleTransferValid = () => {
        if (isTransferValid) {
          // Simulasikan transaksi dengan proses validasi sederhana
            if (Math.random() < 0.5) {
                showToastSuccess(); // Transaksi berhasil
                setTransactionStatus("Transaksi berhasil");
                setReceipt(`${transferAmount}`);
                setSenderIwaletID("12345678"); // ID iwalet pengirim
                setReceiverIwaletID("87654321"); // ID iwalet penerima
                setReceiverName(trimReceiverName(receiverName)); // Memangkas nama penerima
                setTransactionCode(generateTransactionCode());
                setReceiptVisible(true);
            } else {
                showToastFailure(); // Transaksi gagal
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
                        <button onClick={() => handleTransfer(500000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-8 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            500rb
                        </button>
                        <button onClick={() => handleTransfer(1000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            1jt
                        </button>
                        <button onClick={() => handleTransfer(2000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            2jt
                        </button>
                        <button onClick={() => handleTransfer(2500000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            2.5jt
                        </button>
                        <button onClick={() => handleTransfer(5000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            5jt
                        </button>
                        <button onClick={() => handleTransfer(10000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            10jt
                        </button>
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
                    <div className="text-black p-4 rounded mt-4 receipt">
                        <div className="flex h-screen w-full items-center justify-center">
                        <div className="w-80 rounded bg-gray-50 px-6 pt-8 shadow-2xl shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]">
                            <img src={Logo} alt="iWalet Logo" className="mx-auto w-16 py-2" />
                            <div className="flex flex-col justify-center items-center gap-2">
                                <h4 className="font-semibold">iWalet</h4>
                                <p className="text-xs">Jl. Ganesha No.10, Bandung, Jawa Barat</p>
                            </div>
                            <div className="flex flex-col gap-3 border-b py-6 text-xs">
                            <p className="flex justify-between">
                                <span className="text-gray-400">Transaction Code:</span>
                                <span>{transactionCode}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Amount:</span>
                                <span>{receipt}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Sender:</span>
                                <span>{senderName}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Sender ID:</span>
                                <span>{senderIwaletID}</span>
                            </p>
                            </div>
                            <div className="flex flex-col gap-3 pb-6 pt-2 text-xs">
                            <p className="flex justify-between">
                                <span className="text-gray-400">Receiver:</span>
                                <span>{receiverName}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-gray-400">Receiver ID:</span>
                                <span>{receiverIwaletID}</span>
                            </p>
                            <div className=" border-b border border-dashed"></div>
                            <br/>
                            <div className="flex items-center justify-center">
                                <QRCode value={transactionCode} />
                            </div>
                            <div className="py-4 justify-center items-center flex flex-col gap-2">
                                <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7ZM12.75 2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h1.5V2Z" fill="#000"></path><path d="M22 9.81v1.04a2.06 2.06 0 0 0-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4.026 4.026 0 0 0-3.63-2.25H2.7c-.24 0-.48.04-.7.12V9.81C2 6.17 4.17 4 7.81 4h3.44v3.19l-.72-.72a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02a.753.753 0 0 0 .51.2c.1 0 .19-.02.28-.06.09-.03.18-.09.25-.16l2-2c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.72.72V4h3.44C19.83 4 22 6.17 22 9.81Z" fill="#000"></path></svg> iWalet@shemale.com</p>
                                <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="#000" d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"></path></svg> +62666XXXXX666</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </>
    );
};

export default Transfer;
