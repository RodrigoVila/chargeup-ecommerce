import { ActivePage } from 'app/page'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { twMerge } from 'tailwind-merge'

type UserNavProps = {
  activePage: string
  setActivePage: Dispatch<SetStateAction<ActivePage>>
}

type NavigationItem = { name: ActivePage; href: string; current: boolean }

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '', current: true },
  { name: 'Orders', href: '', current: false },
  { name: 'Customers', href: '', current: false },
  { name: 'Products', href: '', current: false },
  { name: 'Estadistics', href: '', current: false },
]

const UserNav = ({ setActivePage, activePage }: UserNavProps) => {
  const handleClick = (item: ActivePage): any => {
    setActivePage(item)
  }

  return (
    <div className='bg-violet-900'>
      <>
        <div className='mx-auto max-w-xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <div className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='sr-only'>Open main menu</span>
              </div>
            </div>
            <div className='flex flex-1 items-center justify-center'>
              <div className='flex flex-shrink-0 items-center'>
                <Image
                  className='block h-16 w-auto lg:hidden'
                  src='./chargeup_logo_wg.svg'
                  alt='ChargeUP BCN'
                  height={120}
                  width={120}
                />
                <Image
                  className='hidden h-14 w-auto lg:block'
                  src='./chargeup_logo_wg.svg'
                  alt='ChargeUP BCN'
                  height={120}
                  width={120}
                />
              </div>

              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      name={item.name}
                      // onClick={() => setActivePage(item.name)}
                      onClick={() => handleClick(item.name)}
                      // onClick={() => props.setMkactive(true) }

                      className={twMerge(
                        'rounded-md px-3 py-2 text-sm font-medium',
                        activePage
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      )}
                      aria-current={activePage ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'></div>
          </div>
        </div>

        <div className='sm:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={twMerge(
                  'block rounded-md px-3 py-2 text-base font-medium',
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </>
    </div>
  )
}

export default UserNav
