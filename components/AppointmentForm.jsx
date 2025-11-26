"use client";
import React from "react";
import { motion } from "framer-motion";


const AppointmentForm = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-amber-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10"
      >
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-black mb-6">
          Book Your Visit
        </h2>
        <p className="text-center text-stone-600 mb-8">
          A personalised beauty experience, crafted just for you.
        </p>

        {/* FORM */}
        <form className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium text-stone-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium text-stone-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 rounded-xl text-black border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-medium text-stone-700">Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 07123 456789"
              className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-col">
            <label className="font-medium text-stone-700">Select Service</label>
            <select
              className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            >
              <option>Hair Styling</option>
              <option>Nail Treatment</option>
              <option>Bridal Makeup</option>
              <option>Body Massage</option>
              <option>Skin Treatment</option>
            </select>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-medium text-stone-700">Preferred Date</label>
              <input
                type="date"
                className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-stone-700">Preferred Time</label>
              <input
                type="time"
                className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="font-medium text-stone-700">Notes</label>
            <textarea
              placeholder="Tell us anything you'd like us to know…"
              rows={4}
              className="mt-1 text-black rounded-xl border border-stone-300 p-3 focus:ring-2 focus:ring-amber-500 outline-none"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-amber-700 text-white rounded-full shadow-md font-medium hover:bg-amber-800 transition-all"
            >
              Reserve Your Slot
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default AppointmentForm;
