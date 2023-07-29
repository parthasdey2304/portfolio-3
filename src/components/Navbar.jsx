import React from 'react';

function Navbar() {
  return ( 
    <nav className="bg-white fixed">
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center">
                <span className="self-center text-2xl lg:text-5xl font-bold whitespace-nowrap text-blue-600">Parthasarathidey.tech</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium w-full flex flex-col p-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-10 lg:mt-4 lg:mr-4 lg:border-0 border-2">
                <li>
                <a href="#home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 font-semibold rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white lg:dark:text-blue-500 lg:text-3xl" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:text-3xl">About</a>
                </li>
                <li>
                <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:text-3xl">Projects</a>
                </li>
                <li>
                <a href="#certificates" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:text-3xl">Certificates</a>
                </li>
                <li>
                <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:text-3xl">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;