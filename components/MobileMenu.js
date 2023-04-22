// UpworkUserId = 87abd5279bda40e3b3ceacc590213b15
'use client'
import { useState } from 'react';
import NavText from './NavText';
import FindWork from './FindWork';
import WhyUpwork from './WhyUpwork';
import { TalentMarketPlace } from './TalentMarketplace';
import { motion } from "framer-motion";
import { FramerExample } from './FramerExample';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [openMarketPlace, setOpenMarketPlace] = useState(false);

  const clickTalent = () => {
    setIsTalentOpen(!isTalentOpen);
    setIsWorkOpen(false);
    setIsWhyOpen(false);
  }
  
  const doOpen = () => {
    setIsOpen(!isOpen);
    setIsTalentOpen(false);
    setIsWorkOpen(false);
    setIsWhyOpen(false);
    setOpenMarketPlace(false);
  }

  const clickWork = () => {
    setIsWorkOpen(!isWorkOpen);
    setIsTalentOpen(false);
    setIsWhyOpen(false);
  }

  const clickWhy = () => {
    setIsWhyOpen(!isWhyOpen);
    setIsTalentOpen(false);
    setIsWorkOpen(false);
  }

  const doMarketPlace = () => {
    setOpenMarketPlace(true);
    setIsWhyOpen(false);
    setIsTalentOpen(false)
    setIsWorkOpen(false);
  }

  return (

    <div>
      <button
        onClick={() => doOpen()}
        className='lg:hidden flex items-center px-3 py-2 text-black-500 hover:text-black-400 rounded'>
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
        <div className="lg-hidden h-screen absolute text-sm left-0 top-12 flex flex-col justify-start z-50 bg-white w-full min-h-full mt-8 px-4">
          <div onClick={() => clickTalent()} className="flex align-center space-x-60">
            <span className="py-2 bg-green-50">Find Talent</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" aria-hidden="true"
              className={`w-4 h-4 mt-3 ${isTalentOpen && 'rotate-180'} ease-in-out duration-300`}
              viewBox="0 0 24 24" role="img">
              <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)"
                strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path></svg>
          </div>
          {isTalentOpen &&
            /* <NavText /> */
              (<ul className={`flex flex-col ml-4`}>

                <motion.li
                  variants={variants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col p-2"
                  onClick={() => doMarketPlace()}
                >
                  <p className="mt-4">Post a job and hire a pro</p>
                  <p className="text-gray-400">Talent Marketplace</p>
                </motion.li>
                <li className="flex flex-col p-2">
                  <p className="mt-4">Browse and buy projects</p>
                  <p className="text-gray-400">Project Catalog</p>
                </li>
                <li className="flex flex-col p-2">
                  <p className="mt-4">Let us find you the right talent</p>
                  <p className="text-gray-400">Talent Scout</p>
                </li>
              </ul>)
          }
          

          <p onClick={() => clickWork()} className="mt-8">Find Work</p>
          {isWorkOpen &&
            <FindWork />
          }
          <p onClick={() => clickWhy()} className="mt-8">Why Upwork</p>
          {isWhyOpen &&
            <WhyUpwork />
          }
          <p className="mt-8">Enterprise</p>
          <p className="mt-8">Log In</p>

        </div>
      }
      {openMarketPlace && <TalentMarketPlace />}
    </div>


  );
}

