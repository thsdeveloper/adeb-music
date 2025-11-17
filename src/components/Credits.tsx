"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@deemlol/next-icons";

interface Credit {
  role: string;
  name: string;
  photo: string;
  instagram?: string;
  linkedin?: string;
  whatsapp?: string;
}

export default function Credits() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const credits: Credit[] = [
    {
      role: "Cantora",
      name: "Ana Luciely",
      photo: "https://scontent-bsb1-1.cdninstagram.com/v/t51.2885-15/573353867_18108418597717220_4310647229109364894_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QE2VRfhNl5wWapNnIeoMZdy_Ih_CQ7p-7EC0MXezUmSyPJW-sA6I3JeABE9la4-YKg&_nc_ohc=P0LW1gxHh-0Q7kNvwG3j8Wq&_nc_gid=XwdkmxjO4Aj4E74O--vzNw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfijGYOpDRvHPN5kDUdAnv6DpiIIZDeOWj_TgzemfbxjQQ&oe=692132CD&_nc_sid=8b3546",
      instagram: "https://www.instagram.com/ana_luciely",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Composição",
      name: "Getro Silva",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=GS",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Diretor A&R",
      name: "Eliel Xavier",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=EX",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Produção Musical",
      name: "Andson de Carvalho",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=AC",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Produção Musical",
      name: "Ozéias Pyt",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=OP",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Direção Vocal",
      name: "Tonny Alisson",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=TA",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Teclados",
      name: "Ozéias Pyt",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=OP",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Guitarra",
      name: "Lookas",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=L",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Baixo",
      name: "Vittor Arthur",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=VA",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Violões",
      name: "Tony",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=T",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Bateria",
      name: "Miqueias Silva",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=MS",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Direção de Vídeo",
      name: "Rafael Dourado",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=RD",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Designer de Palco",
      name: "Daniel Bezerra",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=DB",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Supervisão de Produção",
      name: "Eliel Xavier",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=EX",
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    },
    {
      role: "Produção Geral",
      name: "ADEB MUSIC",
      photo: "https://via.placeholder.com/400x400/1a1a1c/3bc9f6?text=ADEB",
      instagram: "https://instagram.com/adeboficial",
      linkedin: "#",
      whatsapp: "#"
    },
  ];

  const totalPages = Math.ceil(credits.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentCredits = credits.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="ficha-tecnica" className="py-24 px-6 bg-gradient-to-b from-[#1a1a1c] to-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ficha <span className="text-[#3bc9f6]">Técnica</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça os profissionais por trás das produções da ADEB Music
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#3bc9f6] hover:bg-[#60A5FA] text-[#0B0B0D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#3bc9f6] hover:bg-[#60A5FA] text-[#0B0B0D] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Credits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCredits.map((credit, index) => (
              <div
                key={startIndex + index}
                className="group bg-gradient-to-br from-[#1a1a1c] to-[#0B0B0D] rounded-2xl border border-gray-800 hover:border-[#3bc9f6]/50 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-[#3bc9f6]/10"
              >
                {/* Photo */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={credit.photo}
                    alt={credit.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent opacity-60" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3bc9f6] transition-colors">
                    {credit.name}
                  </h3>
                  <p className="text-sm text-[#3bc9f6] font-medium uppercase tracking-wide mb-4">
                    {credit.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-2">
                    {credit.instagram && credit.instagram !== "#" && (
                      <a
                        href={credit.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {credit.linkedin && credit.linkedin !== "#" && (
                      <a
                        href={credit.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-[#0077B5] text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {credit.whatsapp && credit.whatsapp !== "#" && (
                      <a
                        href={credit.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-[#25D366] text-gray-400 hover:text-white transition-all duration-300"
                        aria-label="WhatsApp"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? "bg-[#3bc9f6] w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Página ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Para mais informações sobre nossos serviços de produção musical,{" "}
            <a href="#contato" className="text-[#3bc9f6] hover:underline font-medium">
              entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
