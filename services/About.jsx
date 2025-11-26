'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutImage from '@/public/images/team_image.png';
import { Scissors } from 'lucide-react';

const About = () => {
  return (
    <>
      <section className="bg-orange-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src={AboutImage}
            alt="Beige & Blush Team"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
            placeholder="blur"
          />
        </motion.div>

        {/* RIGHT*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col space-y-8"
        >

          {/* Who We Are */}
          <div>
            <h3 className="text-xl text-black uppercase font-bold tracking-wider mb-2">
              Who We Are
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Beige & Blush was founded with a simple mission to bring effortless elegance to everyday beauty. 
              Inspired by modern luxury and warm hospitality, our studio is a calm retreat where every guest is welcomed with care and leaves with confidence.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h3 className="text-xl text-black uppercase font-bold tracking-wider mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To deliver refined beauty experiences using expert techniques, premium products, and an atmosphere that makes every visit feel special.
            </p>
          </div>

          {/* What We Stand For */}
          <div>
            <h3 className="text-xl text-black uppercase font-bold tracking-wider mb-4">
              What We Stand For
            </h3>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <Scissors className="text-black" size={20} />
                Personalised care tailored to your individual style
              </li>

              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <Scissors className="text-black" size={20} />
                Quality treatments, carried out with precision
              </li>

              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <Scissors className="text-black" size={20} />
                A calm, elegant environment that feels uplifting
              </li>

              <li className="flex items-center gap-3 text-gray-700 text-lg">
                <Scissors className="text-black" size={20} />
                Enhancing natural beauty through thoughtful artistry
              </li>
            </ul>

            <p className="text-gray-700 text-xl mt-6">
              At Beige & Blush, your comfort and confidence always come first.
            </p>
          </div>

        </motion.div>

      </section>
    </>
  );
};

export default About;
