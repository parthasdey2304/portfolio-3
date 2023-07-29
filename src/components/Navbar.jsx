import React from 'react';

function Navbar() {
  return ( 
    <nav className="bg-white">
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl md:text-5xl font-semibold whitespace-nowrap text-blue-600">Parthasarathidey.tech</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium w-full flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 md:mt-4 md:mr-4 md:border-0 border-2">
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 font-semibold rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 md:text-3xl" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-3xl">About</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-3xl">Projects</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-3xl">Certificates</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:text-3xl">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;