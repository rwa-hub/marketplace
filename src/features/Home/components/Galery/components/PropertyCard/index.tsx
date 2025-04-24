// src/features/PropertyGallery/components/PropertyCard.tsx
import { MetricBadge } from "../MetricBadge";

interface PropertyCardProps {
  imageUrl: string;
  title: string;
  location: string;
  tokenPrice: string;
  annualYield: string;
  minInvestment: string;
  progress: number;
  totalTokens: number;
  availableTokens: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  title,
  location,
  tokenPrice,
  annualYield,
  minInvestment,
  progress,
  totalTokens,
  availableTokens,
}) => {
  return (
    <div className="relative group bg-[#1B1743] border border-[#2C254C] shadow-xl rounded-2xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(57,208,216,0.3)] flex flex-col h-full">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none z-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(57,208,216,0.15),transparent_70%)]" />

      {/* Imagem fixa */}
      <div className="w-full h-[250px] shrink-0">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Conteúdo */}
      <div className="p-5 space-y-4 relative z-10 flex flex-col flex-1 justify-between">
        {/* Título + Localização */}
        <div>
          <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-[#B1B0D5]">{location}</p>
        </div>

        {/* Métricas */}
        <div className="flex justify-between gap-2">
          <MetricBadge label="TOKEN PRICE" value={`$${tokenPrice}`} color="blue" />
          <MetricBadge label="ANNUAL YIELD" value={annualYield} color="purple" />
          <MetricBadge label="MIN INVESTMENT" value={`$${minInvestment}`} color="cyan" />
        </div>

        {/* Progresso */}
        <div>
          <div className="text-xs text-[#B1B0D5] mb-1">Token Progress</div>
          <div className="w-full bg-[#2C254C] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00C2FF] to-[#8E57FF]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-[#B1B0D5] mt-1">
            {availableTokens} / {totalTokens} tokens available
          </div>
        </div>

        {/* Botão */}
        <button className="w-full mt-3 bg-gradient-to-r from-[#da2eef] via-[#2b6aff] to-[#39d0d8] hover:opacity-90 transition text-white font-medium py-2 rounded-lg text-sm shadow-[0_0_15px_rgba(57,208,216,0.3)]">
          Buy Tokens
        </button>
      </div>
    </div>
  );
};
