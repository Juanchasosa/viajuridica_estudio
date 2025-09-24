import React from 'react';
import { FileText, Users, Scale, Shield } from 'lucide-react';

const Services = ({ scrollToSection }) => {
    const especialidades = [
        {
            title: "Civil General",
            description: "Daños y perjuicios, contratos, alquileres y todo tipo de asuntos civiles.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: "Derecho de Familia",
            description: "Divorcios, custodia, alimentos, régimen de visitas y cuestiones familiares.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Derecho Laboral",
            description: "Conflictos laborales, despidos, accidentes de trabajo y ART.",
            icon: <Scale className="w-8 h-8" />
            },
        {
            title: "Derecho Penal",
            description: "Defensa penal en todas las instancias y procedimientos.",
            icon: <Shield className="w-8 h-8" />
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Especialidades</h2>
                    <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Brindamos asesoramiento integral en diversas áreas del derecho con un enfoque personalizado y profesional
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {especialidades.map((especialidad, index) => (
                        <div key={index} className="group bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {especialidad.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{especialidad.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{especialidad.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Necesitas Asesoramiento Especializado?</h3>
                        <p className="text-blue-200 mb-8 text-lg">
                        Accidentes y enfermedades laborales ART - Consulta especializada en casos complejos
                        </p>
                        <button 
                            onClick={() => scrollToSection('contacto')}
                            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                            Contactar Ahora
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;