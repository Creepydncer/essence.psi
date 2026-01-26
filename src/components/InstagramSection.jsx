import React from "react";
import { siteConfig } from "../config.jsx";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const { instagram, contact } = siteConfig;
  
  if (!instagram.showSection) return null;

  const getEmbedLink = (url) => {
    try {
      const baseUrl = url.split('?')[0]; 
      const cleanUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
      return `${cleanUrl}embed/`;
    } catch (e) {
      return url;
    }
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-800 mb-4 italic">Pílulas de Conhecimento</h2>
          <p className="text-gray-500 font-light tracking-widest text-xs uppercase">Acompanhe no Instagram</p>
        </div>
        
        {/* Grid ajustado para 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Mudamos o slice para (0, 3) para aceitar 3 vídeos */}
          {instagram.reels.slice(0, 3).map((link, index) => (
            <div key={index} className="w-full aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl bg-white border-[8px] border-white ring-1 ring-gray-100">
              <iframe
                src={getEmbedLink(link)}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href={`https://instagram.com/${contact.instagram}`}
            target="_blank"
            className="inline-flex items-center gap-2 text-[#C8A297] border-b border-[#C8A297]/30 pb-1 hover:text-[#A8877A] transition-all font-medium italic"
          >
            <Instagram size={18} />
            Ver mais no @{contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;