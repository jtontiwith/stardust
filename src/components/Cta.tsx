import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="flex">
      <div className="z-10 pb-32">
        <h1 className="mt-4 text-4xl text-center tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Be one of the first</span>
          <span className="block text-indigo-400">to rent Stardust</span>
        </h1>
        <div className="mt-10 sm:mt-12">
          <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
            <div>
              {/* <div className="min-w-0">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                />
              </div> */}
              <div className="mt-3">
                <Link href="/OptIn">
                  <a>
                    <button
                      type="button"
                      className="block w-full py-3 px-4 rounded-full shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                    >
                      Let the adventure begin
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cta;
