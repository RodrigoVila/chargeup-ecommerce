const TopBar = () => {
  return (
    <nav className='fixed top-0 z-20 h-auto w-full bg-gray-800 px-1 pb-1 pt-2 md:pt-1'>
      <div className='flex flex-wrap items-center'>
        <div className='flex flex-shrink justify-center text-white md:w-1/3 md:justify-start'>
          Charge up
        </div>

        <div className='hidden flex-1 justify-center px-2 text-white md:flex md:w-1/3 md:justify-start'>
          <span className='relative w-full'>
            <input
              type='search'
              placeholder='Search'
              className='w-full appearance-none rounded border border-transparent bg-gray-900 px-2 py-3 pl-10 leading-normal text-white transition focus:border-gray-400 focus:outline-none'
            />
            <div className='search-icon absolute left-3.5 top-4'>
              <svg
                className='pointer-events-none h-4 w-4 fill-current text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z'></path>
              </svg>
            </div>
          </span>
        </div>

        <div className='flex w-full content-center justify-between pt-2 md:w-1/3 md:justify-end'>
          <ul className='list-reset flex flex-1 items-center justify-between md:flex-none'>
            <li className='flex-1 md:mr-3 md:flex-none'>
              <a className='inline-block px-4 py-2 text-white no-underline' href='#'>
                Active
              </a>
            </li>
            <li className='flex-1 md:mr-3 md:flex-none'>
              <a
                className='hover:text-underline inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200'
                href='#'
              >
                link
              </a>
            </li>
            <li className='flex-1 md:mr-3 md:flex-none'>
              <div className='relative inline-block'>
                <button onClick={() => {}} className='drop-button text-white focus:outline-none'>
                  {' '}
                  <span className='pr-2'>
                    <i className='em em-robot_face'></i>
                  </span>{' '}
                  Hi, User{' '}
                  <svg
                    className='inline h-3 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                  </svg>
                </button>
                <div
                  id='myDropdown'
                  className='dropdownlist invisible absolute right-0 z-30 mt-3 overflow-auto bg-gray-800 p-3 text-white'
                >
                  <input
                    type='text'
                    className='drop-search p-2 text-gray-600'
                    placeholder='Search..'
                    id='myInput'
                  />
                  <a
                    href='#'
                    className='block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline'
                  >
                    <i className='fa fa-user fa-fw'></i> Profile
                  </a>
                  <a
                    href='#'
                    className='block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline'
                  >
                    <i className='fa fa-cog fa-fw'></i> Settings
                  </a>
                  <div className='border border-gray-800'></div>
                  <a
                    href='#'
                    className='block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline'
                  >
                    <i className='fas fa-sign-out-alt fa-fw'></i> Log Out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
