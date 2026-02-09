// ============================================
// CONFIGURAÇÃO DO SITE - EDITE AQUI!
// ============================================

export const siteConfig = {
  // DADOS PROFISSIONAIS
  professional: {
    name: "Jéssica Amaro",
    title: "Psicóloga Clínica",
    crp: "CRP 12/18167",
    specialties: ["Neuropsicóloga", "Terapia Cognitivo Comportamental"],
    tagline: "Uma psi tão humana quanto você ",
    
    // SOBRE (edite aqui o texto completo)
    about: `Sou psicóloga em Caçador/SC, atuo com a Terapia Cognitivo-Comportamental (TCC) e sou especialista em Neuropsicologia. 
    
    Acredito em um atendimento humanizado, onde cada paciente é acolhido em suas singularidades. Meu trabalho é baseado em evidências científicas, sempre respeitando o tempo e o espaço de cada pessoa.
    
    Atendo adolescentes, adultos e idosos, tanto presencialmente quanto  terapia online, oferecendo um ambiente seguro e acolhedor para que você possa cuidar da sua saúde mental.`,
  },

  // CONTATO
  contact: {
    whatsapp: "554999245858", // Formato: DDI + DDD + Número (sem espaços)
    instagram: "essence.psi",
    email: "contato@essencepsi.com.br", // Opcional
    calendlyUrl: "https://calendly.com/essencepsi/consulta", // Cole o link do Calendly aqui
  },

  // LOCALIZAÇÃO
  location: {
    city: "Caçador",
    state: "SC",
    address: "Rua Exemplo, 123 - Centro", // Endereço completo (opcional)
    showMap: true, // true = mostra mapa | false = esconde
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.020247859869!2d-51.02167540000001!3d-26.7756245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e6b72d607aea4f%3A0xeb45f2ad65794f99!2sPsic%C3%B3loga%20e%20Neuropsic%C3%B3loga%20J%C3%A9ssica%20Amaro%20-%20EssencePsi!5e0!3m2!1spt-BR!2sbr!4v1770299523685!5m2!1spt-BR!2sbr"
  },

  // TIPOS DE ATENDIMENTO
  serviceTypes: {
    presencial: true,
    online: true,
  },

  // ÁREAS DE ATUAÇÃO (adicione ou remova conforme necessário)
  services: [
    {
      name: "Ansiedade",
      icon: "🧠",
      description: "Tratamento para transtornos de ansiedade generalizada, fobias e preocupações excessivas."
    },
    {
      name: "Depressão",
      icon: "💭",
      description: "Acompanhamento terapêutico para sintomas depressivos e humor rebaixado."
    },
    {
      name: "Autoestima",
      icon: "✨",
      description: "Trabalho focado no autoconhecimento e fortalecimento da autoimagem."
    },
    {
      name: "Relacionamentos",
      icon: "💑",
      description: "Terapia individual ou de casal para melhorar vínculos afetivos."
    },
    {
      name: "TDAH",
      icon: "🎯",
      description: "Avaliação e acompanhamento neuropsicológico para déficit de atenção."
    },
    {
      name: "Estresse",
      icon: "🌊",
      description: "Técnicas de manejo e redução do estresse do dia a dia."
    },
    {
      name: "Luto",
      icon: "🕊️",
      description: "Acolhimento e suporte no processo de elaboração de perdas."
    },
    {
      name: "Síndrome do Pânico",
      icon: "⚡",
      description: "Tratamento especializado para crises de pânico e agorafobia."
    }
  ],

  // INSTAGRAM REELS (até 3 - cole os links dos Reels aqui)
  instagram: {
    showSection: true, // true = mostra seção | false = esconde
    reels: [
      "https://www.instagram.com/reel/DMeAZ1yuVCq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Trocar pelo link real
      "https://www.instagram.com/p/DH3Ff4ROzjn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "https://www.instagram.com/reel/DLqkOzTtbbx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      
    ]
  },

  // CORES DO SITE (mude aqui e o site inteiro muda!)
  theme: {
    primary: "#C8A297",       // Rosé/nude principal
    primaryDark: "#A8877A",   // Tom mais escuro
    primaryLight: "#F5EBE8",  // Tom clarinho para fundos
    accent: "#E5C4B8",        // Bege rosado
    text: "#4A4A4A",          // Texto principal
    textLight: "#6B6B6B",     // Texto secundário
    background: "#FDFBFA",    // Fundo off-white
  },

  // IMAGENS (cole as URLs das imagens aqui)
  images: {
    logo: "/logo.png", // Logo (se tiver)
    profile: "/perfil.webp", // Foto de perfil na seção Sobre
    officePhotos: [ // Fotos do consultório (opcional)
      "https://via.placeholder.com/600x400/F5EBE8/C8A297?text=Consultório+1",
      "https://via.placeholder.com/600x400/F5EBE8/C8A297?text=Consultório+2",
      "https://via.placeholder.com/600x400/F5EBE8/C8A297?text=Consultório+3",
    ]
  },

  // CONFIGURAÇÕES AVANÇADAS
  settings: {
    showDisclaimer: true, // Aviso CVV/SAMU no footer
    showTestimonials: false, // Seção de depoimentos (futuro)
    enableAnimations: true, // Animações suaves
  }
};

// ============================================
// MENSAGENS E TEXTOS FIXOS
// ============================================

export const messages = {
  whatsappGreeting: `Olá! Gostaria de agendar uma consulta com a ${siteConfig.professional.name}.`,
  
  disclaimer: `⚠️ Atenção: Este site não oferece atendimento imediato a pessoas em crise suicida. 
  
Em caso de crise, ligue para o CVV – 188 (24h, gratuito e sigiloso).
Em caso de emergência médica, procure o hospital mais próximo ou ligue para o SAMU – 192.`,

  bookingIntro: "Escolha a forma que preferir para agendar sua consulta:",
  
  ctaButton: "Agendar Consulta",
};

export default siteConfig;