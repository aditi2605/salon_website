'use client'

import React from 'react'
import { Copyright, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#CBB8A4] to-[#b9a38e] text-white py-12">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* BRAND SECTION */}
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">Beige & Blush</h1>
            <p className="text-sm text-stone-900 mt-3 leading-relaxed">
              A modern beauty studio offering refined treatments, warm hospitality,
              and a calm retreat from the everyday. Your confidence and comfort come first.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              <li className="hover:opacity-80 cursor-pointer">Home</li>
              <li className="hover:opacity-80 cursor-pointer">About</li>
              <li className="hover:opacity-80 cursor-pointer">Services</li>
              <li className="hover:opacity-80 cursor-pointer">Contact</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-5 mt-6">
              <Instagram className="hover:scale-110 transition cursor-pointer" />
              <Facebook className="hover:scale-110 transition cursor-pointer" />
            </div>
          </div>

          {/* HOURS + LOCATION + CTA */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Salon Details</h2>

            <p className="text-sm">
              <span className="font-medium">Opening Hours</span><br />
              Mon – Fri: 9:00 AM – 7:00 PM<br />
              Sat: 10:00 AM – 6:00 PM<br />
              Sun: Closed
            </p>

            <p className="text-sm mt-4">
              <span className="font-medium">Location</span><br />
              Based in South London, UK
            </p>

            <button className="mt-6 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-stone-200 transition shadow-md">
              Book Appointment
            </button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/40 pt-4 flex justify-center items-center gap-2 text-sm">
          <Copyright size={14} />
          <p>2025 Beige & Blush. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default Footer
