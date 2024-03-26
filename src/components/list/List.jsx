import React from "react";
import "./list.scss";
import { SiLitiengine } from "react-icons/si";
import { CiInboxIn } from "react-icons/ci";
import { CiInboxOut } from "react-icons/ci";
import { Link } from "react-router-dom";

export const List = () => {
    return (
        <main className=" h-screen w-screen flex justify-center items-center">
            <div className=" rounded-xl flex flex-col gap-y-24 justify-center items-center h-screen w-screen lg:h-[650px] lg:w-[1200px] bg-black shadow-lg shadow-gray-600 bg-opacity-65">
            <h1 className=" text-stone-50 text-3xl sm:text-4xl font-semibold w-full text-center">Elige una opción</h1>
            <div className=" flex justify-around w-[800px]">
                <div className=" flex flex-col justify-center items-center gap-y-4">
                    <button className=" flex flex-col justify-center items-center gap-y-6 text-stone-50 hover:text-orange-200 ease-in duration-150">
                       <CiInboxOut className=" w-16 h-16" />
                       <Link to="/Retiro" className=" text-3xl font-light">Retiro</Link>
                    </button>
                </div>
                <div className=" flex flex-col justify-center items-center gap-y-4">
                    <button className=" flex flex-col justify-center items-center gap-y-6 text-stone-50 hover:text-orange-200 ease-in duration-150">
                       <CiInboxIn className=" w-16 h-16" />
                       <span className=" text-3xl font-light">Devolución</span>
                    </button>
                </div>
            </div>
            <p className=" text-stone-50 font-semibold">Elige la operación que deseas realizar</p>
            </div>
        </main>
    )
}