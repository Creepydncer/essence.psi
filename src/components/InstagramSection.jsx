import React, { useState } from "react";
import { siteConfig } from "../config.jsx";
import { Instagram } from "lucide-react";

// SUB-COMPONENTE: Gerencia a lógica de "Ver Mais" individualmente
const DepoimentoCard = ({ foto, nome, texto }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limite = 250; // Quantidade de letras para exibir antes de cortar

  const precisaCortar = texto.length > limite;
  const textoExibido = isExpanded || !precisaCortar 
    ? texto 
    : texto.substring(0, limite) + "...";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-all h-fit">
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <img 
            src={foto} 
            alt={nome} 
            className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm" 
          />
          <div>
            <h4 className="font-bold text-sm text-slate-900 leading-none mb-1">{nome}</h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold text-[9px]">Avaliação Local</p>
          </div>
        </div>
        {/* Certifique-se de que googlelogo.webp esteja na pasta public */}
        <img src="/googlelogo.webp" alt="Google" className="w-5 h-5 opacity-80" />
      </div>
      
      <div className="flex text-[#fbbc04] text-xs">★★★★★</div>

      <p className="text-slate-600 text-[14px] leading-relaxed italic transition-all duration-300">
        "{textoExibido}"
      </p>

      {precisaCortar && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-emerald-700 text-[11px] font-bold uppercase tracking-wider mt-2 text-left hover:underline"
        >
          {isExpanded ? "Ler menos" : "Ler depoimento completo"}
        </button>
      )}
    </div>
  );
};

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
    <>
      {/* SEÇÃO INSTAGRAM */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4 italic">Pílulas de Conhecimento</h2>
            <p className="text-gray-500 font-light tracking-widest text-xs uppercase">Acompanhe no Instagram</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#C8A297] border-b border-[#C8A297]/30 pb-1 hover:text-[#A8877A] transition-all font-medium italic"
            >
              <Instagram size={18} />
              Ver mais no @{contact.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="py-16 bg-[#F8F5F2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-slate-800 mb-2 italic">Depoimentos</h2>
            <p className="text-slate-500 text-sm italic">O que dizem os pacientes no Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* DEPOIMENTO DA KARLA (GIGANTE) */}
            <DepoimentoCard 
              foto="/karlaresendevieira.webp"
              nome="Karla Resende Vieira"
              texto="Dentre as várias alegrias que tive na vida, Jéssica foi uma das maiores. Ela foi meu primeiro contato com a psicoterapia e com a abordagem TCC. Através do seu trabalho admirável, do seu cuidado e do seu olhar atento, desenvolvi, entre outras coisas, a capacidade de vigiar meus pensamentos e questioná-los (identifico pensamentos sabotadores como ninguém! kk), a filtrar o comportamento do outro, estabelecer metas minimizadas e administrar melhor períodos ansiosos com técnicas de respiração — o que mais tarde me fez descobrir como a meditação é importante para mim, e entender que o descanso é necessidade, não recompensa.

Ao longo do processo terapêutico, aprendi a lidar com o medo de encerrar ciclos (finalmente consegui sair do meu emprego tóxico), a não sentir culpa ao dizer não, a impor limites e a falar sobre como me sinto. Aprendi a me validar, uai! Perdi a necessidade de me responsabilizar pelos problemas dos outros, mesmo que sejam familiares. Tento visualizar as coisas pela realidade e não pela minha expectativa (embora eu falhe, kk). Mas hoje entendo o padrão da minha família e me reconheço no meu papel de filha, irmã, namorada e amiga. Eu sou quem eu sou, sem querer nada em troca, sem influência externa; apenas procuro ser quem faz sentido e bem para mim, nas qualidades que admiro no ser humano.

Mudou também a minha forma de enfrentar momentos infelizes, que são inevitáveis. Aprendi a não os reprimir e a não fugir dos sentimentos e emoções que eles trazem. Saber onde dói e o porquê faz com que a ferida seja curada da forma correta e no tempo certo. As coisas têm a importância que damos a elas. Eu vejo o que precisa ser visto no momento adequado.

Em pouco tempo percebi o quanto evoluí na forma de me posicionar diante das situações; minha maneira de analisar e pensar mudou. Sou mais positiva, clara, sensata e honesta comigo, com meus sentimentos e com minhas vontades. Permito-me ser mais carinhosa, afetuosa e interessada nas pessoas, e tenho aceitado melhor a possibilidade de uma conexão genuína com elas. Ainda tenho apego evitativo, mas tenho salvado o meu desejo...

Ou seja, Jéssica me ajudou a construir um lugar confortável dentro de mim. Hoje tenho compromisso comigo, me coloco em prioridade e tento seguir melhor meus objetivos e desejos, relembrando o que me motiva a realizá-los. A cura não é linear. Ainda sou muito instável, porém agora tenho as ferramentas certas para trabalhar melhor as nuances da vida. Posso ser melhor comigo e com quem eu amo. Sempre me lembro de Jéssica como parte de quem sou hoje, pois foi ela quem me deu todas essas ferramentas. Abraços!"
            />

            {/* DEPOIMENTO 2 */}
            <DepoimentoCard 
              foto="/thavini.webp"
              nome="Thávini Freitas"
              texto="Mesmo tendo sido um acompanhamento terapêutico curto, ele marcou a minha vida de um jeito que eu nunca vou esquecer. Você me ajudou a enxergar caminhos quando eu só via confusão, me fez acreditar de novo em coisas que eu já tinha perdido, e me tirou de um lugar interno onde eu já não sabia mais como sair sozinha. Até hoje, quando preciso pensar com calma ou tomar uma decisão importante, lembro das nossas conversas, das suas palavras e do jeito humano com que você me acolheu.
Eu agradeço com o coração transbordando de emoção e gratidão por toda a paciência, cuidado e carinho que você teve comigo. Que o seu trabalho continue tocando e transformando tantas vidas, assim como tocou e transformou a minha.
Muito obrigada, de verdade."
            />

{/* DEPOIMENTO 3 */}
<DepoimentoCard 
  foto="/anelei.webp"
  nome="Anelei"
  texto={`Jéssica sempre vai estar no meu coração e nos meus pensamentos pela forma como caminhou comigo e me ajudou a evoluir. Cada conselho e cada atividade permanecem fazendo parte dos meus dias e eu sempre serei muito grata pelo cuidado e escuta dessa Psico mais que maravilhosa que me ajudou a superar medos e olhar pra vida com mais calma. E como mencionado, deixo meu "até logo", pra em breve poder sentar em sessão e seguir evoluindo 🤍`}
/>

            {/* DEPOIMENTO 4 */}
            <DepoimentoCard 
              foto="/suelentopper.webp"
              nome="Suélen Topper"
              texto="Fiz meu processo terapêutico com a Jé, e só tenho coisas boas pra dizer. Sempre muito atenciosa, acolhedora e humana. Me ajudou muito em fases importantes da minha vida e sempre me senti à vontade nas sessões. Mesmo tendo encerrado a terapia, levo comigo tudo que aprendi. Profissional maravilhosa, recomendo demais!"
            />

          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramSection;