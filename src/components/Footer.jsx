import React from "react";
import { siteConfig, messages } from "../config.jsx";
import { Instagram, MessageCircle, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const { professional, contact, location } = siteConfig;

  return (
    <footer className="py-16 bg-[#FDFBFA] border-t border-[#F5EBE8]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Identidade */}
          <div className="text-left">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">{professional.name}</h3>
            <p className="text-sm text-gray-500 tracking-wider mb-2">{professional.title}</p>
            <p className="text-xs text-gray-400">{professional.crp}</p>
            <p className="mt-4 text-sm italic text-gray-500">{professional.tagline}</p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="text-left">
            <h4 className="font-medium text-gray-700 mb-6 uppercase text-xs tracking-widest font-sans">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li><a href="#" className="hover:text-[#C8A297] transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#C8A297] transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-[#C8A297] transition-colors">Especialidades</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="text-left">
            <h4 className="font-medium text-gray-700 mb-6 uppercase text-xs tracking-widest font-sans">Contato</h4>
            <div className="text-sm text-gray-500 space-y-4 font-light">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C8A297]" /> 
                {location.city} - {location.state}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#C8A297]" /> 
                {contact.email}
              </p>
              <div className="flex gap-4 pt-4">
                <a href={`https://instagram.com/${contact.instagram}`} target="_blank" className="w-10 h-10 rounded-full bg-[#F5EBE8] flex items-center justify-center text-[#C8A297] hover:bg-[#C8A297] hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" className="w-10 h-10 rounded-full bg-[#F5EBE8] flex items-center justify-center text-[#C8A297] hover:bg-[#C8A297] hover:text-white transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white p-8 rounded-3xl border border-[#F5EBE8] text-center mb-12">
          <p className="text-xs text-gray-400 leading-relaxed italic max-w-2xl mx-auto">
            {messages.disclaimer}
          </p>
        </div>

        {/* Créditos com quebra de linha */}
        <div className="text-center text-[10px] text-gray-500 uppercase tracking-widest font-sans">
          <p>© {new Date().getFullYear()} {professional.name}. Todos os direitos reservados.</p>
          <p className="mt-2 text-[9px] opacity-180 italic">Desenvolvido com carinho por Nio Apps.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;