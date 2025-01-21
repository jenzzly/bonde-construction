import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="text-blue-600 mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Building2}
          title="Residential Construction"
          description="We build high-quality, sustainable homes designed for modern living, focusing on energy efficiency and lasting value."
          imageSrc="/api/placeholder/600/400"
        />
        <ServiceCard
          icon={Building}
          title="Commercial Construction"
          description="We deliver functional, aesthetically appealing commercial spaces, including offices and retail developments, on time and within budget."
          imageSrc="/api/placeholder/600/400"
        />
        <ServiceCard
          icon={Factory}
          title="Industrial Facilities"
          description="We specialize in constructing industrial facilities, such as factories and warehouses, tailored to meet operational needs."
          imageSrc="/api/placeholder/600/400"
        />
        <ServiceCard
          icon={Wrench}
          title="Site Preparation"
          description="Our site preparation services include land clearing, excavation, grading, and soil analysis for stable foundations."
          imageSrc="/api/placeholder/600/400"
        />
        <ServiceCard
          icon={ClipboardCheck}
          title="Project Management"
          description="We provide end-to-end project management, ensuring timely delivery, budget control, and effective communication."
          imageSrc="/api/placeholder/600/400"
        />
      </div>
    </div>
  </section>
);
