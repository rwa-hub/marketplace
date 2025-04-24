
export const MarketPerformance = () => {
  return (
    <div
      className="p-8 rounded-lg shadow-lg w-full  mx-auto relative py-16"
      style={{ backgroundColor: "#200B34" }}
    >
      {/* Background glow effect */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at center, #541A74 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-10">
        {/* Market Performance Section */}
        <h1
          className="text-2xl font-semibold text-center mb-10"
          style={{
            color: "#FBDCFE",
            textShadow:
              "0 0 5px rgba(251, 220, 254, 0.5), 0 0 10px rgba(193, 126, 224, 0.3)",
          }}
        >
          Market Performance
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative z-10">
          {/* Total Value Locked */}
          <div
            className="p-6 rounded-lg flex flex-col items-center justify-center"
            style={{ backgroundColor: "#33165F" }}
          >
            <div className="mb-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11Z"
                  fill="white"
                />
                <path
                  d="M4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7C3 7.55 3.45 8 4 8Z"
                  fill="white"
                />
                <path
                  d="M20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold" style={{ color: "#FAD8FD" }}>
              $243M
            </div>
            <div
              className="text-xs text-center mt-1"
              style={{ color: "#FAD8FD" }}
            >
              Total Value Locked
            </div>
          </div>

          {/* Average ROI */}
          <div className="bg-indigo-800/40 p-6 rounded-lg flex flex-col items-center justify-center"  style={{ backgroundColor: "#33165F" }}> 
            <div className="mb-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 7V12L15 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="1" fill="white" />
              </svg>
            </div>
            <div className="text-2xl font-bold" style={{ color: "#FAD8FD" }}>
              12.8%
            </div>
            <div
              className="text-xs text-center mt-1"
              style={{ color: "#FAD8FD" }}
            >
              Average ROI
            </div>
          </div>

          {/* Active Investors */}
          <div className="bg-indigo-800/40 p-6 rounded-lg flex flex-col items-center justify-center"  style={{ backgroundColor: "#33165F" }}> 
            <div className="mb-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="4" stroke="white" strokeWidth="2" />
                <circle cx="15" cy="9" r="4" stroke="white" strokeWidth="2" />
                <path
                  d="M5 18C5 16.3431 6.79086 15 9 15C11.2091 15 13 16.3431 13 18"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M11 18C11 16.3431 12.7909 15 15 15C17.2091 15 19 16.3431 19 18"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold" style={{ color: "#FAD8FD" }}>
              15.4K
            </div>
            <div
              className="text-xs text-center mt-1"
              style={{ color: "#FAD8FD" }}
            >
              Active Investors
            </div>
          </div>

          {/* Properties Tokenized */}
          <div className="bg-indigo-800/40 p-6 rounded-lg flex flex-col items-center justify-center"  style={{ backgroundColor: "#33165F" }}> 
            <div className="mb-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21H21V7L12 3L3 7V21Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path d="M9 15V21" stroke="white" strokeWidth="2" />
                <path d="M15 15V21" stroke="white" strokeWidth="2" />
                <path d="M3 11H21" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="text-2xl font-bold" style={{ color: "#FAD8FD" }}>
              328
            </div>
            <div
              className="text-xs text-center mt-1"
              style={{ color: "#FAD8FD" }}
            >
              Properties Tokenized
            </div>
          </div>
        </div>

        {/* Investment Highlights Section */}
        <h2
          className="text-2xl font-semibold text-center mb-10 relative z-10"
          style={{ color: "#FDE9FE" }}
        >
          Investment Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Premium Locations */}
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "#33165F" }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "#FAD8FD" }}
            >
              Premium Locations
            </h3>
            <p className="text-sm" style={{ color: "#B3B6FE" }}>
              Access prime real estate in top-tier locations worldwide
            </p>
          </div>

          {/* Instant Liquidity */}
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "#33165F" }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "#FAD8FD" }}
            >
              Instant Liquidity
            </h3>
            <p className="text-sm" style={{ color: "#B3B6FE" }}>
              Trade property tokens 24/7 on our secure marketplace
            </p>
          </div>

          {/* Smart Contracts */}
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "#33165F" }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "#FAD8FD" }}
            >
              Smart Contracts
            </h3>
            <p className="text-sm" style={{ color: "#B3B6FE" }}>
              Automated distributions and transparent transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
