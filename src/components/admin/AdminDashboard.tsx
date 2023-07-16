import AdminClientInvite from './AdminClientInvite';
import AdminStats from './AdminStats';

export default function AdminDashboard() {
  return (
    <div className="object-center align-center xl:w-full">
      <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:w-max lg:px-8 xl:mt-18 xl:w-max">
        <div className="sm:text-center lg:text-left xl:walign-center xl:object-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block lg:inline">ChargeUP</span>{' '}
            <span className="block text-indigo-600 xl:inline">Online Business</span>
          </h1>
          <div className="xl:align-center xl:object-center">
            <p className="mt-3 text-base text-gray-500 xl:align-right 2xl:align-right xl:object-right sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
              Bienvenido a tu Dashboard de ChargeUP E-commerce. Debajo encontraras algunos de los
              elementos destacados, y puedes acceder en detalle a todas las opciones del menu
              principal en la parte superior.
            </p>
          </div>
        </div>
        <AdminClientInvite />
      </main>
      <div className="object-left mx-0 ml-0 align-left">
        <AdminStats />
      </div>
    </div>
  );
}
