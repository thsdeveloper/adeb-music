import { Mic, Music, Camera, Play, Video, Sliders, Feather, Star } from '@deemlol/next-icons';

const images = [
  { id: 1, icon: Mic, label: "Gravações Vocais" },
  { id: 2, icon: Music, label: "Músicos" },
  { id: 3, icon: Camera, label: "Backstage Cultos" },
  { id: 4, icon: Play, label: "Ensaios" },
  { id: 5, icon: Video, label: "Produção Audiovisual" },
  { id: 6, icon: Sliders, label: "Mix & Master" },
  { id: 7, icon: Feather, label: "Composição" },
  { id: 8, icon: Star, label: "Orquestra" },
];

export default function BehindTheScenes() {
  return (
    <section id="bastidores" className="py-24 px-6 bg-gradient-to-b from-[#0B0B0D] to-[#1a1a1c]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#3bc9f6]">Bastidores</span> da Adoração
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça os momentos especiais por trás das produções da ADEB Music
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => {
            const Icon = image.icon;
            return (
              <div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1c] to-[#0B0B0D] border border-gray-800 hover:border-[#3bc9f6] transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image Placeholder */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#3bc9f6]/10 to-[#2563EB]/10">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-16 h-16 text-[#3bc9f6]" />
                  </div>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-[#3bc9f6] transition-colors px-2 text-center">
                    {image.label}
                  </p>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-bold text-sm">Ver mais</span>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#3bc9f6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Cada produção é resultado de dedicação, oração e trabalho em equipe.
            Do estúdio ao palco, do ensaio à live, capturamos momentos que vão além da música —
            são registros de adoração genuína e compromisso com a excelência.
          </p>

          {/* Social CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://instagram.com/adeboficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Siga no Instagram
            </a>
            <a
              href="https://youtube.com/@adebmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              Inscreva-se no YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
