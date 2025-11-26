'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Sophie M.",
    review:
      "Absolutely loved my experience! The team made me feel so pampered and my hair has never looked better.",
    img:"/images/hair_do.png",
    service: "Hair Styling",
  },
  {
    name: "Emily R.",
    review:
      "The attention to detail is unmatched. My nails look flawless elegant, clean, perfect!",
    img: "/images/nails_3.jpg",
    service: "Nail Treatment",
  },
  {
    name: "Amanda",
    review:
      "I booked my bridal makeup at Beige & Blush and it was beyond anything I imagined. The team understood exactly what I wanted soft, elegant, and radiant and delivered it flawlessly. My makeup lasted through the ceremony, photos, and evening reception without needing a single touch-up. I felt confident, beautiful, and completely myself. Truly exceptional service.",
    img: "/images/makeup_2.jpg",
    service: "Bridal Makeup",
  },
  {
    name: "Charlotte P.",
    review:
      "Such a calming atmosphere. My facial treatment was heavenly. Highly recommended!",
    img: "/images/hero_model_img.png",
    service: "Makeup Service",
  },

  {
    name: "Issabella",
    review:
      "I had the full body wellness treatment and it was an absolute dream. From the calming atmosphere to the therapist’s expert technique, everything felt incredibly soothing. My muscles were relaxed, my skin felt amazing, and I left feeling refreshed and lighter. Easily one of the best treatments I’ve had in London.",
    img: "/images/body&wellness_treatment.jpg",
    service: "Body & Wellness Treatment",
  },
  {
    name: "Amelia",
    review:
      "Absolutely loved my experience! my hair has never looked better ❤️ ",
    img:"/images/hair_service.png",
    service: "Hair Styling",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-orange-100">
      <h2 className="text-5xl text-center font-bold text-black mb-16">
        Client Reviews
      </h2>

      <div className="flex overflow-x-auto space-x-10 px-10 py-10 scrollbar-hide">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="
              min-w-[340px] md:min-w-[420px]
              bg-white/40 backdrop-blur-xl 
              p-8 rounded-3xl shadow-xl 
              border border-white/20
              hover:shadow-2xl
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={item.img}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                <p className="text-sm text-amber-800">{item.service}</p>
              </div>
            </div>

            <p className="text-black/80 text-lg leading-relaxed">
              “{item.review}”
            </p>

            {/* Rating */}
            <div className="flex mt-4 text-amber-600 text-xl">
              ★★★★★
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
