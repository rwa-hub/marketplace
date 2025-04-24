import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tokenizationOpen, setTokenizationOpen] = useState(false);

  const toggleTokenization = () => {
    setTokenizationOpen(!tokenizationOpen);
  };

  return (
    <div className="md:hidden bg-[#1A0A2E] px-4 py-3 shadow-md relative z-50">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FAD8FD] to-[#B3B6FE]">
          TokenEstate
        </div>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-[#B3B6FE] hover:text-[#FAD8FD] transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full bg-[#1A0A2E] shadow-lg"
          >
            <nav className="flex flex-col">
              <a 
                href="#marketplace" 
                className="px-4 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors border-b border-[#33165F]"
              >
                Marketplace
              </a>
              
              <div className="border-b border-[#33165F]">
                <button
                  onClick={toggleTokenization}
                  className="w-full px-4 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors flex items-center justify-between"
                >
                  <span>Tokenização</span>
                  {tokenizationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                <AnimatePresence>
                  {tokenizationOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <a href="#rwa" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        RWA Tokenização
                      </a>
                      <a href="#properties" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        Propriedades
                      </a>
                      <a href="#how-it-works" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        Como Funciona
                      </a>
                      <a href="#tokenization-process" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        Processo de Tokenização
                      </a>
                      <a href="#benefits" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        Benefícios
                      </a>
                      <a href="#security" className="block px-8 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors">
                        Segurança
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="#investments" 
                className="px-4 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors border-b border-[#33165F]"
              >
                Investimentos
              </a>
              <a 
                href="#about" 
                className="px-4 py-3 text-[#B3B6FE] hover:text-[#FAD8FD] hover:bg-[#33165F] transition-colors border-b border-[#33165F]"
              >
                Sobre
              </a>
            </nav>

            <div className="p-4 flex flex-col gap-3 border-t border-[#33165F]">
              <button className="w-full bg-[#33165F] text-[#B3B6FE] px-4 py-2 rounded-lg hover:bg-[#541A74] hover:text-[#FAD8FD] transition-colors">
                Explorar
              </button>
              <button className="w-full bg-gradient-to-r from-[#6C5DD3] to-[#4C8EDA] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

