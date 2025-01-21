import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => (
  <div id="home" className="relative pt-16">
    <div className="bg-blue-900 text-white py-32">
      <img
        src="https://visitrwanda.com/wp-content/uploads/fly-images/3103/Visit-Rwanda-Vision-City-1920x1280.jpg"
        alt="Construction site"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Rwanda's Future
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          A leader in Rwanda's construction industry since 2018, specializing
          in residential, commercial, industrial, and infrastructure projects.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
        >
          <span>Get Started</span>
          <ChevronRight size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
