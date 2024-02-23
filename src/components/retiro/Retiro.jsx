import React from "react";

export const Retiro = () => {

    const listaPC = [
        {
            id: 1,
            name: "ASUS 25",
            state: "Disponible"
        },
        {
            id: 2,
            name: "ASUS 26",
            state: "Mantenimiento"
        },
        {
            id: 3,
            name: "ASUS 27",
            state: "Disponible"
        },
        {
            id: 4,
            name: "ASUS 28",
            state: "Retirado"
        }
        ,
        {
            id: 5,
            name: "ASUS 29",
            state: "Retirado"
        }
        ,
        {
            id: 6,
            name: "ASUS 30",
            state: "Retirado"
        }
        ,
        {
            id: 7,
            name: "ASUS 31",
            state: "Retirado"
        }
        ,
        {
            id: 8,
            name: "ASUS 32",
            state: "Retirado"
        }
        ,
        {
            id: 9,
            name: "ASUS 33",
            state: "Retirado"
        }
        ,
        {
            id: 10,
            name: "ASUS 34",
            state: "Retirado"
        }
        ,
        {
            id: 11,
            name: "ASUS 35",
            state: "Retirado"
        },
        {
            id: 12,
            name: "ASUS 36",
            state: "Retirado"
        }
        ,
        {
            id: 13,
            name: "ASUS 37",
            state: "Retirado"
        }
        ,
        {
            id: 14,
            name: "ASUS 38",
            state: "Retirado"
        }
    ]

    return (
        <main className=" h-screen w-screen flex justify-center items-center">
            <div className=" rounded-xl flex flex-col gap-y-12 justify-center items-center h-screen w-screen lg:h-[650px] lg:w-[1200px] bg-black shadow-lg shadow-gray-600 bg-opacity-65">
                <h1 className=" text-stone-50 text-3xl sm:text-4xl font-semibold w-full text-center">Elige una opción</h1>
                <div className=" bg-black bg-opacity-55 rounded-md w-[800px] h-[350px] px-3 py-6 overflow-auto scrollbar-hide flex flex-col gap-y-5">
                    {listaPC.map((pc) => (
                        <>
                            <div className=" flex justify-between items-center gap-x-8" key={pc.id}>
                                <p className=" w-full text-center text-stone-50">{pc.id}</p>
                                <p className=" w-full text-center text-stone-50">{pc.name}</p>
                                <p className=" w-full text-center text-slate-50">{pc.state}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className=" flex justify-center items-center gap-x-10 h-auto w-[800px]">
                    <button className=" text-stone-50 px-6 py-3 border border-white rounded-md font-semibold hover:bg-slate-600 hover:text-orange-200 ease-in duration-150">Volver</button>
                    <button className=" text-stone-50 px-6 py-3 border border-white rounded-md font-semibold hover:bg-slate-600 hover:text-orange-200 ease-in duration-150">Confirmar Retiro</button>
                </div>
            </div>
        </main>
    )
}