// UpworkUserId = 87abd5279bda40e3b3ceacc590213b15
'use client'
import { useState } from 'react';



const FooterMenu = (props) => {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

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

  return (

    <div className='lg:hidden text-white'>
      {props.isOpen &&
        <div className="h-screen absolute text-sm left-0
        flex flex-col justify-start
        w-full py-4
        px-6 transition-all ease-in-duration-500
        cursor-pointer">
          <div onClick={() => clickTalent()}
            className="flex flex-row mt-2 justify-between align-center w-full">
            <span className="bg-green-50">Find Talent</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" aria-hidden="true"
              className={`w-4 h-4 mt-3 ${isTalentOpen && 'rotate-180'} ease-in-out duration-300`}
              viewBox="0 0 24 24" role="img">
              <path vectorEffect="non-scaling-stroke" stroke="var(--icon-color, #001e00)"
                strokeLinecap="round" strokeLinejoin="round"
                strokeMiterlimit="10" strokeWidth="1.5" d="M18 10l-6 5-6-5"></path>
              </svg>
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
      {openMarketPlace && <TalentMarketPlace closeMenu={() => props.closeMenu} />}
    </div>


  );
}

export default FooterMenu;

