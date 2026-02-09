'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Services', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <nav
          className="
            flex items-center justify-between
            w-[90vw] max-w-6xl
            px-6 py-3
            bg-white/80 backdrop-blur-xl
            border border-white/40
            shadow-lg rounded-full
          "
        >
          {/* LOGO */}
          <Link href="/" className="text-xl font-semibold tracking-wide text-black">
            Beige & <span className="text-[#b98567]">Blush</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative text-sm font-medium text-black group"
              >
                {item}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-[#b98567] transition-all duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}

            <Link
              href="/appointment"
              className="ml-4 px-5 py-2 rounded-full bg-[#b98567] text-white text-sm font-semibold hover:bg-[#a47559] transition"
            >
              Book Now
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-black"
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="
                absolute bottom-0 left-0 right-0
                bg-white rounded-t-3xl
                px-8 py-10
              "
            >
              {/* CLOSE */}
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-semibold text-black">
                  Beige & <span className="text-[#b98567]">Blush</span>
                </span>
                <button onClick={() => setOpen(false)}>
                  <X size={26} className='text-black' />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 text-lg font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-black"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/appointment"
                onClick={() => setOpen(false)}
                className="
                  block mt-10 text-center
                  px-6 py-3 rounded-full
                  bg-[#b98567] text-white font-semibold
                "
              >
                Book Your Experience
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
