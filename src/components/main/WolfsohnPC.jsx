import React from "react";
import "./wolfsohn.scss"
import { Link } from "react-router-dom";
import { List } from "../list/List";
import { useState } from 'react'

export const WolfsohnPC = ({userChange}) => {

    return (
        <main className=" h-screen w-screen flex justify-center items-center">
            <div className=" rounded-xl flex flex-col gap-y-4 justify-center items-center h-screen w-screen lg:h-[650px] lg:w-[1200px] bg-black shadow-lg shadow-gray-600 bg-opacity-65">
                <h1 className=" text-stone-50 text-3xl sm:text-4xl font-semibold w-full text-center">¡Bienvenido a Wolfsohn!</h1>
                <p className=" text-stone-50">Para realizar una operación, a continuación ingresa tus datos</p>
                <div className=" flex flex-col justify-center items-center gap-y-7">
                    <input className=" p-3 w-96 rounded-md" type="email" placeholder="Email*"/>
                    <input className=" p-3 w-96 rounded-md" type="password" placeholder="Contraseña*" />
                    <button onClick={()=> userChange()} className=" text-stone-50 px-6 py-3 border border-white rounded-md font-semibold hover:bg-slate-600 hover:text-orange-200 ease-in duration-150"><Link to="/List" >Iniciar Sesión</Link></button>
                    <p className=" text-stone-50 text-center">¿Aun no tienes una cuenta? <a className=" text-orange-600 hover:text-orange-200 ease-in duration-150" href="/">Registrate</a></p>
                </div>
            </div>
        </main>
    )
}