import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isOpen, setIsOpen }) => (
  <nav className="bg-blue-900 text-white fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 font-bold text-xl">BONDE CONSTRUCTION</div>
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden pb-4">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 hover:text-blue-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;
