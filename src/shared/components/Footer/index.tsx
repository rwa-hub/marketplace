import React, { useState } from 'react';

interface FooterLinkProps {
  text: string;
}

interface SocialIconProps {
  letter: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
  <li>
    <a href="#" className="hover:text-white transition-colors">
      {text}
    </a>
  </li>
);

const SocialIcon: React.FC<SocialIconProps> = ({ letter }) => (
  <div className="w-8 h-8 rounded-full bg-[#1A0A2E] flex items-center justify-center text-[#B3B6FE] border border-[#2A1C42]">
    {letter}
  </div>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <footer className="w-full bg-[#0F0A22] text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-[#9D5AF3]">TokenEstate</h2>
            <p className="text-sm text-[#B3B6FE] mb-5">
              Revolutionizing real estate investment through blockchain technology and tokenization.
            </p>
            <div className="flex space-x-3">
              <SocialIcon letter="T" />
              <SocialIcon letter="L" />
              <SocialIcon letter="D" />
              <SocialIcon letter="T" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#B3B6FE]">
              <FooterLink text="Properties" />
              <FooterLink text="How It Works" />
              <FooterLink text="About Us" />
              <FooterLink text="FAQ" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-[#B3B6FE]">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms of Service" />
              <FooterLink text="Compliance" />
              <FooterLink text="Security" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm text-[#B3B6FE] mb-4">
              Stay updated with our latest properties and features.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l-md bg-[#1A0A2E] text-[#B3B6FE] border border-[#2A1C42] focus:outline-none"
              />
              <button className="bg-[#9D5AF3] text-white px-4 py-2 rounded-r-md hover:bg-[#8544E3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col space-y-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-bold mb-3 text-[#9D5AF3]">TokenEstate</h2>
            <p className="text-sm text-[#B3B6FE] mb-5">
              Revolutionizing real estate investment through blockchain technology and tokenization.
            </p>
            <div className="flex space-x-3">
              <SocialIcon letter="T" />
              <SocialIcon letter="L" />
              <SocialIcon letter="D" />
              <SocialIcon letter="T" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#B3B6FE]">
              <FooterLink text="Properties" />
              <FooterLink text="How It Works" />
              <FooterLink text="About Us" />
              <FooterLink text="FAQ" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-md font-semibold mb-3 text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-[#B3B6FE]">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms of Service" />
              <FooterLink text="Compliance" />
              <FooterLink text="Security" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-md font-semibold mb-3 text-white">Newsletter</h3>
            <p className="text-sm text-[#B3B6FE] mb-3">
              Stay updated with our latest properties and features.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 rounded-md bg-[#1A0A2E] text-[#B3B6FE] border border-[#2A1C42] focus:outline-none"
              />
              <button className="bg-[#9D5AF3] text-white px-4 py-2 rounded-md hover:bg-[#8544E3] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Support Links - Desktop */}
        <div className="hidden md:flex justify-between items-center pt-8 border-t border-[#2A1C42]">
          <div className="text-xs text-[#B3B6FE]">
            © 2024 TokenEstate. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-[#B3B6FE] hover:text-white">Support</a>
            <a href="#" className="text-xs text-[#B3B6FE] hover:text-white">Contact</a>
          </div>
        </div>

        {/* Copyright and Support Links - Mobile */}
        <div className="md:hidden pt-8 border-t border-[#2A1C42]">
          <div className="text-xs text-[#B3B6FE] mb-4 text-center">
            © 2024 TokenEstate. All rights reserved.
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-xs text-[#B3B6FE] hover:text-white">Support</a>
            <a href="#" className="text-xs text-[#B3B6FE] hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

