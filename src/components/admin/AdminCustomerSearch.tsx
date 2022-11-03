import React, {useState} from 'react'

export default function AdminCustomerSearch() {
    return (
        <div className="flex justify-center py-4 bg-violet-800">
<div className="bg-gray-200 ">
    <div className="flex items-center justify-center  bg-violet-800">
        <div className="relative rounded-lg bg-violet-800">
            <div className="absolute top-4 left-3"> <i className="z-20 text-gray-400 hover:text-gray-500"></i> </div> 
            <input type="text" className="z-0 h-12 pl-10 pr-20 bg-violet-100 w-96 rounded-xl focus:shadow focus:outline-none" placeholder="Buscar cliente..."></input>

            <div className="absolute top-2 right-2"> <button className="w-20 h-8 text-white rounded-lg bg-violet-500 hover:bg-violet-300 hover:text-violet-900">Buscar</button> 
            </div>
        </div>
    </div>
</div>        </div>
    )
}
