

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden bg-[#14042C] px-4 py-3 shadow-md relative z-50">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
          TokenEstate
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#1C0A3E] p-4 shadow-lg">
          <button className="w-full bg-gradient-to-r from-[#6C5DD3] to-[#4C8EDA] text-white py-2 rounded-md">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

