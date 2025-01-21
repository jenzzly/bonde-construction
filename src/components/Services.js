import React from 'react';
import ServiceCard from './ServiceCard';
import { Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Building2}
          title="Residential Construction"
          description="We build high-quality, sustainable homes designed for modern living, focusing on energy efficiency and lasting value."
          imageSrc="https://www.procompare.co.za/media/image-gallery/za/cache/house-south-africa_966.webp"
        />
        <ServiceCard
          icon={Building}
          title="Commercial Construction"
          description="We deliver functional, aesthetically appealing commercial spaces, including offices and retail developments, on time and within budget."
          imageSrc="https://evco.co.in/wp-content/uploads/2023/04/The-Basics-of-Light-Commercial-Construction-1536x864.jpg"
        />
        <ServiceCard
          icon={Factory}
          title="Industrial Facilities"
          description="We specialize in constructing industrial facilities, such as factories and warehouses, tailored to meet operational needs."
          imageSrc="https://vsl.com/wp-content/uploads/2020/10/Industrial_facilities.png"
        />
        <ServiceCard
          icon={Wrench}
          title="Site Preparation"
          description="Our site preparation services include land clearing, excavation, grading, and soil analysis for stable foundations."
          imageSrc="https://images.squarespace-cdn.com/content/v1/585f14bf1b631b9683afdfd5/f5099633-f42c-43d9-b07e-0a3f877be423/site+preparation.jpg?format=2500w"
        />
        <ServiceCard
          icon={ClipboardCheck}
          title="Project Management"
          description="We provide end-to-end project management, ensuring timely delivery, budget control, and effective communication."
          imageSrc="https://backtobasics.edu.au/images/04-news/Construction-PM.jpg"
        />
        <ServiceCard
          icon={ClipboardCheck}
          title="Topo Mapping"
          description="Geo-information allows institutions to plan and manage resources effectively."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0a/Rwanda_sat.png"
        />
      </div>
    </div>
  </section>
);

export default Services;
