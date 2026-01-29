import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../config.jsx";

// Este componente controla cada card individualmente
const ServiceCard = ({ service }) => {
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ativa quando o card está bem no centro da visão
        setIsFocused(entry.isIntersecting);
      },
      {
        // Define uma "faixa" no meio da tela (40% do topo e 40% do fundo ignorados)
        rootMargin: '-40% 0% -40% 0%',
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group p-8 transition-all duration-500 cursor-pointer touch-manipulation border
        ${isFocused 
          ? 'bg-[#C8A297] shadow-xl -translate-y-2 border-transparent scale-105' 
          : 'bg-[#FDFBFA] border-[#F5EBE8] scale-100'}
        /* Mantém o efeito de hover para quem usar no computador */
        hover:bg-[#C8A297] hover:shadow-xl hover:-translate-y-2
      `}
    >
      {/* O traço elegante */}
      <div className={`w-8 h-[2px] mb-6 transition-colors duration-500
        ${isFocused ? 'bg-white' : 'bg-[#C8A297] group-hover:bg-white'}`}>
      </div>
      
      {/* Título */}
      <h3 className={`text-lg font-medium mb-4 transition-colors duration-500
        ${isFocused ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}>
        {service.name}
      </h3>
      
      {/* Descrição */}
      <p className={`text-sm leading-relaxed transition-colors duration-500
        ${isFocused ? 'text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  const { services } = siteConfig;

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-gray-800 tracking-[0.2em] uppercase mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-gray-500 font-light italic">
            Especialidades e demandas atendidas
          </p>
        </div>

        {/* Grid chamando o novo componente inteligente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;