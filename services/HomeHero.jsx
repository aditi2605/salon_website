'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroImage from '@/public/images/hero_model_img.png'
import Navbar from '@/components/Navbar'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import AppointmentForm from '@/components/AppointmentForm'
import Footer from '@/components/Footer'

const HomeHero = () => {
  return (
    <>
        {/* Navbar */}
        <Navbar />
        <section className="bg-gradient-to-r from-orange-200 to-orange-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 pt-32">
        {/* Left Content: Texts */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left space-y-6 md:w-1/2"
        >
            <span className="text-lg text-black uppercase tracking-widest">Luxury Beauty Lounge</span>
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Where Elegance Meets Confidence
            </h1>
            <p className="text-xl md:text-2xl text-black">
            Hair, nails & makeup curated for you
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Book Now!
            </button>
        </motion.div>

        {/* Right Content: Image */}
        <motion.div
            initial={{ scale: 1.9, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
        >
            <Image
            src={HeroImage}
            alt="Salon reception"
            width={800}
            height={800}
            className="object-cover rounded-full shadow-full"
            placeholder="blur"
            />
        </motion.div>
        </section>
        {/* About Section */}
        <About />
        {/* Services Section */}
        <Services />
        {/* Gallery section */}
        <Gallery />
        {/* client Testimonials */}
        <Testimonials />
        {/* AppointmentForm */}
        <AppointmentForm />
        {/* Footer */}
        <Footer />
    </>
  )
}

export default HomeHero
