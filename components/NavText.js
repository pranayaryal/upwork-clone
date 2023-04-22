import { motion } from "framer-motion";
import { useState } from "react";
import { TalentMarketPlace } from "./TalentMarketplace";

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

const NavText = ({ props }) => {
  const [openMarketPlace, setOpenMarketPlace] = useState(false);
  console.log(openMarketPlace)
  return (
    <div>
    <ul className={`flex flex-col ml-4`}>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col p-2"
        onClick={() => setOpenMarketPlace(true)}
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
    </ul>
    {openMarketPlace && <TalentMarketPlace />}
    </div>
  );
}

export default NavText;