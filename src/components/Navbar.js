import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-700">
          JobsPortal
        </span>

        <div className="flex md:order-2">
        <button className="h-12 px-5 text-green-900 transition-colors duration-150 rounded-lg">Login</button>
          <button className="h-10 px-5 m-1 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Post a Job</button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
