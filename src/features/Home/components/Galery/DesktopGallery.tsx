// src/features/PropertyGallery/DesktopGallery.tsx
import { PropertyCard } from './components/PropertyCard';
import { PropertyTagsFilter } from './components/PropertyTagsFilter';
import { mockData } from './mock';
import { Pagination } from './components/Pagination';
import { useState } from 'react';

export const DesktopGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mockData.slice(startIndex, endIndex);

  return (
    <section className="hidden md:block px-6 py-16 bg-[#1A0B2E]">
      <PropertyTagsFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
        {currentItems.map((prop, i) => (
          <PropertyCard key={i} {...prop} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};
