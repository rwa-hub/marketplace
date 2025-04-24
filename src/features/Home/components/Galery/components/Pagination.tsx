import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) return pages;
    
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    return pages.slice(start - 1, end);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-lg text-sm ${
            currentPage === 1
              ? 'bg-[#33165F] text-[#B3B6FE] cursor-not-allowed'
              : 'bg-[#541A74] text-[#FAD8FD] hover:bg-[#6A1F8F]'
          }`}
        >
          Anterior
        </button>
        
        <div className="flex items-center gap-1">
          {visiblePages[0] > 1 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className="px-3 py-2 rounded-lg text-sm bg-[#33165F] text-[#B3B6FE] hover:bg-[#541A74]"
              >
                1
              </button>
              {visiblePages[0] > 2 && <span className="text-[#B3B6FE]">...</span>}
            </>
          )}
          
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-lg text-sm ${
                currentPage === page
                  ? 'bg-[#541A74] text-[#FAD8FD]'
                  : 'bg-[#33165F] text-[#B3B6FE] hover:bg-[#541A74]'
              }`}
            >
              {page}
            </button>
          ))}
          
          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                <span className="text-[#B3B6FE]">...</span>
              )}
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-2 rounded-lg text-sm bg-[#33165F] text-[#B3B6FE] hover:bg-[#541A74]"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-lg text-sm ${
            currentPage === totalPages
              ? 'bg-[#33165F] text-[#B3B6FE] cursor-not-allowed'
              : 'bg-[#541A74] text-[#FAD8FD] hover:bg-[#6A1F8F]'
          }`}
        >
          Próximo
        </button>
      </div>
      
      <div className="text-sm text-[#B3B6FE]">
        Página {currentPage} de {totalPages}
      </div>
    </div>
  );
}; 