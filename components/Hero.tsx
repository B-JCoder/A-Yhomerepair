"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
export default function HeroSection() {
return (
    <section className="py-10 mt-14 sm:mt-16 lg:mt-0 bg-black">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-start text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
          <h1 className="font-extrabold leading-tight text-white text-4xl sm:text-5xl lg:text-6xl">
            Reliable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-yellow-600">
              Air & Repair
            </span>{" "}
            Services You Can Trust
          </h1>
          <p className="text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
            At{" "}
            <span className="font-semibold text-yellow-400">
              A & Y’s Air and Repairs Company
            </span>
            , we provide expert air conditioning, heating, and repair
            solutions across Phoenix, Scottsdale, Mesa, Glendale, and
            Surprise. Our mission is to keep your home and business running
            smoothly, with fast, professional service every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <Link
              href="#services"
              className="px-6 h-12 rounded-3xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold duration-300 ease-linear flex items-center justify-center w-full sm:w-auto"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="px-6 h-12 rounded-3xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold duration-300 ease-linear flex items-center justify-center w-full sm:w-auto"
            >
              Book a Call
            </Link>
          </div>

          {/* Trust Badge / Placeholder */}
          <div className="mt-5 flex items-center justify-center flex-wrap gap-6 lg:justify-start w-full">
            <span className="text-gray-400 text-sm">Trusted across Arizona</span>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
          <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-4 border-yellow-600 z-30 shadow-xl">
            <Image
              src="/images/hvac-repair.jpg"
              alt="HVAC repair service"
              width={1300}
              height={1300}
              className="w-full h-full object-cover z-30"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-2 border-yellow-400 z-10 shadow-lg">
            <Image
              src="/images/air-conditioning-install.jpg"
              alt="Air conditioning installation"
              width={1300}
              height={1300}
              className="z-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}