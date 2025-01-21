import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const Footer = () => (
  <footer className="bg-blue-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BONDE CONSTRUCTION</h3>
          <p className="text-blue-200">Building Rwanda's future since 2018</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-blue-200 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-blue-200">
            <p>Phone: 0788833182</p>
            <p>Email: gajujd2000@gmail.com</p>
            <p>Address: Kigali-Sonatube -Rwanda</p>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
        <p>&copy; 2024 BONDE CONSTRUCTION COMPANY LTD. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
