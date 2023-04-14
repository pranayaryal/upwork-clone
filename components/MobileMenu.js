'use client'
import { useState } from 'react';


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
        <div className="absolute flex flex-col justify-start align-left">
          <button>Find Talent</button>
          <div>

          </div>
          <button>Find Work</button>
          <button>Why Upwork</button>
          <button>Enterprise</button>
          <button>Log In</button>

        </div>
      }
    </div>


  );
}

export default MobileMenu;
