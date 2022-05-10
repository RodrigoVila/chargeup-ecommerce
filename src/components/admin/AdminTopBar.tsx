import React, { useState } from "react";

const AdminTopBar = () => {
  const [showDropdown, setShowDropdown] = useState("invisible");

  const handleDropdown = () => {
    // function toggleDD(myDropMenu) {
    //     document.getElementById(myDropMenu).classList.toggle("invisible");
    // }
  };

  const handleFilters = () => {
    // function filterDD(myDropMenu, myDropMenuSearch) {
    //     var input, filter, ul, li, a, i;
    //     input = document.getElementById(myDropMenuSearch);
    //     filter = input.value.toUpperCase();
    //     div = document.getElementById(myDropMenu);
    //     a = div.getElementsByTagName("a");
    //     for (i = 0; i < a.length; i++) {
    //         if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
    //             a[i].style.display = "";
    //         } else {
    //             a[i].style.display = "none";
    //         }
    //     }
    // }
  };

  return (
    <nav className="fixed top-0 z-20 w-full h-auto px-1 pt-2 pb-1 bg-gray-800 md:pt-1">
      <div className="flex flex-wrap items-center">
        <div className="flex justify-center flex-shrink text-white md:w-1/3 md:justify-start">
          Charge up
        </div>

        <div className="justify-center flex-1 hidden px-2 text-white md:w-1/3 md:justify-start md:flex">
          <span className="relative w-full">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-2 py-3 pl-10 leading-normal text-white transition bg-gray-900 border border-transparent rounded appearance-none focus:outline-none focus:border-gray-400"
            />
            <div className="absolute search-icon top-4 left-3.5">
              <svg
                className="w-4 h-4 text-white pointer-events-none fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </span>
        </div>

        <div className="flex content-center justify-between w-full pt-2 md:w-1/3 md:justify-end">
          <ul className="flex items-center justify-between flex-1 list-reset md:flex-none">
            <li className="flex-1 md:flex-none md:mr-3">
              <a
                className="inline-block px-4 py-2 text-white no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <a
                className="inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
                href="#"
              >
                link
              </a>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <div className="relative inline-block">
                <button
                  onClick={() => {}}
                  className="text-white drop-button focus:outline-none"
                >
                  {" "}
                  <span className="pr-2">
                    <i className="em em-robot_face"></i>
                  </span>{" "}
                  Hi, User{" "}
                  <svg
                    className="inline h-3 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <div
                  id="myDropdown"
                  className="absolute right-0 z-30 invisible p-3 mt-3 overflow-auto text-white bg-gray-800 dropdownlist"
                >
                  <input
                    type="text"
                    className="p-2 text-gray-600 drop-search"
                    placeholder="Search.."
                    id="myInput"
                    onKeyUp="filterDD('myDropdown','myInput')"
                  />
                  <a
                    href="#"
                    className="block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline"
                  >
                    <i className="fa fa-user fa-fw"></i> Profile
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline"
                  >
                    <i className="fa fa-cog fa-fw"></i> Settings
                  </a>
                  <div className="border border-gray-800"></div>
                  <a
                    href="#"
                    className="block p-2 text-sm text-white no-underline hover:bg-gray-800 hover:no-underline"
                  >
                    <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminTopBar;
