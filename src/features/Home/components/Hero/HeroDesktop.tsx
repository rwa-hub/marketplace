export const DesktopHero: React.FC = () => {
  return (
<section className="relative bg-gradient-to-b from-[#16042B] to-[#1B1743] px-6 py-24 flex flex-col items-center justify-center text-center overflow-hidden">
  {/* Linha superior com glow suave */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#9f7aea] shadow-[0_6px_20px_#9f7aea] z-10" />

  {/* Conteúdo */}
  <h1 className="text-4xl font-bold text-white z-20">Invest in Real Estate Tokens</h1>
  <p className="mt-4 text-sm text-white/70 z-20">
    Own fractions of premium properties through blockchain technology
  </p>
  <input
    type="text"
    placeholder="Search properties..."
    className="mt-8 px-6 py-3 w-full max-w-md rounded-lg bg-[#2B2346] text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#6C5DD3] transition z-20"
  />
</section>

  );
};
