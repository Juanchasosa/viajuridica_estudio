import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
    const especialidades = [
        'Civil General',
        'Derecho de Familia',
        'Derecho Laboral',
        'Derecho Penal',
        'Accidentes Laborales (ART)'
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <Scale className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">VIAJURIDICA</h3>
                                <p className="text-gray-400 text-sm">Estudio Jurídico</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                        Estudio jurídico especializado con años de experiencia brindando soluciones legales integrales.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Especialidades</h4>
                        <ul className="space-y-3 text-gray-300">
                            {especialidades.map((especialidad, index) => (
                                <li key={index}>{especialidad}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Contacto</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>CORRO 661, 2° PISO OFS 6/10</p>
                            <p>Barrio Observatorio, Córdoba</p>
                            <p>Tel: (0351) 423-8987</p>
                            <p>viajuridica_estudio@yahoo.com.ar</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 VIAJURIDICA - Estudio Jurídico. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
    };

export default Footer;