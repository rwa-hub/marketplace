import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DesktopHeader: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="hidden md:flex w-full items-center justify-between px-6 py-4 bg-[#1A0A2E] shadow-md">
      {/* Logo e Nome */}
      <div className="flex items-center gap-2">
        <div className="w-[110px] h-[100px]">
           <img src="/assets/images/logo.png" alt="Logo" className="" />
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex items-center gap-8">
        <a href="#marketplace" className="text-[#B3B6FE] hover:text-[#FAD8FD] transition-colors">
          Marketplace
        </a>
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="text-[#B3B6FE] hover:text-[#FAD8FD] transition-colors flex items-center gap-1">
            Tokenização
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-56 bg-[#33165F] rounded-lg shadow-lg py-2 z-50"
              >
                <a href="#rwa" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  RWA Tokenização
                </a>
                <a href="#properties" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  Propriedades
                </a>
                <a href="#how-it-works" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  Como Funciona
                </a>
                <a href="#tokenization-process" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  Processo de Tokenização
                </a>
                <a href="#benefits" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  Benefícios
                </a>
                <a href="#security" className="block px-4 py-2 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#541A74] transition-colors">
                  Segurança
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a href="#investments" className="text-[#B3B6FE] hover:text-[#FAD8FD] transition-colors">
          Investimentos
        </a>
        <a href="#about" className="text-[#B3B6FE] hover:text-[#FAD8FD] transition-colors">
          Sobre
        </a>
      </nav>

      {/* Botões de Ação */}
      <div className="flex items-center gap-4">
        <button className="bg-[#33165F] text-[#B3B6FE] px-4 py-2 rounded-lg hover:bg-[#541A74] hover:text-[#FAD8FD] transition-colors">
          Explorar
        </button>
        <button className="bg-gradient-to-r from-[#6C5DD3] to-[#4C8EDA] text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Connect Wallet
        </button>
      </div>
    </header>
  );
};
  
