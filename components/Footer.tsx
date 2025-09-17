import Link from "next/link"
import Image from "next/image"
type FooterItemProps = {
  text: string;
  link: string;
};

const FooterItem = ({ text, link }: FooterItemProps) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-[#FFD700]"
      >
        {text}
      </Link>
    </li>
  )
}

type FooterBlockItemProps = {
  title: string;
  items: { id: number; text: string; link: string }[];
};

const FooterBlockItem = ({ title, items }: FooterBlockItemProps) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <ul className="space-y-3 text-gray-300">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}

const footerBlocks = [
  {
    id: 1,
    title: "Quick Links",
    items: [
      { id: 1, text: "About Us", link: "/about" },
      { id: 2, text: "Services", link: "/services" },
      { id: 3, text: "Contact", link: "/contact" },
      { id: 4, text: "FAQ", link: "/faq" },
    ],
  },
  {
    id: 2,
    title: "Our Services",
    items: [
      { id: 1, text: "Garage Doors", link: "/services/garage-doors" },
      { id: 2, text: "Home Inspection", link: "/services/home-inspection" },
      { id: 3, text: "HVAC Services", link: "/services/hvac" },
      { id: 4, text: "Roofing Repair", link: "/services/roofing" },
    ],
  },
]

const FooterBlock = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20">
        {/* Company Info */}
        <div className="space-y-6 col-span-2">
          <Link href="/" className="text-2xl font-bold text-[#FFD700]">
            <Image
  src="/images/logo.png" // <-- place logo inside /public folder
  alt="A&Y’s Air and Repairs Logo"
  width={120} // pehle 40 tha ab 120 kar diya
  height={120}
  className="rounded-full w-28 h-28 object-contain"
/>

          </Link>
          <p className="max-w-lg text-gray-400">
            Trusted repair and inspection services across Phoenix, Scottsdale,
            Surprise, Mesa, and Glendale. Your home, our priority.
          </p>
        
        </div>

        {/* Links */}
        {footerBlocks.map((footerBlock) => (
          <FooterBlockItem key={footerBlock.id} {...footerBlock} />
        ))}

        {/* Newsletter */}
        <div className="space-y-6 col-span-2">
          <h1 className="text-lg font-semibold text-white">Stay Updated</h1>
          <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-2.5 rounded-md outline-none flex-1 bg-[#1A1A1A] text-gray-300 border border-gray-700 focus:border-[#FFD700]"
            />
            <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-[#FFD700] text-black rounded-md font-semibold hover:bg-transparent hover:text-[#FFD700] border border-[#FFD700] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-800 text-gray-400">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p>© {new Date().getFullYear()} A&Y’s Air and Repairs. All rights reserved.</p>
          </div>

          {/* Socials */}
          <div className="flex justify-center sm:justify-end w-full gap-4 text-gray-400">
            <a href="#" aria-label="facebook" className="hover:text-[#FFD700]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926..."/>
              </svg>
            </a>
            <a href="#" aria-label="linkedin" className="hover:text-[#FFD700]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65..."/>
              </svg>
            </a>
            <a href="#" aria-label="twitter" className="hover:text-[#FFD700]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003..."/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock
