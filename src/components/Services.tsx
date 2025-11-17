"use client";

import { useState } from "react";
import { Music, Mic, Sliders, Film, Radio, Disc, Users, Headphones } from '@deemlol/next-icons';

const services = [
  {
    icon: Music,
    title: "Produção Musical",
    description: "Produção completa de faixas, arranjos e composições musicais com excelência.",
    details: "Nossa equipe de produtores trabalha com você desde a concepção da ideia até a finalização da música. Oferecemos arranjos personalizados, programação de instrumentos virtuais, e produção completa em diversos estilos musicais. Equipamentos de última geração e profissionais experientes garantem um som de qualidade internacional para seu ministério."
  },
  {
    icon: Mic,
    title: "Gravação em Estúdio",
    description: "Estúdio profissional com equipamentos de última geração para captação vocal e instrumental.",
    details: "Nosso estúdio conta com sala de gravação acusticamente tratada, microfones condensadores de alto padrão, pré-amplificadores profissionais e interface de áudio de primeira linha. Oferecemos gravação de vocais, instrumentos acústicos, backing vocals e sessões completas de banda. Ambiente confortável e inspirador para a melhor performance dos artistas."
  },
  {
    icon: Sliders,
    title: "Mix e Master",
    description: "Mixagem e masterização profissional para garantir qualidade sonora internacional.",
    details: "Processo completo de mixagem com equalização, compressão, reverb, delay e efeitos especiais para cada elemento da música. A masterização final garante que sua música soe bem em todas as plataformas: streaming, rádio, YouTube e sistemas de som de igreja. Utilizamos monitores de referência e plugins de qualidade profissional para entregar o melhor resultado sonoro."
  },
  {
    icon: Film,
    title: "Produção de Videoclipes",
    description: "Produção audiovisual completa, desde o conceito até a finalização do videoclipe.",
    details: "Serviço completo de produção audiovisual incluindo roteiro, direção de fotografia, filmagem em 4K, direção de arte, edição profissional e correção de cor. Nossa equipe cria videoclipes que comunicam a mensagem da música de forma impactante e profissional. Locações especiais, iluminação cinematográfica e edição criativa para destacar seu ministério."
  },
  {
    icon: Radio,
    title: "Produção de Lives",
    description: "Transmissões ao vivo com qualidade profissional de áudio e vídeo.",
    details: "Produção completa de transmissões ao vivo para YouTube, Facebook e outras plataformas. Inclui múltiplas câmeras, switcher de vídeo, mixagem de áudio ao vivo, gráficos e overlays personalizados. Operadores experientes garantem transmissão estável e de alta qualidade. Ideal para cultos, eventos especiais e lançamentos de músicas do seu ministério."
  },
  {
    icon: Disc,
    title: "Registro e Distribuição",
    description: "Registro de obras e distribuição digital nas principais plataformas de streaming.",
    details: "Cuidamos de todo o processo burocrático e técnico para colocar sua música no mundo digital. Registro na Biblioteca Nacional, ECAD, distribuição para Spotify, Apple Music, Deezer, Amazon Music, YouTube Music e outras plataformas. Acompanhamento de royalties e relatórios de performance. Sua música disponível globalmente com toda a legalidade necessária."
  },
  {
    icon: Users,
    title: "Consultoria Artística",
    description: "Orientação e desenvolvimento de projetos musicais ministeriais.",
    details: "Consultoria especializada em desenvolvimento de carreira artística ministerial. Ajudamos na definição de identidade sonora, escolha de repertório, planejamento de lançamentos, estratégias de divulgação e crescimento nas redes sociais. Orientação sobre produção, marketing digital e posicionamento do ministério. Mentoria personalizada com profissionais experientes no mercado gospel."
  },
  {
    icon: Headphones,
    title: "Direção Musical",
    description: "Direção e coordenação de ministérios de louvor e bandas.",
    details: "Serviço de direção musical para ministérios de louvor, bandas e grupos vocais. Inclui seleção e arranjo de repertório, ensaios direcionados, orientação técnica para músicos e cantores, e coordenação de apresentações. Ajudamos a elevar o nível técnico e espiritual do seu ministério de louvor, desenvolvendo músicos e criando uma identidade sonora única para sua igreja."
  },
];

export default function Services() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };
  return (
    <section id="servicos" className="py-24 px-6 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O que <span className="text-[#3bc9f6]">fazemos</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Produção musical profissional com compromisso espiritual e excelência técnica
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFlipped = flippedCard === index;

            return (
              <div
                key={index}
                className="relative h-[400px]"
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-[#1a1a1c] to-[#0B0B0D] p-8 rounded-xl border border-gray-800 hover:border-[#3bc9f6] transition-all duration-300 hover:shadow-xl hover:shadow-[#3bc9f6]/10"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon className="w-12 h-12 text-[#3bc9f6]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Saiba Mais Button */}
                    <button
                      onClick={() => toggleFlip(index)}
                      className="absolute bottom-6 left-8 right-8 px-4 py-2 bg-[#3bc9f6] text-[#0B0B0D] font-bold text-sm rounded-full hover:bg-[#60A5FA] transition-all duration-300 hover:scale-105"
                    >
                      Saiba mais →
                    </button>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#3bc9f6] opacity-5 blur-xl" />
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-[#3bc9f6]/10 via-[#1a1a1c] to-[#0B0B0D] p-8 rounded-xl border border-[#3bc9f6] shadow-xl shadow-[#3bc9f6]/20"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#3bc9f6] mb-4 flex items-center gap-2">
                      <Icon className="w-6 h-6" />
                      {service.title}
                    </h3>

                    {/* Detailed Description */}
                    <p className="text-gray-300 text-xs leading-relaxed mb-6 overflow-y-auto max-h-[240px]">
                      {service.details}
                    </p>

                    {/* Voltar Button */}
                    <button
                      onClick={() => toggleFlip(index)}
                      className="absolute bottom-6 left-8 right-8 px-4 py-2 bg-transparent border-2 border-[#3bc9f6] text-[#3bc9f6] font-bold text-sm rounded-full hover:bg-[#3bc9f6] hover:text-[#0B0B0D] transition-all duration-300"
                    >
                      ← Voltar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Tem um projeto musical em mente?
          </p>
          <a
            href="#contato"
            className="inline-block px-10 py-4 bg-[#3bc9f6] text-[#0B0B0D] font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3bc9f6]/50"
          >
            Entre em contato →
          </a>
        </div>
      </div>
    </section>
  );
}
