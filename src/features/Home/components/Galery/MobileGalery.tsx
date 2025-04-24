// src/features/PropertyGallery/MobileGallery.tsx
import { PropertyCard } from './components/PropertyCard';
import { PropertyTagsFilter } from './components/PropertyTagsFilter';
import { mockData } from './mock';
import { Pagination } from './components/Pagination';
import { useState } from 'react';

export const MobileGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 
  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mockData.slice(startIndex, endIndex);

  return (
    <section className="md:hidden px-4 py-10 bg-[#1A0B2E]">
      <PropertyTagsFilter />
      <div className="flex flex-col gap-6">
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
