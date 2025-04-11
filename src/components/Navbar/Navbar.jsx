import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menu } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-lg shadow-md rounded-full">
      <div className="flex items-center justify-between space-x-8 text-white font-medium">
        {/* Logo */}
        <div className="text-yellow-300 font-bold font-stretch-50% text-lg whitespace-nowrap">
          Snippets Showcase
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="relative group hover:text-yellow-200 transition duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-white font-medium text-center">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="block hover:text-yellow-200 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
