import React from "react";
import { siteConfig } from "../config.jsx";
import { Calendar, MessageSquare } from "lucide-react"; // Importando ícones

const Booking = () => {
  const { contact } = siteConfig;

  return (
    <section id="agendamento" className="py-24 bg-[#C8A297] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif mb-8 italic">Vamos iniciar sua jornada?</h2>
        <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Escolha o melhor horário para você através da nossa agenda online. 
          O atendimento é seguro, sigiloso e acolhedor.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={contact.calendlyUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white text-[#C8A297] px-10 py-4 rounded-full font-medium hover:bg-[#F5EBE8] transition-all shadow-xl text-lg group"
          >
            <Calendar size={20} className="group-hover:scale-110 transition-transform" />
            Ver Horários na Agenda
          </a>
          <a 
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-[#C8A297] transition-all text-lg"
          >
            <MessageSquare size={20} />
            Dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;