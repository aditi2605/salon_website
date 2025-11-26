'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X , Scissors } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1, y: 0}}
        className='
        fixed top-6 left-1/2 -translate-x-1/2 z-50 
        bg-white/80 backdroup-blur-xl border border-white/40 
        shadow-[0_4px_20px_rgba(0,0,0,0.1)] 
        rounded-full px-6 py-2'
      >
       <div className="flex items-center gap-8">

        {/* logo */}
        <div className="text-md md:text-lg font-semibold tracking-wide px-3">
          <span className='text-black'>Beige & Blush</span>
        </div>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={item == "Home" ? "/" : `/${item.toLowerCase()}`}
              className='relative text-black font-medium group'
            >
              {item}
              <span className='
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-amber-700 transition-all duration-300
                group-hover:w-full'
              ></span>
            </Link>
          ))}
        </div>

        {/* mobile navbar btn */}
        <button className='md:hidden text-black ml-auto' onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden fixed top-22 left-1/2 -translate-x-1/2
                w-[85%] 
                bg-white/95 backdrop-blur-xl
                rounded-3xl shadow-xl py-6
                flex flex-col items-center gap-6 z-[999]
              "
            >
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <Link
                  key={i}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-black text-lg font-medium tracking-wide"
                >
                  {item}
                </Link>
              ))}

              {/* Optional Book Button */}
              <Link
                href="/AppoinymentForm"
                className="
                  mt-2 px-6 py-2 text-white bg-black 
                  rounded-full tracking-wide
                "
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </>
  );
};

export default Navbar;
