"use client"

import Link from "next/link"
import { Wrench, Home, Wind, Fence, Utensils, Trash2, Droplet, Snowflake, Hammer, Layers } from "lucide-react"

const services = [
  { title: "Garage Doors", desc: "Reliable installation, repair, and maintenance for all types of garage doors.", icon: Wrench },
  { title: "Home Inspection", desc: "Detailed inspection services to ensure your property is safe and valuable.", icon: Home },
  { title: "Air Quality Test", desc: "Keep your family safe with professional indoor air quality testing.", icon: Wind },
  { title: "Fences Service", desc: "Stylish and durable fences built and repaired with precision.", icon: Fence },
  { title: "Kitchen Services", desc: "Custom kitchen remodeling and expert repair solutions.", icon: Utensils },
  { title: "Junk Removal / Inspection", desc: "Fast and eco-friendly junk removal and property inspection.", icon: Trash2 },
  { title: "Water Damage Control", desc: "Immediate solutions to prevent and repair water damage.", icon: Droplet },
  { title: "HVAC Services", desc: "Heating, ventilation, and air conditioning maintenance & repair.", icon: Snowflake },
  { title: "Roofing Repair", desc: "Durable roofing repair and replacement services.", icon: Hammer },
  { title: "Flooring Services", desc: "High-quality flooring installation and maintenance.", icon: Layers },
  { title: "Plumber", desc: "Trusted plumbing repairs, emergency fixes, and installations.", icon: Wrench },
]

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#0D0D0D] text-white relative" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] drop-shadow-md">
            Our Services
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Serving Arizona – Phoenix, Scottsdale, Surprise, Mesa, Glendale with trusted repairs & home solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1A1A1A]/70 backdrop-blur-md border border-yellow-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 hover:border-[#FFD700]"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#FFD700]/10 text-[#FFD700] mb-6 group-hover:bg-[#FFD700] group-hover:text-black transition">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-[#FFD700] transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href="#contact"
                  className="inline-block px-6 py-2.5 rounded-lg font-semibold bg-[#FFD700] text-black border-2 border-[#FFD700] hover:bg-transparent hover:text-[#FFD700] transition-all shadow-md hover:shadow-[#FFD700]/40"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#FFD700]/40 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
