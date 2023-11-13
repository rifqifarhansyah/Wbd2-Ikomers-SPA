import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWallet, FaPlus, FaDollarSign } from 'react-icons/fa6';

const History = () => {
  return (
        <>
        <ToastContainer />
            <div>
                {/* Dark green banner */}
                <div className="relative w-full md:h-40 h-52  bg-darkgreenhistory flex flex-row">
                    <div className="p-4">
                        <p className="text-white text-xl font-bold">Always use <i>iWalet</i> for all of your e-transactions~</p>
                        <p className="text-white text-xs">FREE REGISTRATION and get all of our services in just one click~</p>
                        <button className="mt-6 py-1 px-4 bg-none border border-white text-white rounded-3xl font-semibold text-sm">Try <i>iWalet</i> Transfer</button>
                    </div>
                    {/* Current balance at the bottom center of the dark green banner */}
                    <div className="absolute md:w-1/2 w-4/5 -bottom-12 left-1/2 transform -translate-x-1/2 bg-white text-black p-4 text-center shadow-lg rounded-lg">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between">
                                <div className="flex items-left flex-col">
                                    <div className="flex flex-row items-center">
                                        <span className="text-darkgreen mr-2"><FaWallet  /></span>
                                        <span className="text-greytext text-sm font-semibold">iWalet</span>
                                    </div>
                                    <span className="text-black font-bold text-2xl">Rp14.042</span>
                                </div>
                                <div className="ml-4 flex items-center"> {/* Add margin-left for spacing */}
                                    <button className="py-1 px-4 flex items-center border border-darkgreen bg-verylightgreen text-white rounded-3xl">
                                        <span className="text-darkgreen mr-2"><FaPlus /></span>
                                        <span className="text-darkgreen">Top-Up</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative top-16 mb-4">
                    <div className="flex flex-col bg-white text-black my-4 mx-2 md:mx-4 p-4 border border-lightgreen shadow-lg rounded-lg">
                        <div className="flex flex-row items-center">
                            <span className="text-darkgreen mr-1 text-6xl"><FaDollarSign  /></span>
                            <div className="flex items-left flex-col  justify-between w-full">
                                <span className="text-black text-md font-semibold">Transfer ke</span>
                                <span className="text-black font-semibold text-xl">Rifqi Farhansyah</span>
                                <span className="text-darkgreen font-normal text-xl">Berhasil</span>
                            </div>
                            <div className="flex items-end flex-col  justify-between w-full">
                                <span className="text-black font-bold text-xl">Rp12.500</span>
                                <div className="flex flex-row items-center">
                                    <span className="text-darkgreen mr-4 text-md"><FaWallet  /></span>
                                    <span className="text-black text-md font-semibold">iWallet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white text-black my-4 mx-2 md:mx-4 p-4 border border-red shadow-lg rounded-lg">
                        <div className="flex flex-row items-center">
                            <span className="text-red mr-1 text-6xl"><FaDollarSign  /></span>
                            <div className="flex items-left flex-col  justify-between w-full">
                                <span className="text-greytext text-md font-semibold">Top-Up</span>
                                <span className="text-greytext font-semibold text-xl">Michael Utama</span>
                                <span className="text-red font-normal text-xl">Gagal</span>
                            </div>
                            <div className="flex items-end flex-col  justify-between w-full">
                                <span className="text-greytext font-bold text-xl line-through">Rp12.500</span>
                                <div className="flex flex-row items-center">
                                    <span className="text-red mr-4 text-md"><FaWallet  /></span>
                                    <span className="text-greytext text-md font-semibold">iWallet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;
