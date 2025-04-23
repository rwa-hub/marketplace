
export const DesktopHeader: React.FC = () => {
    return (
      <div className="hidden md:flex w-full items-center justify-between px-4 py-3 bg-[#14042C] shadow-md">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          TokenEstate
        </div>
        <button className="bg-gradient-to-r from-[#6C5DD3] to-[#4C8EDA] text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition">
          Connect Wallet
        </button>
      </div>
    );
  };
  
