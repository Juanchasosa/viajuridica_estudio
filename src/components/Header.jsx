import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollToSection = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    const navigationItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'nosotros', label: 'Nosotros' },
        { id: 'servicios', label: 'Servicios' },
        { id: 'equipo', label: 'Equipo' },
        { id: 'contacto', label: 'Contacto' }
    ];

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                            <Scale className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-blue-900">VIAJURIDICA</h1>
                            <p className="text-xs text-gray-600">Estudio Jurídico</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollToSection(item.id)}
                                className={`capitalize transition-colors ${
                                activeSection === item.id 
                                    ? 'text-blue-900 font-medium' 
                                    : 'text-gray-600 hover:text-blue-900'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
                        {navigationItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollToSection(item.id)}
                                className="block w-full text-left py-2 px-4 capitalize text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;