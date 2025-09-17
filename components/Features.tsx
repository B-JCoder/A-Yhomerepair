"use client"


import Video from "./Video"



const iconRender = (val: string) => {
  switch (val) {
    case "wrench":
      return (
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      )
    case "thermometer":
      return (
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
            d="M12 3a3 3 0 00-3 3v7.5a4.5 4.5 0 106 0V6a3 3 0 00-3-3z"
          />
        </svg>
      )
    case "shield-check":
      return (
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
            d="M12 3l8.485 4.243a2 2 0 011.03 1.742V11c0 5.523-4.477 10-10 10S2 16.523 2 11V8.985a2 2 0 011.03-1.742L12 3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      )
    default:
      return <>No Icon</>
  }
}

const FeatureItem = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) => {
  return (
    <div className="flex gap-5 sm:gap-6 items-start">
      <div className="min-w-max flex">
        <span className="p-4 rounded-md bg-yellow-500/10 text-yellow-500">
          {iconRender(icon)}
        </span>
      </div>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

const features = [
  {
    id: 1,
    title: "Expert HVAC Repairs",
    description:
      "From AC breakdowns to heating issues, our certified technicians provide fast, reliable repair services that keep your home or business comfortable.",
    icon: "wrench",
  },
  {
    id: 2,
    title: "Energy-Efficient Installations",
    description:
      "We specialize in installing modern air conditioning and heating systems that save energy and reduce your monthly bills.",
    icon: "thermometer",
  },
  {
    id: 3,
    title: "Trusted & Certified",
    description:
      "Our team is fully licensed and insured, ensuring safe, professional service with every job—backed by our satisfaction guarantee.",
    icon: "shield-check",
  },
]

const Features = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        {/* Heading */}
        <div className="space-y-4 max-w-2xl text-center mx-auto">
          <span className="text-yellow-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-yellow-500 before:rounded-full">
            Why Choose Us
          </span>
          <h1 className="font-bold text-white text-3xl sm:text-4xl">
            Your comfort, our{" "}
            <span className="text-yellow-500">priority</span>
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto flex flex-col md:flex-row gap-10 xl:gap-14">
          <div className="md:w-1/2 flex flex-col space-y-6">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>

          <div className="md:w-1/2 lg:flex xl:w-[45%] bg-yellow-500/10 border border-yellow-600 p-1.5 rounded-md">
            <div className="relative lg:w-full h-full">
            <Video 
  src="https://v1.pinimg.com/videos/iht/720p/f9/bd/5e/f9bd5e367ebe43983d9f6b9161be4f2a.mp4"
  className="w-full h-70 object-cover rounded-md"
  autoPlay
  loop
  muted
  playsInline
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
