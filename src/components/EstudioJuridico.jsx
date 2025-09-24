import React from 'react';
import { Header, Hero, About, Services, Team, Contact, Footer } from '.';
import { useActiveSection } from '../hooks/useActiveSection';

const ViaJuridicaWebsite = () => {
    const { activeSection, scrollToSection } = useActiveSection();

    return (
        <div className="min-h-screen bg-white">
            <Header activeSection={activeSection} scrollToSection={scrollToSection} />
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Services scrollToSection={scrollToSection} />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default ViaJuridicaWebsite;