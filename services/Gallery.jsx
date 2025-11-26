'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Service1 from "@/public/images/hair_service.png";
import Service2 from "@/public/images/nails_1.png";
// import Service3 from "@/public/images/makeup_service.png";
import Service4 from "@/public/images/hero_model_img.png";
import Service5 from "@/public/images/beauty_&_skin_treatment.png";
import Service6 from "@/public/images/happy_customer.png";
import Service7 from "@/public/images/nails_3.jpg";
import Service8 from "@/public/images/makeup_2.jpg";
import Service9 from "@/public/images/hair_do.png";

const Gallery = () => {
  const services = [
    { title: "Hair Services", img: Service1, size: "col-span-2 row-span-2" },
    { title: "Nail Services", img: Service2, size: "row-span-2" },
    // { title: "Makeup Services", img: Service3, size: "" },
    { title: "Makeup Services", img: Service9, size: "" },
    { title: "Body & Wellness Treatments", img: Service4, size: "row-span-2" },
    { title: "Beauty & Skin Treatments", img: Service5, size: "col-span-2" },
    { title: "Body & Wellness Treatments", img: Service6, size: "row-span-2" },
    { title: "Nails", img: Service7, size: "" },
    { title: "Bridal Makeup", img: Service8, size: "row-span-2" },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-stone-100 py-20">
      <h1 className="text-5xl font-bold text-center mb-16 text-black">
        Gallery
      </h1>

      {/* Collage Grid */}
      <div className="
        grid 
        grid-cols-2 
        md:grid-cols-4 
        gap-6 
        px-6 md:px-20
        auto-rows-[180px] 
        md:auto-rows-[260px]
      ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className={`
              relative 
              rounded-3xl 
              overflow-hidden 
              shadow-xl 
              group
              ${service.size}
            `}
          >
            {/* Image */}
            <Image
              src={service.img}
              alt={service.title}
              fill
              className="object-cover w-full h-full group-hover:brightness-75 transition-all"
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="
                absolute bottom-4 left-4 
                text-white text-xl 
                font-semibold 
                drop-shadow-lg
              "
            >
              {service.title}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
