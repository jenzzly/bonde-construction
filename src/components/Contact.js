import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="flex items-center space-x-4">
            <Phone className="text-blue-600" />
            <span>0788833182</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-blue-600" />
            <span>gajujd2000@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" />
            <span>Kigali-Sonatube -Rwanda</span>
          </div>
          <div className="mt-8">
            <img
              src="/api/placeholder/600/300"
              alt="Office location"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
