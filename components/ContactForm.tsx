"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Globe, Facebook, Twitter } from "lucide-react"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    alert("✅ Thank you! Our team will contact you shortly.")
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-white">
          Get a <span className="text-[#FFD700]">Quote</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-black/40 backdrop-blur-lg p-8 shadow-xl rounded-2xl border border-[#FFD700] space-y-6 text-white"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            />

            {/* Service Select */}
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              required
            >
              <option value="" className="text-black">Select Service</option>
              <option className="text-black">Garage Doors</option>
              <option className="text-black">Home Inspection</option>
              <option className="text-black">Air Quality Test</option>
              <option className="text-black">Fences Service</option>
              <option className="text-black">Kitchen Services</option>
              <option className="text-black">Junk Removal / Inspection</option>
              <option className="text-black">Water Damage Control</option>
              <option className="text-black">HVAC Services</option>
              <option className="text-black">Roofing Repair</option>
              <option className="text-black">Flooring Services</option>
              <option className="text-black">Plumber</option>
            </select>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Additional Notes"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent border rounded-lg border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] h-32"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#FFD700] text-black font-semibold rounded-lg border border-[#FFD700] hover:bg-black hover:text-[#FFD700] transition"
            >
              Get a Quote
            </button>
          </form>

          {/* Right - Info */}
          <div className="bg-black/40 backdrop-blur-lg border border-[#FFD700] rounded-2xl p-8 shadow-xl space-y-6 text-white">
      {/* Title */}
      <h3 className="text-2xl font-semibold">
        Contact <span className="text-[#FFD700]">A7Y Repair</span>
      </h3>
      <p className="text-gray-300">
        Need reliable home & repair services? Book an appointment now – we’ll take care of everything.
      </p>

      {/* Contact Details */}
      <div className="space-y-4">
        <p className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[#FFD700]" />
          <span>4102 Osborn Rd, Arizona</span>
        </p>
        <p className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#FFD700]" />
          <span>Andersonrealvarezcre@gmail.com</span>
        </p>
        <p className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#FFD700]" />
          <span>602-312-3957</span>
        </p>
      </div>

      {/* Socials */}
      <div className="flex space-x-5 pt-4">
        <a href="#" className="p-2 rounded-full bg-white/10 border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-black transition">
          <Globe className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-white/10 border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-black transition">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="p-2 rounded-full bg-white/10 border border-[#FFD700]/40 hover:bg-[#FFD700] hover:text-black transition">
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
        </div>
      </div>
    </section>
  )
}
