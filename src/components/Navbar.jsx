import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/karvix.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    // { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold">K</span>
            </div> */}.
            <div className="logo-container">
                <img src={logo} alt="Logo" 
                className="logo-image w-[190px]
                            h-[60px]
                            rounded-[14px]
                            object-cover
                            border-2
                            border-white
                            shadow-[0_4px_15px_rgba(0,0,0,0.2)]
                            transition-all
                            duration-300
                            hover:-rotate-3
                            hover:scale-105"/>
            </div>
            {/* <span className="font-semibold text-gray-900">
              Karvix
            </span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-black transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-black text-white text-center hover:bg-gray-800 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;