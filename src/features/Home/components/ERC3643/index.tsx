import { useState, useEffect } from "react";

export const ERC3643Section = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // SVG Icons
  const icons = {
    checkmark: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L6 12L2.5 8.5"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    lock: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    eye: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    shield: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    lightning: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L4 14H12L11 22L20 10H12L13 2Z"
          stroke="#8A8DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  const DesktopLayout = () => (
    <div
      className="p-8 rounded-lg w-full mx-auto py-16"
      style={{ backgroundColor: "#200B34" }}
    >
      {/* Content Container */}
      <div className="relative">
        {/* Title */}
        <h1
          className="text-2xl font-semibold text-center mb-10"
          style={{
            color: "#FBDCFE",
            textShadow: "0 0 5px rgba(251, 220, 254, 0.5)",
          }}
        >
          Powered by ERC-3643
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section - Info */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-6 rounded-lg"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "#FBDCFE" }}
            >
              Security Token Standard
            </h2>

            <p className="mb-6 text-sm" style={{ color: "#B3B6FE" }}>
              ERC-3643 is the leading standard for security tokens on the
              blockchain, providing a comprehensive framework for compliant
              tokenization of real-world assets.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2" style={{ color: "#B3B6FE" }}>
                  Identity Management & KYC
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2" style={{ color: "#B3B6FE" }}>
                  Regulatory Compliance
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2" style={{ color: "#B3B6FE" }}>
                  Transfer Restrictions
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2" style={{ color: "#B3B6FE" }}>
                  Investor Protection
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="grid grid-cols-2 gap-6">
            {/* Compliance */}
            <div
              className="bg-indigo-900 bg-opacity-20 p-6 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
            >
              <div className="mb-3">{icons.lock}</div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#FBDCFE" }}
              >
                Compliance
              </h3>
              <p className="text-xs" style={{ color: "#B3B6FE" }}>
                Automated regulatory compliance and reporting
              </p>
            </div>

            {/* Transparency */}
            <div
              className="bg-indigo-900 bg-opacity-20 p-6 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
            >
              <div className="mb-3">{icons.eye}</div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#FBDCFE" }}
              >
                Transparency
              </h3>
              <p className="text-xs" style={{ color: "#B3B6FE" }}>
                Full visibility of ownership and transfers
              </p>
            </div>

            {/* Security */}
            <div
              className="bg-indigo-900 bg-opacity-20 p-6 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
            >
              <div className="mb-3">{icons.shield}</div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#FBDCFE" }}
              >
                Security
              </h3>
              <p className="text-xs" style={{ color: "#B3B6FE" }}>
                Enterprise-grade asset protection
              </p>
            </div>

            {/* Efficiency */}
            <div
              className="bg-indigo-900 bg-opacity-20 p-6 rounded-lg flex flex-col items-center text-center"
              style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
            >
              <div className="mb-3">{icons.lightning}</div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#FBDCFE" }}
              >
                Efficiency
              </h3>
              <p className="text-xs" style={{ color: "#B3B6FE" }}>
                Reduced costs and faster settlements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MobileLayout = () => (
    <div className="p-4 w-full  mx-auto" style={{ backgroundColor: "#200B34" }}>
      {/* Content Container */}
      <div className="relative">
        {/* Title */}
        <h1
          className="text-xl font-semibold text-center mb-6"
          style={{
            color: "#FBDCFE",
            textShadow: "0 0 5px rgba(251, 220, 254, 0.5)",
          }}
        >
          Powered by ERC-3643
        </h1>

        <div className="flex flex-col space-y-4">
          {/* Info Section */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <h2
              className="text-lg font-semibold mb-2"
              style={{ color: "#FBDCFE" }}
            >
              Security Token Standard
            </h2>

            <p className="mb-4 text-sm" style={{ color: "#B3B6FE" }}>
              ERC-3643 is the leading standard for security tokens on the
              blockchain, providing a comprehensive framework for compliant
              tokenization of real-world assets.
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2 text-sm" style={{ color: "#B3B6FE" }}>
                  Identity Management & KYC
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2 text-sm" style={{ color: "#B3B6FE" }}>
                  Regulatory Compliance
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2 text-sm" style={{ color: "#B3B6FE" }}>
                  Transfer Restrictions
                </span>
              </div>

              <div className="flex items-center">
                {icons.checkmark}
                <span className="ml-2 text-sm" style={{ color: "#B3B6FE" }}>
                  Investor Protection
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          {/* Compliance */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <div className="mb-2">{icons.lock}</div>
            <h3
              className="text-base font-medium mb-1"
              style={{ color: "#FBDCFE" }}
            >
              Compliance
            </h3>
            <p className="text-xs" style={{ color: "#B3B6FE" }}>
              Automated regulatory compliance and reporting
            </p>
          </div>

          {/* Transparency */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <div className="mb-2">{icons.eye}</div>
            <h3
              className="text-base font-medium mb-1"
              style={{ color: "#FBDCFE" }}
            >
              Transparency
            </h3>
            <p className="text-xs" style={{ color: "#B3B6FE" }}>
              Full visibility of ownership and transfers
            </p>
          </div>

          {/* Security */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <div className="mb-2">{icons.shield}</div>
            <h3
              className="text-base font-medium mb-1"
              style={{ color: "#FBDCFE" }}
            >
              Security
            </h3>
            <p className="text-xs" style={{ color: "#B3B6FE" }}>
              Enterprise-grade asset protection
            </p>
          </div>

          {/* Efficiency */}
          <div
            className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "rgba(37, 20, 84, 0.7)" }}
          >
            <div className="mb-2">{icons.lightning}</div>
            <h3
              className="text-base font-medium mb-1"
              style={{ color: "#FBDCFE" }}
            >
              Efficiency
            </h3>
            <p className="text-xs" style={{ color: "#B3B6FE" }}>
              Reduced costs and faster settlements
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};
