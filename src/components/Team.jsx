import React from 'react';
import { Users, Phone } from 'lucide-react';

const Team = () => {
    const equipo = [
        {
            nombre: "ROSANA M. QUAGLIA",
            cargo: "Abogada Principal",
            telefono: "351 301 8301",
            especialidad: "Civil y Familia"
        },
        {
            nombre: "ELIDE SORIA",
            cargo: "Abogada Principal",
            telefono: "351 623 1234",
            especialidad: "Laboral y Civil"
        },
        {
            nombre: "RAUL A. ZALAZAR",
            cargo: "Abogado Principal",
            telefono: "351 547 0639",
            especialidad: "Penal y Civil"
        }
    ];

    return (
        <section id="equipo" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nuestro Equipo</h2>
                    <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Profesionales especializados comprometidos con la excelencia y el servicio personalizado
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {equipo.map((miembro, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{miembro.nombre}</h3>
                            <p className="text-blue-900 font-medium text-center mb-4">{miembro.cargo}</p>
                            <p className="text-gray-600 text-center mb-4">{miembro.especialidad}</p>
                            {miembro.telefono && (
                                <div className="flex items-center justify-center space-x-2 text-gray-500">
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm">{miembro.telefono}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;