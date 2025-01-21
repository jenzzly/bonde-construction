import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';

const Navigation = ({ isOpen, setIsOpen }) => (
  <nav className="bg-blue-900 text-white fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 font-bold text-xl">BONDE CONSTRUCTION</div>

        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-300">
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

const Hero = () => (
  <div className="relative pt-16">
    <div className="bg-blue-900 text-white py-32">
      <img
        src="/api/placeholder/1920/1080"
        alt="Construction site"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building Rwanda's Future
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          A leader in Rwanda's construction industry since 2018, specializing in residential,
          commercial, industrial, and infrastructure projects.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg
                   inline-flex items-center space-x-2"
        >
          <span>Get Started</span>
          <ChevronRight size={20} />
        </a>
      </div>
    </div>
  </div>
);

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
          title="Geo Mapping"
          description="Geo-information allows institutions to plan and manage resources effectively."
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/0a/Rwanda_sat.png"
        />
      </div>
    </div>
  </section>
);

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
          imageSrc="https://ulk.ac.rw/wp-content/uploads/2024/11/HOSTEL-PICTURE-820x400.jpg"
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
          imageSrc="https://gloryacademy.ac.rw/wp-content/uploads/2023/01/unnamed-3-e1675118733623.jpg"
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
          imageSrc="https://edenrocapartmenthotel.com/wp-content/uploads/2023/11/Eden-Roc-Apartment-hotel-29.jpg"
        />
      </div>
    </div>
  </section>
);

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

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
