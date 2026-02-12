"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const menuItems = [
  { name: "Artistas", href: "#artistas" },
  {
    name: "Música",
    href: "#lancamentos",
    submenu: [
      { name: "Últimos Lançamentos", href: "#lancamentos" },
      { name: "YouTube", href: "https://youtube.com/@adebmusic" },
      { name: "Spotify", href: "https://open.spotify.com/artist/adeb" },
    ],
  },
  {
    name: "Serviços",
    href: "#servicos",
    submenu: [
      { name: "Produção Musical", href: "#servicos" },
      { name: "Videoclipes", href: "#servicos" },
      { name: "Mix & Master", href: "#servicos" },
      { name: "Todos os Serviços", href: "#servicos" },
    ],
  },
  { name: "Ficha Técnica", href: "#ficha-tecnica" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (itemName: string) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B0B0D] shadow-lg shadow-[#3bc9f6]/10 border-b border-gray-800"
          : "bg-[#0B0B0D]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between px-8 py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Logo size="lg" showText={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className="px-5 py-2 text-white font-medium text-sm tracking-wide hover:text-[#3bc9f6] transition-colors duration-300 relative group uppercase"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-[#3bc9f6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>

                {/* Submenu Dropdown */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-[#1a1a1c] shadow-2xl shadow-black/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeSubmenu === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-[#0B0B0D] hover:text-[#3bc9f6] transition-colors duration-200 border-l-2 border-transparent hover:border-[#3bc9f6]"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="px-6 py-2.5 border border-gray-700 text-white text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-[#0B0B0D] transition-all duration-300"
            >
              PAINEL
            </Link>
            <a
              href="https://adeb.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#3bc9f6] text-[#0B0B0D] text-sm font-bold tracking-wide rounded-full hover:bg-white hover:text-[#0B0B0D] transition-all duration-300 hover:shadow-lg hover:shadow-[#3bc9f6]/50 hover:scale-105"
            >
              ADEB
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-[#0B0B0D] z-40 transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8 overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-800 pb-2">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                      className="flex-1 py-4 text-white font-medium text-lg hover:text-[#3bc9f6] transition-colors uppercase"
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="p-4 text-white hover:text-[#3bc9f6] transition-colors"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeSubmenu === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeSubmenu === item.name
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 py-2 space-y-2 border-l-2 border-[#3bc9f6]">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-gray-400 hover:text-[#3bc9f6] transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-gray-800 space-y-3">
              <Link
                href="/dashboard"
                className="block w-full py-4 border border-gray-700 text-white text-center font-bold rounded-full hover:bg-white hover:text-[#0B0B0D] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Painel
              </Link>
              <a
                href="https://adeb.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#3bc9f6] text-[#0B0B0D] text-center font-bold rounded-full hover:bg-white transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visite ADEB
              </a>
            </div>

            {/* Social Links Mobile */}
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://youtube.com/@adebmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <span className="text-sm">▶</span>
              </a>
              <a
                href="https://instagram.com/adeboficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <span className="text-sm">📷</span>
              </a>
              <a
                href="https://open.spotify.com/artist/adeb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <span className="text-sm">♫</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
