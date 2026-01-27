import React from "react";
import { siteConfig } from "../config.jsx";
import { Instagram, MessageCircle } from "lucide-react"; // Importando ícones

const Booking = () => {
  const { contact } = siteConfig;

  return (
    <section id="agendamento" className="py-24 bg-[#C8A297] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif mb-8 italic">Vamos iniciar sua jornada?</h2>
        <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
         Tire suas dúvidas ou acompanhe meu trabalho nas redes sociais. O atendimento é realizado em um espaço seguro, sigiloso e acolhedor.
        </p>
        
       <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
  {/* Botão Instagram (Substituindo o "Ver Horários") */}
  <a 
    href={`https://instagram.com/${contact.instagram}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:min-w-[280px] flex items-center justify-center gap-3 bg-white text-[#C8A297] px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 text-base"
  >
    <Instagram size={20} />
    Ver meu Instagram
  </a>

  {/* Botão WhatsApp */}
  <a 
    href={`https://wa.me/${contact.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:min-w-[280px] flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all shadow-lg hover:-translate-y-1 text-base"
  >
    <MessageCircle size={20} />
    Dúvidas pelo WhatsApp
  </a>
</div>
      </div>
    </section>
  );
};

export default Booking;