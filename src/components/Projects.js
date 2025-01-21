import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const ProjectCard = ({ title, description, features, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            <ChevronRight size={16} className="text-blue-600 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="ULK Hostels and Hospital"
          description="A transformative project combining student accommodation with modern healthcare services."
          features={[
            "Multiple hostel buildings",
            "Modern healthcare facility",
            "Energy-efficient design",
            "Advanced healthcare technology"
          ]}
          imageSrc="/api/placeholder/800/600"
        />
        <ProjectCard
          title="Glory Academy"
          description="Modern educational spaces designed to foster academic excellence."
          features={[
            "State-of-the-art classrooms",
            "Sports facilities",
            "Laboratories",
            "Eco-friendly construction"
          ]}
          imageSrc="/api/placeholder/800/600"
        />
        <ProjectCard
          title="Eden Rock Apartment Hotel"
          description="Luxury residential living merged with high-end hotel amenities."
          features={[
            "Luxury apartments",
            "Retail outlets",
            "Fitness center",
            "Rooftop lounge"
          ]}
          imageSrc="/api/placeholder/800/600"
        />
      </div>
    </div>
  </section>
);
