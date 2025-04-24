import { motion } from 'framer-motion';
import { Building2, Shield, TrendingUp, Users, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "Tokenização de Imóveis",
    description: "Transforme propriedades em tokens digitais, democratizando o acesso ao mercado imobiliário."
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Utilizamos tecnologia blockchain para garantir a segurança e transparência das transações."
  },
  {
    icon: TrendingUp,
    title: "Investimento Inteligente",
    description: "Acesse oportunidades de investimento em imóveis de alto valor com valores acessíveis."
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte de uma comunidade de investidores com interesses em comum."
  },
  {
    icon: Globe,
    title: "Mercado Global",
    description: "Invista em propriedades em diferentes regiões do mundo através da nossa plataforma."
  },
  {
    icon: Clock,
    title: "Liquidez 24/7",
    description: "Negocie seus tokens imobiliários a qualquer momento em nosso marketplace."
  }
];

const stats = [
  { value: "R$ 500M+", label: "Valor Tokenizado" },
  { value: "10K+", label: "Investidores Ativos" },
  { value: "100+", label: "Propriedades" },
  { value: "15+", label: "Países" }
];

export const About: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1A0A2E]">
      <div className="container mx-auto px-4">
        {/* Seção de Introdução */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FAD8FD] mb-4">
            Sobre a TokenEstate
          </h2>
          <p className="text-[#B3B6FE] max-w-3xl mx-auto text-lg">
            A TokenEstate é uma plataforma inovadora que democratiza o acesso ao mercado imobiliário através da tokenização de propriedades. 
            Nossa missão é tornar o investimento em imóveis mais acessível, seguro e eficiente.
          </p>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#33165F] rounded-lg p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#FAD8FD] mb-2">
                {stat.value}
              </div>
              <div className="text-[#B3B6FE]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#33165F] rounded-lg p-6 hover:bg-[#541A74] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#541A74] rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#FAD8FD]" />
                </div>
                <h3 className="text-xl font-semibold text-[#FAD8FD]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[#B3B6FE]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#FAD8FD] mb-4">
            Pronto para começar?
          </h3>
          <p className="text-[#B3B6FE] mb-8 max-w-2xl mx-auto">
            Junte-se à nossa comunidade de investidores e comece a construir seu portfólio imobiliário tokenizado hoje mesmo.
          </p>
          <button className="bg-gradient-to-r from-[#6C5DD3] to-[#4C8EDA] text-white px-8 py-3 rounded-lg shadow hover:opacity-90 transition">
            Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};
