// src/features/PropertyGallery/components/PropertyTagsFilter.tsx
import { useState } from 'react';
import clsx from 'clsx';

const filters = ['All Properties', 'Residential', 'Commercial'];

export const PropertyTagsFilter: React.FC = () => {
  const [active, setActive] = useState('All Properties');

  return (
    <div className="flex gap-3 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={clsx(
            'px-4 py-1.5 text-sm rounded-full border border-[#4B4A6A] text-white/80 transition-all',
            active === filter
              ? 'bg-[#1B1743] text-white border border-[#7F81E8]'
              : 'hover:bg-[#2A264A]'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
