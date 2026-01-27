import React from "react";
import { siteConfig } from "../config.jsx";

const Services = () => {
  const { services } = siteConfig;

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-gray-800 tracking-[0.2em] uppercase mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-gray-500 font-light italic">Especialidades e demandas atendidas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-[#FDFBFA] border border-[#F5EBE8] hover:bg-[#C8A297] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              {/* O ícone/emoji some e dá lugar a um traço elegante no hover */}
              <div className="w-8 h-[1px] bg-[#C8A297] group-hover:bg-white mb-6 transition-colors"></div>
              
              <h3 className="text-lg font-medium text-gray-800 group-hover:text-white mb-4 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-sm text-gray-500 group-hover:text-white/90 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;