'use client'
import { useState } from 'react';
import ArrowDown from './ArrowDown';


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (


    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden flex items-center px-3 py-2 text-black-500 hover:text-black-400 rounded'>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>

      </button>
      {isOpen &&
        <div className="absolute text-sm left-0 top-12 flex flex-col justify-start z-50 bg-white w-full min-h-full mt-8 px-4">
          <div className="flex align-center space-x-60">
            <span className="py-2 bg-green-50">Find Talent</span>
            <ArrowDown />
          </div>
          <div className={`flex flex-col ml-4`}>
            <div className="flex flex-col p-2">
              <p className="mt-4">Post a job and hire a pro</p>
              <p className="text-gray-400">Talent Marketplace</p>
            </div>
            <div className="flex flex-col p-2">
              <p className="mt-4">Browse and buy projects</p>
              <p className="text-gray-400">Project Catalog</p>
            </div>
            <div className="flex flex-col p-2">
              <p className="mt-4">Let us find you the right talent</p>
              <p className="text-gray-400">Talent Scout</p>
            </div>
          </div>
          
          <p className="mt-8">Find Work</p>
          <div className="flex flex-col ml-4">
            <div className="flex flex-col p-2">
              <p className="mt-4">Ways to earn</p>
              <span className="text-gray-400 mt-1">Learn why Upwork has the right opportunities for you</span>
            </div>
            <div className="flex flex-col p-2">
              <p className="mt-4">Find work for your skills</p>
              <p className="text-gray-400 mt-1">Explore the kind of work availale in your field</p>
            </div>
            <div className="flex flex-col p-2">
              <p className="mt-4">Find ways to promote yourself</p>
              <p className="text-gray-400 mt-1">Show clients you are the one they want</p>
            </div>
          </div>
          <p className="mt-8">Why Upwork</p>
          <div className="flex flex-col ml-4">
              <span className="text-gray-500 py-4">Success Stories</span>
              <span className="text-gray-500 py-4 bg-green-100">How to hire</span>
              <span className="text-gray-500 py-4">Reviews</span>
              <span className="text-gray-500 py-4">How to find work</span>
          </div>
          <p className="mt-8">Enterprise</p>
          <p className="mt-8">Log In</p>

        </div>
      }
    </div>


  );
}

export default MobileMenu;
