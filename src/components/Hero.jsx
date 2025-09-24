import React from 'react';
import { Scale, Clock, Phone, Users, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
    return (
        <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
            
            <div className="relative container mx-auto px-4 py-20 min-h-screen flex items-center">
                <div className="max-w-3xl">
                    <div className="mb-6">
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-6">
                            <Scale className="w-4 h-4" />
                            <span>Estudio Jurídico Especializado</span>
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        VIAJURIDICA
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                        Ofrecemos servicios de asesoramiento jurídico especializado con más de 15 años de experiencia. 
                        Nuestro compromiso es brindar soluciones efectivas y personalizadas para cada cliente.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                        onClick={() => scrollToSection('contacto')}
                        className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
                        >
                            <span>Consulta Gratuita</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                        onClick={() => scrollToSection('servicios')}
                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all duration-300"
                        >
                            Nuestros Servicios
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                        <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-blue-300" />
                            <span className="text-sm">Atención 24/7</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-blue-300" />
                            <span className="text-sm">Consulta Inmediata</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-blue-300" />
                            <span className="text-sm">Equipo Especializado</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-white/70" />
            </div>
        </section>
    );
};

export default Hero;