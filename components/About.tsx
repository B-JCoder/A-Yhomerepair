"use client"

import Image from "next/image"

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="space-y-4 max-w-2xl mx-auto text-center mb-16">
          <span className="text-yellow-500 text-3xl font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-yellow-500 before:rounded-full">
           About Us
          </span>
          <h1 className="font-bold text-white text-xl sm:text-4xl">
            Your comfort, our{" "}
            <span className="text-yellow-500">priority</span>
          </h1>
        </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        {/* Left Image */}
        <div className="flex md:flex-1">
          <Image
            src="/images/aboutimga&y.jpg"
            alt="Technician working on air & repairs"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg shadow-lg border border-[#FFD700]/40"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 lg:w-[54%] space-y-12 text-gray-700 dark:text-gray-300">
          <h1 className="text-black dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            Keeping Arizona Comfortable With Trusted Air & Repair Services
          </h1>
          <p>
            At <span className="font-semibold text-[#FFD700]">A&Y’s Air and Repairs Company</span>, 
            we are committed to delivering fast, reliable, and affordable air conditioning, heating, 
            and repair services. Serving Phoenix, Scottsdale, Surprise, Mesa, and Glendale — we make 
            sure your home and business run smoothly all year round.
          </p>

          {/* Mission and Vision */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="space-y-6 p-6 rounded-xl bg-white dark:bg-[#1A1A1A] border border-[#FFD700]/30 shadow-md">
              <span className="rounded-full bg-black dark:bg-white text-[#FFD700] dark:text-black w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-black dark:text-white">
                Our Mission
              </h2>
              <p>
                To provide dependable air conditioning and repair solutions 
                that keep families and businesses safe, comfortable, and stress-free.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6 p-6 rounded-xl bg-white dark:bg-[#1A1A1A] border border-[#FFD700]/30 shadow-md">
              <span className="rounded-full bg-black dark:bg-white text-[#FFD700] dark:text-black w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-black dark:text-white">
                Our Vision
              </h2>
              <p>
                To become Arizona’s most trusted air and repair company, 
                known for our professionalism, quality service, and customer care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
