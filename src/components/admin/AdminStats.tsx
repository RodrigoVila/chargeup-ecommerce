import React from 'react'
import { useState } from 'react'

function AdminStats() {
    return (
    <div className='mt-5 mb-5 max-w-xl mx-auto px-2 sm:px-6 lg:px-8'> 
          <div className="items-left">
              <h1 className='uppercase tracking-wide font-bold text-violet-900 text-center mx-1 my-2'>Estadisticas de los últimos 30 dias</h1>
            <div className="items-center h-full w-full ">
                <div className='h-full align-middle rounded-lg bg-white min-w-max min-h-max mb-1 sm:colummns-1 sm:my-2 md:columns-3'>

                    <div className='h-full w-full rounded-md bg-gray-50 align-middle text-center text-zinc-100 bt-1 border-gray-300 pb-4 shadow-lg shadow-violet-900/20' >
                        <div className='w-full border-b-2 border-zinc-200 w-auto bg-zinc-100 text-xs  p-2 font-medium text-gray-700 uppercase tracking-wider'> Ventas del mes</div>
                        <div className='min-h-fit text-gray-900 text-base font-bold lg:font-extrabold md:text-lg pt-2 md:text-base xxs:text-lg xs:text-base'>54</div>
                     </div>

                    <div className='mt-8 h-full w-full rounded-md bg-gray-50 align-middle text-center text-zinc-100 bt-1 border-gray-300 pb-4 shadow-lg shadow-violet-900/20' > 
                        <div className='w-full border-b-2 border-zinc-200 w-auto bg-zinc-100 text-xs p-2 font-medium text-gray-700 uppercase tracking-wider'>Total mensual :</div>
                        <div className='min-h-fit text-gray-900 text-base font-bold lg:font-extrabold md:text-lg pt-2 md:text-base xxs:text-lg xs:text-base'>€ 7.000</div>
                    </div>

                    <div className='mt-8 h-full w-full rounded-md bg-gray-50 align-middle text-center text-zinc-100 bt-1 border-gray-300 pb-4 shadow-lg shadow-violet-900/20' > 
                        <div className='w-full border-b-2 border-zinc-200 w-auto bg-zinc-100 text-xs p-2 font-medium text-gray-700 uppercase tracking-wider'> Nuevos clientes:</div>
                        <div className='min-h-fit text-gray-900 text-base font-bold lg:font-extrabold md:text-lg pt-2 md:text-base xxs:text-lg xs:text-base'>14</div>
                    </div>
            </div>
        </div>
     </div>
    </div>
    )
}
export default AdminStats;
