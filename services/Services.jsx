'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Scissors } from 'lucide-react';
import Service1 from "@/public/images/hair_service.png";
import Service2 from "@/public/images/nails_1.png";
import Service3 from "@/public/images/makeup_service.png";
import Service4 from "@/public/images/massage_station.png";
import Service5 from "@/public/images/beauty_&_skin_treatment.png";

const services = [
  {
    title: "Hair Services",
    img: Service1,
    details: {
      Cuts: ["Cut & Finish - £30", "Blow Dry (short hair) - £25", "Fringe Trim - £10"],
      Colouring: ["Full Head Highlights - £70", "Balayage - £90", "Ombre - £100"],
      Treatments: ["Hair Botox - £80", "Keratin / Brazilian Blow Dry - £120", "Scalp Treatment - £40", "Root Stretch - £60", "Olaplex (no1 & no2) - £90"]
    }
  },
  {
    title: "Nail Services",
    img: Service2,
    details: {
      Manicure: ["Classic Manicure - £25", "Gel Manicure - £35", "French Manicure - £30"],
      Pedicure: ["Classic Pedicure - £30", "Spa Pedicure - £40", "Gel Pedicure - £45"],
      Extensions: ["Acrylic Full Set - £50", "Gel Extensions - £55"]
    }
  },
  {
    title: "Makeup Services",
    img: Service3,
    details: {
      Bridal: ["Bridal Makeup - £150", "Bridesmaid Makeup - £80", "Trial Session - £60"],
      Events: ["Party Makeup - £50", "Photoshoot Makeup - £70", "Makeup Consultation - £30"],
      Packages: ["Makeup + Hair Styling - £180", "Full Glam Package - £200"]
    }
  },
  {
    title: "Beauty & Skin Treatments",
    img: Service5,
    details: {
      Facials: ["Classic Facial - £50", "Anti-Aging Facial - £70", "Brightening Facial - £60"],
      Waxing: ["Full Leg Wax - £40", "Half Leg Wax - £25", "Eyebrow Wax - £10", "Underarm Wax - £15"],
      Skincare: ["Microdermabrasion - £80", "Chemical Peel - £90", "Acne Treatment - £70"]
    }
  },
  {
    title: "Body & Wellness Treatments",
    img: Service4,
    details: {
      Massages: ["Swedish Massage - £60", "Deep Tissue Massage - £70", "Hot Stone Massage - £80"],
      Spa: ["Body Scrub - £50", "Body Wrap - £60", "Aromatherapy - £70"],
      Wellness: ["Reflexology - £50", "Reiki Healing - £65", "Detox Therapy - £75"]
    }
  },
];


const Services = () => {

  const [selectedService, setSelectedService] = useState(null)
  return (
    <section className="bg-gradient-to-b from-orange-50 to-stone-100 py-16">
      <h1 className="text-5xl text-black font-bold text-center mb-12">
        Our Services
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 md:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedService(service)}
            className="rounded-3xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={400}
                className="object-cover w-full h-64"
                placeholder="blur"
              />
            </motion.div>

            <div className="py-6 text-center">
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* model */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white rounded-2xl p-6 w-11/12 max-w-md relative"
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold"
              onClick={() => setSelectedService(null)} 
            >
              &times;
            </button>

            <Image
              src={selectedService.img}
              alt={selectedService.title}
              width={800}
              height={800}
              className="object-cover w-96 h-64 rounded-lg mb-4"
              placeholder="blur"
            />

            <h2 className="text-2xl text-black font-bold mb-2">{selectedService.title}</h2>
            {Object.entries(selectedService.details).map(([category, items], index) => (
              <div 
                key={index}
                className="mb-4"
              >
                <h3 className="text-zinc-600 font-semibold">{category}</h3>
                <ul className="text-black mt-2">
                  {items.map((item, i) => (
                    <li className="flex gap-2" key={i}><Scissors className="text-black" size={15} />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;
