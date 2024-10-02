import { useState } from "react";
import Image from "next/image";

export default  function Header() {
  // State to control the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);


  return (


    <nav className="bg-background border-gray-200 w-full px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Menu & logo */}
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu"
            width={30}
            height={30}
          />
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/images/logo.jpg"
              className="h-8"
              alt="Logo"
              width={30}
              height={30}
            />
          </a>
        </div>

        {/* Search */}
        <div
          className="i"
          id="navbar-user"
        >
          <div className="relative">
            <div className="">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=""
              placeholder="Tìm kiếm câu hỏi"
              required
            />
          </div>
        </div>

         {/* profile */}
        <div className="">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full"
              src="/assets/images/user-profile.png"
              alt="user photo"
              width={30}
              height={30}
            />
          </button>
          {/* {dropdownOpen && ( // Show dropdown when state is true
            <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )} */}
        </div>
        
      </div>
    </nav>
  );
}
