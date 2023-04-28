'use client';
import { MobileMenu } from '@/components/MobileMenu'
import { TalentMarketPlace } from '@/components/TalentMarketplace';
import { WhyUpwork } from '@/components/WhyUpwork';
import { Arrow } from '@/components/Arrow';
import { FindWork } from '@/components/FindWork';
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { motion } from "framer-motion";

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


import Skills from '@/components/skills'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [openMarketPlace, setOpenMarketPlace] = useState(false);

  const clickTalent = () => {
    setIsTalentOpen(!isTalentOpen);
    setIsWorkOpen(false);
    setIsWhyOpen(false);
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

  const closeAll = () => {
    setIsOpenMenu(false);
    setOpenMarketPlace(false);
    setIsWhyOpen(false);
    setIsTalentOpen(false)
    setIsWorkOpen(false);
  }

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const doOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <div className='px-2 py-1'>
      <div className='flex flex-col max-w-full'>
        <nav className="flex py-2 justify-between items-center w-full lg:hidden">
          <div className='flex justify-start items-center space-x-2'>
            <button
              onClick={() => doOpen()}
              className='lg:hidden flex items-center px-3 py-2 text-black-500 hover:text-black-400 rounded'>
              <svg
                className={`fill-current h-3 w-3 ${isOpenMenu ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpenMenu ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>

            </button>
            <a href="/" className='mb-1 text-xl text-green-700'>Upwork</a>
          </div>
          <a href="/">Sign Up</a>
        </nav>
        <hr />

        {/* Start of Mobile Menu */}

        {isOpenMenu &&
          <div className='lg:hidden bg-gray-500'>
            <div className="h-screen absolute text-sm left-0
        flex flex-col justify-start
        z-50 bg-white w-full py-4
        px-6 transition-all ease-in-duration-500
        cursor-pointer">
              <div onClick={() => clickTalent()}
                className="flex flex-row mt-2 justify-between align-center w-full">
                <span className="bg-green-50">Find Talent</span>
                <Arrow isClicked={isTalentOpen} />
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


              <div className='mt-8 flex flex-row justify-between align-center'>
                <p onClick={() => clickWork()} >Find Work</p>
                <Arrow isClicked={isWorkOpen} />
              </div>
              {isWorkOpen &&
                <FindWork />
              }

              <div className='mt-8 flex flex-row justify-between align-center'>
              <p onClick={() => clickWhy()}>Why Upwork</p>
              <Arrow isClicked={isWhyOpen} />
              </div>
              {isWhyOpen &&
                <WhyUpwork />
              }
              <p className="mt-8">Enterprise</p>
              <p className="mt-8">Log In</p>

            </div>
            {openMarketPlace && <TalentMarketPlace
             closeAll={() => closeAll()}
             closeTalent={() => setOpenMarketPlace(false)} />}
          </div>
        }

        {/* End of Mobile Menu */}

        <div className='flex flex-col justify-between items-center'>
          <div className='max-w-xs mt-14 mb-10 md:max-w-xl md:mt-16 lg:mb-8 md:text-6xl'>
            <h2 className="text-4xl tracking-tight text-center">
              {'Find the best'}
              <br className='md:hidden' />
              {' people '}
              <br className='hidden md:block lg:hidden' />
              {'for'}
              <br className='md:hidden' />
              {' your job'}
            </h2>
          </div>
          <div className='w-[95%] md:w-[90%] lg:w-2/5 md:text-6xl mt-0'>
            <div className='relative'>
              <input type="text"
                // #f2f7f2
                className="focus:outline-none focus:bg-green-50 lg:mt-12 w-full border-2 box-border rounded-full tracking-wider text-sm px-6 py-4"
                placeholder="Try 'Data Entry' or 'build a website' " />
              <span className='hidden md:block md:absolute md:top-0 lg:top-7 md:right-2'>
                <button className='rounded-full bg-green-700 w-32 text-sm px-2 py-3 text-white'>
                  Get Started
                </button>
              </span>
              <span className='absolute top-1.5 right-2 md:hidden'>
                <button className='flex flex-col justify-center w-11 h-11 rounded-full bg-green-700 text-sm p-3 text-white'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24"
                    role="img">
                    <path vectorEffect="non-scaling-stroke" stroke="white"
                      strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5"
                      d="M3 11.477h18m-7.477 7.753L21 11.478 13.523 4"></path>
                  </svg>
                </button>
              </span>
            </div>
            <Skills />


          </div>
        </div>
      </div>

    </div>



  )
}
