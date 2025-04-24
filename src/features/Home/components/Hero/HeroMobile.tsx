
export const MobileHero: React.FC = () => {
    return (
      <section className="md:hidden flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-[#16042B] to-[#1B1743]">
        <h1 className="text-3xl font-bold text-white leading-tight">
          Invest in Real Estate Tokens
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Own fractions of premium properties through blockchain technology
        </p>
        <input
          type="text"
          placeholder="Search properties..."
          className="mt-6 px-5 py-3 w-full max-w-xs rounded-lg bg-[#2B2346] text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#6C5DD3] transition"
        />
      </section>
    );
  };
  
 