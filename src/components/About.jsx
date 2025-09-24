import React from 'react';

const About = () => {
    const stats = [
        { number: "15+", label: "Años de Experiencia", bgColor: "bg-blue-900", textColor: "text-white" },
        { number: "500+", label: "Casos Exitosos", bgColor: "bg-white", textColor: "text-blue-900" },
        { number: "24/7", label: "Atención Continua", bgColor: "bg-white", textColor: "text-blue-900" },
        { number: "100%", label: "Confidencialidad", bgColor: "bg-blue-900", textColor: "text-white" }
    ];

    return (
        <section id="nosotros" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nosotros</h2>
                    <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        VIAJURIDICA es un estudio jurídico consolidado con una amplia trayectoria en el asesoramiento legal especializado
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nuestra Filosofía</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ponemos a nuestros clientes primero y desarrollamos nuestra labor privilegiando como valores 
                                fundamentales la eficacia, la creatividad y la confidencialidad, pilares esenciales en el 
                                desarrollo de los asuntos legales que requieren intervenciones especializadas.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Bajo esa premisa, acompañamos a nuestros clientes en sus necesidades, deseos y proyecciones, 
                                sirviendo de soporte a través del asesoramiento integral para sostener y potenciar sus objetivos.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className={`${stat.bgColor} p-6 rounded-xl ${stat.bgColor === 'bg-white' ? 'shadow-lg' : ''}`}>
                                <h4 className={`text-3xl font-bold mb-2 ${stat.textColor}`}>{stat.number}</h4>
                                <p className={stat.bgColor === 'bg-blue-900' ? 'text-blue-200' : 'text-gray-600'}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;