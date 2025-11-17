"use client";

import { Video, Music, PlayCircle, Film } from "@deemlol/next-icons";

const releases = [
  {
    title: "Deus de Promessas",
    date: "Novembro 2025",
    icon: Video,
    videoUrl: "https://youtube.com/watch?v=example1",
  },
  {
    title: "Tua Graça Me Basta",
    date: "Outubro 2025",
    icon: Music,
    videoUrl: "https://youtube.com/watch?v=example2",
  },
  {
    title: "Santo Espírito",
    date: "Setembro 2025",
    icon: PlayCircle,
    videoUrl: "https://youtube.com/watch?v=example3",
  },
  {
    title: "Maravilhoso",
    date: "Agosto 2025",
    icon: Film,
    videoUrl: "https://youtube.com/watch?v=example4",
  },
];

export default function Releases() {
  return (
    <section id="lancamentos" className="relative py-24 px-6 bg-gradient-to-b from-[#1a1a1c] to-[#0B0B0D] overflow-hidden">
      {/* Audio Waves Background */}
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="flex items-end justify-around h-full w-full gap-1">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-gradient-to-t from-[#3bc9f6] to-[#60A5FA] rounded-t-full"
              style={{
                height: '15%',
                animation: `audioWave ${2.5 + (i % 4) * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.015}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Últimos <span className="text-[#3bc9f6]">Lançamentos</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Confira nossos lançamentos mais recentes no YouTube
          </p>
        </div>

        {/* Releases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {releases.map((release, index) => {
            const Icon = release.icon;
            return (
              <a
                key={index}
                href={release.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0B0B0D] rounded-xl overflow-hidden border border-gray-800 hover:border-[#3bc9f6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3bc9f6]/20"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-[#3bc9f6]/20 to-[#2563EB]/20 flex items-center justify-center overflow-hidden">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-20 h-20 text-[#3bc9f6]" />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#3bc9f6] rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-[#0B0B0D] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-[#3bc9f6] text-[#0B0B0D] px-3 py-1 rounded-full text-xs font-bold">
                    {release.date}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#3bc9f6] transition-colors line-clamp-2">
                    {release.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                    <span>▶</span> Assistir no YouTube
                  </p>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3bc9f6]/0 to-[#3bc9f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@adebmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-transparent border-2 border-[#3bc9f6] text-[#3bc9f6] font-bold text-lg rounded-full transition-all duration-300 hover:bg-[#3bc9f6] hover:text-[#0B0B0D] hover:scale-105"
          >
            Ver todos os vídeos →
          </a>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes audioWave {
          0%, 100% {
            height: 20%;
          }
          50% {
            height: 80%;
          }
        }
      `}</style>
    </section>
  );
}
