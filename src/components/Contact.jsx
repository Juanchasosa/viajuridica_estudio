import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contacto</h2>
                    <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Estamos aquí para ayudarte. Contactanos para una consulta personalizada
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <MapPin className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-800">Dirección</h4>
                                        <p className="text-gray-600">CORRO 661, 2° PISO OFS 6/10</p>
                                        <p className="text-gray-600">Barrio Observatorio, Córdoba</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <Phone className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-800">Teléfonos</h4>
                                        <p className="text-gray-600">Fijo: (0351) 423-8987</p>
                                        <p className="text-gray-600">Cel: 351 623-1234</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <Mail className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-800">Email</h4>
                                        <p className="text-gray-600">viajuridica_estudio@yahoo.com.ar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-900 text-white p-8 rounded-2xl">
                            <h4 className="text-xl font-bold mb-4">Horarios de Atención</h4>
                            <div className="space-y-2 text-blue-200">
                                <p>Lunes a Viernes: 9:00 - 18:00</p>
                                <p>Sábados: 9:00 - 13:00</p>
                                <p className="font-medium text-white mt-4">Consultas de emergencia las 24 horas</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                                <input 
                                type="text" 
                                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input 
                                type="email" 
                                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                                <input 
                                type="tel" 
                                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                placeholder="Tu número de teléfono"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Área de Consulta</label>
                                <select className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                                    <option>Selecciona un área</option>
                                    <option>Civil General</option>
                                    <option>Derecho de Familia</option>
                                    <option>Derecho Laboral</option>
                                    <option>Derecho Penal</option>
                                    <option>Accidentes Laborales (ART)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                                <textarea 
                                rows="4"
                                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                placeholder="Describe brevemente tu consulta..."
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-900 text-white py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                                Enviar Consulta
                            </button>
                            <p className="text-sm text-gray-500 text-center">
                                * Este formulario se implementará en la siguiente fase para enviar emails directamente
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;