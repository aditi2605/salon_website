'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import HeroImage from '@/public/images/hero_model_img.png'
import HeroImage1 from '@/public/images/salon_reception.png'
import HeroImage2 from '@/public/images/hero_image_2.jpg'
import HeroImage3 from '@/public/images/hero_image_3.jpg'
import HeroImage4 from '@/public/images/hero_image_4.jpg'
// import HeroImage5 from '@/public/images/hero_image_5.jpg'
import HeroImage6 from '@/public/images/hero_image_6.jpg'
// import HeroImage7 from '@/public/images/hero_image_7.jpg'
import HeroImage8 from '@/public/images/hero_image_8.jpg'
import HeroImage9 from '@/public/images/hero_image_9.jpg'
import HeroImage10 from '@/public/images/hero_image_10.jpg'
import HeroImage11 from '@/public/images/hero_image_11.jpg'
import HeroImage12 from '@/public/images/hero_image_12.jpg'
import HeroImage13 from '@/public/images/hero_image_13.jpg'
import HeroImage14 from '@/public/images/hero_image_14.jpg'
import HeroImage15 from '@/public/images/hero_image_15.jpg'
import MakeupBrush from '@/public/images/makeup_brush.png'
import Comb from '@/public/images/comb.png'
import Scissor from '@/public/images/scissor.png'
import HairDryer from '@/public/images/hairdryer.png'
import NailPaint from '@/public/images/nailpaint.png'

import Navbar from '@/components/Navbar'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import AppointmentForm from '@/components/AppointmentForm'
import Footer from '@/components/Footer'

const HomeHero = () => {

    const floatingImages = [
        // { src: MakeupBrush, size: 180, top: 10, left: 5, rotate: 30, opacity: 0.2 },
        // { src: Scissor, size: 220, top: 75, left: 4, rotate: 160, opacity: 0.3 },
        // { src: Comb, size: 130, top: 70, left: 40, rotate: 45, opacity: 0.4 },
        // { src: NailPaint, size: 140, top: 22, left:40, rotate: 10, opacity: 0.5},
        // { src: HairDryer, size: 140, top: 22, left:40, rotate: 10, opacity: 0.5},
        { src: HeroImage8, size: 200, top: 0, left:20, rotate: -390, opacity: 0.8 },
        { src: HeroImage6, size: 240, top: 42, left:18, rotate: -390, opacity: 0.6},
        { src: HeroImage2, size: 200, top: 0, left:58, rotate: 380, opacity: 0.8 },
        { src: HeroImage12, size: 240, top: 38, left:65, rotate: 390, opacity: 0.6},
    
    ];

  return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Home/ Hero Section */}
    
        <section className="relative w-full min-h-auto overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100">

        {/* Soft background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(185,133,103,0.25),transparent_60%)]" />

        <div className="relative mt-20 z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* LEFT — TEXT */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center md:text-left space-y-6"
            >
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1a1a1a] leading-tight">
                Where <span className="text-[#b98567]">Elegance</span><br />
                Meets Effortless Beauty
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#444] max-w-md mx-auto md:mx-0">
                Step into a world of comfort, artistry, and individualized care crafted to perfection.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
                <button className="px-8 py-3 rounded-full bg-[#b98567] text-white font-semibold tracking-wide hover:bg-[#a47559] transition">
                Book Your Experience
                </button>
            </div>
            </motion.div>

            {/* RIGHT — IMAGE COMPOSITION */}
            <div className="relative flex justify-center items-center">

            {/* Decorative blob */}
            <div className="absolute w-[320px] h-[420px] md:w-[420px] md:h-[520px] bg-[#f5d5b1] rounded-[40%] blur-3xl opacity-70" />

            {/* MAIN IMAGE */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 w-[240px] sm:w-[300px] md:w-[380px] lg:w-[440px] h-[320px] sm:h-[400px] md:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
                <Image
                src={HeroImage}
                alt="Salon Model"
                fill
                priority
                className="object-cover"
                />
            </motion.div>

            {/* SMALL IMAGE — TOP LEFT */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="hidden md:block absolute -left-6 top-10 w-[140px] h-[180px] rounded-xl overflow-hidden shadow-lg"
            >
                <Image src={HeroImage8} alt="Salon" fill className="object-cover" />
            </motion.div>

            {/* SMALL IMAGE — BOTTOM RIGHT */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="hidden md:block absolute -right-20 bottom-10 w-[150px] h-[200px] rounded-xl overflow-hidden shadow-lg"
            >
                <Image src={HeroImage6} alt="Salon" fill className="object-cover" />
            </motion.div>

            </div>
        </div>
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
