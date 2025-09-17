"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Anderson R.",
    location: "Scottsdale, AZ",
    image: "/images/sidebiew.webp",
    review:
      "A&Y’s Air and Repairs did an outstanding job with our garage door and HVAC service. Professional, quick, and super friendly. Highly recommend their team if you want reliable repairs with top-notch service!",
  },
  {
    name: "Maria S.",
    location: "Phoenix, AZ",
    image: "/images/sidebiew.webp",
    review:
      "We had water damage, and their team came right away. They handled everything with care and fixed the issue better than expected. Truly lifesavers!",
  },
  {
    name: "David P.",
    location: "Glendale, AZ",
    image: "/images/sidebiew.webp",
    review:
      "Super professional and affordable! They repaired our roof and also inspected the air quality. Couldn’t have asked for better service.",
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        {/* Section Title */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
            What Our Clients Say
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Real feedback from happy customers across Arizona
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative flex flex-col">
          <div className="p-8 md:p-10 w-full mx-auto max-w-4xl rounded-2xl bg-black text-white border border-yellow-500/40 shadow-xl flex flex-col items-center justify-center text-center space-y-6 transition-all duration-500">
            {/* Avatar */}
            <Image
              src={testimonials[currentIndex].image}
              width={120}
              height={120}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 object-cover rounded-full border-4 border-yellow-500 shadow-lg"
            />

            {/* Author Info */}
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">
                {testimonials[currentIndex].name}
              </h2>
              <p className="text-yellow-400 font-medium">
                {testimonials[currentIndex].location}
              </p>
            </div>

            {/* Review Text */}
            <p className="font-medium text-gray-200 max-w-2xl leading-relaxed">
              “{testimonials[currentIndex].review}”
            </p>

            {/* Stars */}
            <div className="mx-auto flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
            </div>
          </div>

          {/* Prev Button */}
          <button
            onClick={prevTestimonial}
            aria-label="Prev Button"
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full text-black shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            aria-label="Next Button"
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 p-4 rounded-full text-black shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-10">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`cursor-pointer w-3 h-3 rounded-full transition ${
                  idx === currentIndex
                    ? "bg-yellow-500"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
