"use client"

import Link from "next/link"

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 relative">
        <div className="bg-[#F5F5F5] dark:bg-[#1A1A1A] flex flex-col items-center md:flex-row md:justify-between gap-8 p-12 rounded-xl md:items-start text-center md:text-left shadow-lg border border-[#FFD700]/40">
          {/* Left Content */}
          <div className="max-w-xl space-y-3">
            <h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-white leading-snug">
              Reliable Air & Repair Services in Arizona
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              At <span className="font-semibold text-[#FFD700]">A&Y’s Air and Repairs</span>, 
              we provide top-notch repair and maintenance services across Phoenix, Scottsdale, Surprise, Mesa, and Glendale. 
              Trusted by locals, we’re here to keep your home and business running smoothly.
            </p>

            <div className="text-sm text-gray-800 dark:text-gray-400 mt-4 space-y-1">
              <p>📧 <a href="mailto:Andersonrealvarezcre@gmail.com" className="hover:underline">Andersonrealvarezcre@gmail.com</a></p>
              <p>📞 <a href="tel:6023123957" className="hover:underline">602-312-3957</a></p>
              <p>📍 4102 Osborn Rd, Arizona</p>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/about"
              className="bg-black text-[#FFD700] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#FFD700] hover:text-black border border-[#FFD700]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-[#FFD700] text-black px-6 py-3 rounded-lg font-semibold transition hover:bg-black hover:text-[#FFD700] border border-black"
            >
              Book a Service
            </Link>
          </div>
        </div>
      </div>

      {/* Background strip */}
      <div className="pt-32 -mt-16 bg-black dark:bg-[#111]" />
    </section>
  )
}

export default CtaSection
