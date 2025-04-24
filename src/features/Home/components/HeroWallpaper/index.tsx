import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  modalContent: {
    title: string;
    description: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/images/graph.jpg',
    title: 'Investimento Imobiliário Tokenizado',
    description: 'Acesse o mercado imobiliário de forma simples e segura através da tokenização de propriedades.',
    buttonText: 'Saiba Mais',
    modalContent: {
      title: 'Como Funciona a Tokenização',
      description: 'A tokenização permite que você invista em imóveis de alto valor através de tokens digitais, democratizando o acesso ao mercado imobiliário.'
    }
  },
  {
    id: 2,
    image: '/assets/images/wallpaper3.jpg',
    title: 'Diversificação de Investimentos',
    description: 'Diversifique sua carteira com investimentos imobiliários tokenizados de diferentes regiões.',
    buttonText: 'Saiba Mais',
    modalContent: {
      title: 'Benefícios da Diversificação',
      description: 'Com a tokenização, você pode investir em diferentes tipos de imóveis e localizações, reduzindo riscos e aumentando oportunidades.'
    }
  },
  {
    id: 3,
    image: '/assets/images/wallpaper2.png',
    title: 'Liquidez Instantânea',
    description: 'Negocie seus tokens imobiliários 24/7 em nossa plataforma segura.',
    buttonText: 'Saiba Mais',
    modalContent: {
      title: 'Mercado Secundário',
      description: 'Nossa plataforma oferece um mercado secundário robusto para você negociar seus tokens quando quiser.'
    }
  }
];

export const HeroWallpaper: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = (content: { title: string; description: string }) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E]/90 to-[#1A0B2E]/40" />
          </div>
          
          <div className="relative h-full flex flex-col justify-start pt-12 md:pt-20 px-4 md:px-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto md:mx-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#FAD8FD] mb-2 md:mb-4 text-center md:text-left">
                {slides[currentSlide].title}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-[#B3B6FE] mb-4 md:mb-8 text-center md:text-left">
                {slides[currentSlide].description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => handleButtonClick(slides[currentSlide].modalContent)}
                  className="px-4 py-2 md:px-6 md:py-3 bg-[#541A74] text-[#FAD8FD] rounded-lg hover:bg-[#6A1F8F] transition-colors text-sm md:text-base"
                >
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              currentSlide === index
                ? 'bg-[#FAD8FD]'
                : 'bg-[#B3B6FE] hover:bg-[#FAD8FD]'
            }`}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-[#1A0B2E]/90 flex items-center justify-center p-4 z-50">
          <div className="bg-[#33165F] rounded-lg p-4 md:p-6 max-w-lg w-full mx-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#FAD8FD] mb-3 md:mb-4">
              {modalContent.title}
            </h2>
            <p className="text-sm md:text-base text-[#B3B6FE] mb-4 md:mb-6">
              {modalContent.description}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 md:px-4 md:py-2 bg-[#541A74] text-[#FAD8FD] rounded-lg hover:bg-[#6A1F8F] transition-colors text-sm md:text-base"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
