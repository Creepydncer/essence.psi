import React from "react";
import { siteConfig } from "../config.jsx";
import { Instagram, MessageCircle } from "lucide-react";

const Hero = () => {
  // Pegando os dados com segurança
  const professional = siteConfig?.professional || {};
  const contact = siteConfig?.contact || {};

  // Link direto - substitua o número manualmente se preferir, ou deixe assim para puxar do config
  const whatsappUrl = `https://wa.me/55${contact.phone?.replace(/\D/g, "")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.pexels.com/photos/6598707/pexels-photo-6598707.jpeg" 
          alt="Consultório" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-xs md:text-sm tracking-[0.4em] uppercase text-gray-600 font-medium mb-6 block">
          {professional.crp || "CRP 12/18167"}
        </span>
        
        <h1 className="text-5xl md:text-8xl font-serif mb-8 text-gray-900 tracking-tight">
          {professional.name || "Jéssica"}
        </h1>
        
        <div className="w-12 h-[1px] bg-[#C8A297] mx-auto mb-8"></div>
        
        <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-2xl mx-auto italic font-light leading-relaxed">
          "{professional.tagline || "Cuidado e acolhimento"}"
        </p>
        
       <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
  {/* Botão WhatsApp Principal */}
  <a 
    href={`https://wa.me/${contact.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
   className="w-full md:min-w-[260px] flex items-center justify-center gap-3 bg-[#C8A297] text-white px-8 py-4 rounded-full font-medium hover:bg-[#A8877A] transition-all shadow-xl hover:-translate-y-1 text-base"
  >
    <MessageCircle size={22} />
    Agendar via WhatsApp
  </a>

  {/* Botão Instagram Secundário */}
  <a 
    href={`https://instagram.com/${contact.instagram}`} // Certifique-se que essa variável existe no seu config
    target="_blank"
    rel="noopener noreferrer"
   className="w-full md:min-w-[260px] flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-white transition-all shadow-lg hover:-translate-y-1 text-base"
  >
    <Instagram size={22} className="text-[#E4405F]" />
    Acompanhar no Instagram
  </a>
</div>
      </div>
    </section>
  );
};

export default Hero;