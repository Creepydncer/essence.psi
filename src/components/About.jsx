import React from "react";
import { siteConfig } from "../config.jsx";

const About = () => {
  const { professional, images, ownerName } = siteConfig;

  return (
    <section className="relative z-10 py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Lado da Foto */}
          <div className="w-full md:w-1/2 relative">
            {/* Elemento decorativo atrás da foto */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#F5EBE8] rounded-full blur-3xl opacity-60 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-gray-100">
              <img 
                src={images.profile} 
                alt={ownerName}
                className="w-full h-[800px] object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"; // Fallback caso o link do insta expire
                }}
              />
            </div>

            {/* Selo flutuante ou detalhe */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-[#C8A297] font-serif italic text-lg leading-tight">
                Cuidado & <br /> Acolhimento
              </p>
            </div>
          </div>

          {/* Lado do Texto */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2 italic">
              Sobre mim
            </h2>
            <p className="text-[#C8A297] font-light tracking-[0.2em] uppercase text-sm mb-8">
              Psicologia Clínica
            </p>
            
            <div className="w-16 h-[1px] bg-[#C8A297] mb-8"></div>
            
            <div className="text-gray-600 leading-relaxed font-light space-y-6 text-lg">
              {professional.about.split('\n').map((paragraph, i) => (
                <p key={i} className="first-letter:text-2xl first-letter:font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-gray-400 italic font-serif">CRP 12/18167</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;