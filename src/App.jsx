import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import InstagramSection from './components/InstagramSection'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBFA] text-[#4A4A4A] relative">
      
      {/* Camada de Fundo - Formas Coloridas */}
   <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
  {/* Forma 1: Topo Esquerda */}
  <div className="absolute -top-10 -left-10 w-[450px] h-[450px] bg-[#C8A297] rounded-full blur-[60px] opacity-40"></div>
  
  {/* Forma 2: Meio Direita */}
  <div className="absolute top-[40%] -right-20 w-[350px] h-[350px] bg-[#E5C4B8] rounded-full blur-[50px] opacity-50"></div>
  
  {/* Forma 3: Rodapé Esquerda */}
  <div className="absolute -bottom-20 left-[15%] w-[550px] h-[550px] bg-[#F5EBE8] rounded-full blur-[80px] opacity-60"></div>
</div>

      {/* Conteúdo do Site */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <InstagramSection />
        <Booking />
        <Footer />
      </div>
    </div>
  )
}

export default App