"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0B0D] z-10" />
        {/* YouTube Video Background */}
        <div className="w-full h-full opacity-40">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/Pt6koigCrmo?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&start=126&playlist=Pt6koigCrmo&playsinline=1&rel=0&modestbranding=1"
            title="ADEB Music Background"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ transform: `translateY(${scrollY * 0.5}px)`, opacity: 1 - scrollY / 500 }}
      >
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
          A música que nasce da adoração.
          <br />
          <span className="bg-gradient-to-r from-[#3bc9f6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">A voz da ADEB para o mundo.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          Produção musical, videoclipes, lives e projetos autorais.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animation-delay-400">
          <a
            href="#artistas"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#3bc9f6] via-[#60A5FA] to-[#2563EB] text-[#0B0B0D] font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3bc9f6]/50"
          >
            <span className="relative z-10">Conheça nossos artistas</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </a>

          <a
            href="https://youtube.com/@adebmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3bc9f6] via-[#60A5FA] to-[#2563EB] p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0D] group-hover:bg-transparent transition-colors duration-300" />
            </span>
            <span className="relative z-10 bg-gradient-to-r from-[#3bc9f6] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent group-hover:text-[#0B0B0D] transition-colors duration-300">
              ▶ Ouça no YouTube
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-[#3bc9f6] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#3bc9f6] rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
