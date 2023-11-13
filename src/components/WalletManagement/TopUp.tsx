import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import BCA from '../../assets/bca.png';
import Mandiri from '../../assets/mandiri.png';
import BRI from '../../assets/briva.png';
import BNI from '../../assets/bni.png';
import BSI from '../../assets/bsi.png';

const TopUp = () => {
    const [balance, setBalance] = useState(1000); // Initial balance
    const [topUpAmount, setTopUpAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit-card");
    const [bankAccountNumber, setBankAccountNumber] = useState("");

    // Function to format input value with thousands separators
    const formatNumber = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const handleTopUp = (amount) => {
        // Update the input value and the balance when the user tops up
        setTopUpAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleBankAccountChange = (event) => {
        setBankAccountNumber(event.target.value);
    };

    const isTopUpValid = topUpAmount > 0 && bankAccountNumber.length === 12;

    return (
        <>
            <ToastContainer />
            <div>
                <div className="text-sm mx-auto my-auto font-semibold border-2 border-darkgreen rounded-lg flex items-center justify-start p-5 max-w-screen-2xl">
                    <FaWallet className="mr-2" /> Saldo saat ini:&nbsp;<span className="font-normal">350.000</span>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <h1 className="text-4xl font-semibold mb-2">Top-Up Amount?</h1>

                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                value={formatNumber(topUpAmount)} // Format the value with thousands separators
                                onChange={(e) => {
                                    const inputValue = e.target.value.replace(/,/g, '');
                                    const newAmount = inputValue === "" ? 0 : parseInt(inputValue, 10);
                                    setTopUpAmount(newAmount);
                                }}
                                className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                placeholder="Enter amount"
                            />
                        </label>
                    </div>

                    <div className="md:space-y-0 space-y-2">
                        <button onClick={() => handleTopUp(500000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-8 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            500rb
                        </button>
                        <button onClick={() => handleTopUp(1000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            1jt
                        </button>
                        <button onClick={() => handleTopUp(2000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            2jt
                        </button>
                        <button onClick={() => handleTopUp(2500000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            2.5jt
                        </button>
                        <button onClick={() => handleTopUp(5000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            5jt
                        </button>
                        <button onClick={() => handleTopUp(10000000)} className="bg-white border-2 border-borderoutline rounded-xl text-black px-4 py-1 rounded mr-2 focus:border-darkgreen focus:bg-lightgreen focus:bg-opacity-60 ">
                            10jt
                        </button>
                    </div>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Payment Method:</h1>
                        <div className="space-y-2">
                            <div className="flex flex-col">
                                <div className="flex flex-row">    
                                    <input
                                        type="radio"
                                        id="bca"
                                        name="paymentMethod"
                                        value="bca"
                                        checked={selectedPaymentMethod === "bca"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <img src={BCA} alt="BCA Logo" className="w-16 h-auto m-2 mr-4" />
                                    <label className="font-semibold text-xl" htmlFor="bca"> BCA Virtual Account</label>
                                </div>
                                {selectedPaymentMethod === "bca" && (
                                    <input
                                        type="number"
                                        placeholder="Enter your BCA Account Number"
                                        value={bankAccountNumber}
                                        onChange={handleBankAccountChange}
                                        className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">    
                                    <input
                                        type="radio"
                                        id="mandiri"
                                        name="paymentMethod"
                                        value="mandiri"
                                        checked={selectedPaymentMethod === "mandiri"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <img src={Mandiri} alt="Mandiri Logo" className="w-16 h-auto m-2 mr-4" />
                                    <label className="font-semibold text-xl" htmlFor="mandiri"> Mandiri Virtual Account</label>
                                </div>
                                {selectedPaymentMethod === "mandiri" && (
                                    <input
                                        type="number"
                                        placeholder="Enter your Mandiri Account Number"
                                        value={bankAccountNumber}
                                        onChange={handleBankAccountChange}
                                        className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">    
                                    <input
                                        type="radio"
                                        id="bri"
                                        name="paymentMethod"
                                        value="bri"
                                        checked={selectedPaymentMethod === "bri"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <img src={BRI} alt="BRI Logo" className="w-16 h-auto m-2 mr-4" />
                                    <label className="font-semibold text-xl" htmlFor="bri"> BRIVA</label>
                                </div>
                                {selectedPaymentMethod === "bri" && (
                                    <input
                                        type="number"
                                        placeholder="Enter your BRI Account"
                                        value={bankAccountNumber}
                                        onChange={handleBankAccountChange}
                                        className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">    
                                    <input
                                        type="radio"
                                        id="bni"
                                        name="paymentMethod"
                                        value="bni"
                                        checked={selectedPaymentMethod === "bni"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <img src={BNI} alt="BNI Logo" className="w-16 h-auto m-2 mr-4" />
                                    <label className="font-semibold text-xl" htmlFor="bni"> BNI Virtual Account</label>
                                </div>
                                {selectedPaymentMethod === "bni" && (
                                    <input
                                        type="number"
                                        placeholder="Enter your BNI Account"
                                        value={bankAccountNumber}
                                        onChange={handleBankAccountChange}
                                        className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row">    
                                    <input
                                        type="radio"
                                        id="bsi"
                                        name="paymentMethod"
                                        value="bsi"
                                        checked={selectedPaymentMethod === "bsi"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <img src={BSI} alt="BSI Logo" className="w-16 h-auto m-2 mr-4" />
                                    <label className="font-semibold text-xl" htmlFor="bsi"> BSI Virtual Account</label>
                                </div>
                                {selectedPaymentMethod === "bsi" && (
                                    <input
                                        type="number"
                                        placeholder="Enter your BSI Account"
                                        value={bankAccountNumber}
                                        onChange={handleBankAccountChange}
                                        className="w-full p-2 border rounded outline-none focus:border-none focus:shadow-[0px_4px_16px_rgba(29,185,84,0.1),_0px_8px_24px_rgba(29,185,84,0.1),_0px_16px_56px_rgba(29,185,84,0.1)]"
                                    />
                                )}
                            </div>
                            
                        </div>
                    </div>
                </div>
                {isTopUpValid && (
                    <div className="hover:bg-lightgreen text-sm mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm">
                        <button>TOP UP</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default TopUp;
