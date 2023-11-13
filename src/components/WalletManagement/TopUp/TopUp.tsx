import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet } from 'react-icons/fa6';
import TopUpSingle from "./TopUpSingle";
import ButtonNumber from "../ButtonNumber";
import BCA from '../../../assets/bca.png';
import Mandiri from '../../../assets/mandiri.png';
import BRI from '../../../assets/briva.png';
import BNI from '../../../assets/bni.png';
import BSI from '../../../assets/bsi.png';

const TopUp = () => {
    const [balance, setBalance] = useState(1000);
    const [topUpAmount, setTopUpAmount] = useState(0);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');

    const formatNumber = (value) => {
        return Intl.NumberFormat().format(value);
    };

    const handleTopUp = (amount) => {
        setTopUpAmount(amount);
        setBalance((prevBalance) => prevBalance + amount);
    };

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleBankAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBankAccountNumber(event.target.value);
    };


    const handleTopUpValid = () => {
        if (isTopUpValid) {
            if (Math.random() < 0.5) {
                showToastSuccess();
            } else {
                showToastFailure();
            }
        }
    };

    const showToastSuccess = () => {
        toast.success("Transaksi berhasil!");
    };
        const showToastFailure = () => {
        toast.error("Transaksi gagal. Silakan coba lagi.");
    };

    const isTopUpValid = topUpAmount > 0 && bankAccountNumber.length === 10;

    return (
        <>
            <ToastContainer />
            <div>
                <div className="text-sm mx-auto my-auto font-semibold border-2 border-darkgreen rounded-lg flex items-center justify-start p-5 max-w-screen-2xl">
                    <FaWallet className="mr-2" /> Current Balance:&nbsp;<span className="font-normal">350.000</span>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <h1 className="text-4xl font-semibold mb-2">Top-Up Amount:</h1>

                    <div className="mb-4">
                        <label>
                            <input
                                type="text"
                                value={formatNumber(topUpAmount)} 
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
                        <ButtonNumber amount={500000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={1000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={2000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={2500000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={5000000} onClickFunction={handleTopUp} />
                        <ButtonNumber amount={10000000} onClickFunction={handleTopUp} />
                    </div>
                </div>
                <div className=" flex wrap md:flex-col flex-col my-0 mx-auto p-5 max-w-screen-2xl">
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">Payment Method:</h1>
                        <div className="space-y-2">
                        <TopUpSingle
                            id="bca"
                            logoSrc={BCA}
                            label="BCA Virtual Account"
                            paymentMethod="bca"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="mandiri"
                            logoSrc={Mandiri}
                            label="Mandiri Virtual Account"
                            paymentMethod="mandiri"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bri"
                            logoSrc={BRI}
                            label="BRIVA"
                            paymentMethod="bri"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bni"
                            logoSrc={BNI}
                            label="BNI Virtual Account"
                            paymentMethod="bni"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        <TopUpSingle
                            id="bsi"
                            logoSrc={BSI}
                            label="BSI Mobile"
                            paymentMethod="bsi"
                            selectedPaymentMethod={selectedPaymentMethod}
                            handlePaymentMethodChange={handlePaymentMethodChange}
                            bankAccountNumber={bankAccountNumber}
                            handleBankAccountChange={handleBankAccountChange}
                        />
                        </div>
                    </div>
                </div>
                {isTopUpValid && (
                    <div onClick={handleTopUpValid} className="cursor-pointer hover:bg-lightgreen text-sm mx-auto my-auto font-bold border-2 border-white text-white text-center items-center bg-darkgreen rounded-lg p-5 max-w-screen-sm">
                        <button>TOP UP</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default TopUp;
