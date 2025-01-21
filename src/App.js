import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Building, Factory, Wrench, ClipboardCheck } from 'lucide-react';
import @components {Navigation, Hero, Services, Projects, Contact, Footer}

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
