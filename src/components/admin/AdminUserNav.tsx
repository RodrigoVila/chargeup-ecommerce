const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Ordenes', href: '#', current: false },
  { name: 'Clientes', href: '#', current: false },
  { name: 'Productos', href: '#', current: false },
  { name: 'Estadisticas', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminUserNav = ({ setActivePage, activePage }) => {
  const handleClick = (item: string): any => {
    setActivePage(item);
  };

  return (
    <div className="bg-violet-900">
      <>
        <div className="max-w-xl px-2 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <div className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="block w-auto h-16 lg:hidden"
                  src="./chargeup_logo_wg.svg"
                  alt="ChargeUP BCN"
                />
                <img
                  className="hidden w-auto lg:block h-14"
                  src="./chargeup_logo_wg.svg"
                  alt="ChargeUP BCN"
                />
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      name={item.name}
                      // onClick={() => setActivePage(item.name)}
                      onClick={() => handleClick(item.name)}
                      // onClick={() => props.setMkactive(true) }

                      className={classNames(
                        activePage
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={activePage ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminUserNav;
