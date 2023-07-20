function AdminStats() {
  return (
    <div className="max-w-xl px-2 mx-auto mt-5 mb-5 sm:px-6 lg:px-8">
      <div className="items-left">
        <h1 className="mx-1 my-2 font-bold tracking-wide text-center uppercase text-violet-900">
          Estadisticas de los últimos 30 dias
        </h1>
        <div className="items-center w-full h-full ">
          <div className="h-full mb-1 align-middle bg-white rounded-lg min-w-max min-h-max sm:colummns-1 sm:my-2 md:columns-3">
            <div className="w-full h-full pb-4 text-center align-middle border-gray-300 shadow-lg rounded-md bg-gray-50 text-zinc-100 bt-1 shadow-violet-900/20">
              <div className="w-auto w-full p-2 text-xs font-medium tracking-wider text-gray-700 uppercase border-b-2 border-zinc-200 bg-zinc-100 ">
                {' '}
                Ventas del mes
              </div>
              <div className="pt-2 text-base font-bold text-gray-900 min-h-fit lg:font-extrabold md:text-lg md:text-base xxs:text-lg xs:text-base">
                54
              </div>
            </div>

            <div className="w-full h-full pb-4 mt-8 text-center align-middle border-gray-300 shadow-lg rounded-md bg-gray-50 text-zinc-100 bt-1 shadow-violet-900/20">
              <div className="w-auto w-full p-2 text-xs font-medium tracking-wider text-gray-700 uppercase border-b-2 border-zinc-200 bg-zinc-100">
                Total mensual :
              </div>
              <div className="pt-2 text-base font-bold text-gray-900 min-h-fit lg:font-extrabold md:text-lg md:text-base xxs:text-lg xs:text-base">
                € 7.000
              </div>
            </div>

            <div className="w-full h-full pb-4 mt-8 text-center align-middle border-gray-300 shadow-lg rounded-md bg-gray-50 text-zinc-100 bt-1 shadow-violet-900/20">
              <div className="w-auto w-full p-2 text-xs font-medium tracking-wider text-gray-700 uppercase border-b-2 border-zinc-200 bg-zinc-100">
                {' '}
                Nuevos clientes:
              </div>
              <div className="pt-2 text-base font-bold text-gray-900 min-h-fit lg:font-extrabold md:text-lg md:text-base xxs:text-lg xs:text-base">
                14
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminStats;
