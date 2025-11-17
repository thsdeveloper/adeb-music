import Image from "next/image";

const artists = [
  {
    name: "Ana Luciely",
    song: "Bálsamo Divino",
    genre: "Adoração Contemporânea",
    image: "https://scontent-bsb1-1.cdninstagram.com/v/t51.2885-15/573353867_18108418597717220_4310647229109364894_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QE2VRfhNl5wWapNnIeoMZdy_Ih_CQ7p-7EC0MXezUmSyPJW-sA6I3JeABE9la4-YKg&_nc_ohc=P0LW1gxHh-0Q7kNvwG3j8Wq&_nc_gid=XwdkmxjO4Aj4E74O--vzNw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfijGYOpDRvHPN5kDUdAnv6DpiIIZDeOWj_TgzemfbxjQQ&oe=692132CD&_nc_sid=8b3546",
    videoUrl: "https://www.youtube.com/watch?v=Pt6koigCrmo",
    youtube: "https://youtube.com/@adebmusic",
    spotify: "https://open.spotify.com/artist/adeb",
    instagram: "https://www.instagram.com/ana_luciely",
  },
];

export default function Artists() {
  return (
    <section id="artistas" className="py-24 px-6 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Artistas & <span className="text-[#3bc9f6]">Ministérios</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça os ministérios e artistas que levam a mensagem de Deus através da música
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group relative bg-[#0B0B0D] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-[#3bc9f6]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3bc9f6]/10"
            >
              {/* Artist Image */}
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/20 to-transparent opacity-60" />

                {/* Artist name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {artist.name} │ {artist.song}
                  </h3>
                  {artist.videoUrl && (
                    <a
                      href={artist.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#3bc9f6]/90 hover:bg-[#3bc9f6] text-[#0B0B0D] text-xs font-bold rounded-full transition-all duration-300 hover:scale-105 mb-2"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      <span>[Clipe Oficial]</span>
                    </a>
                  )}
                  <p className="text-xs text-gray-300 font-medium tracking-wide uppercase opacity-90">{artist.genre}</p>
                </div>
              </div>

              {/* Social Links - Minimal and elegant */}
              <div className="p-6 flex items-center justify-center gap-4 bg-gradient-to-b from-[#0B0B0D] to-[#1a1a1c]/50">
                <a
                  href={artist.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-red-600/20 border border-gray-700/50 hover:border-red-500/50 text-gray-400 hover:text-red-500 transition-all duration-300"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={artist.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-green-600/20 border border-gray-700/50 hover:border-green-500/50 text-gray-400 hover:text-green-500 transition-all duration-300"
                  aria-label="Spotify"
                  title="Spotify"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-pink-600/20 border border-gray-700/50 hover:border-pink-500/50 text-gray-400 hover:text-pink-500 transition-all duration-300"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#3bc9f6]/0 via-[#3bc9f6]/0 to-[#3bc9f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}

          {/* Call to Action Card */}
          <a
            href="#contato"
            className="group relative bg-gradient-to-br from-[#1a1a1c] via-[#0B0B0D] to-[#1a1a1c] rounded-3xl overflow-hidden border border-[#3bc9f6]/20 hover:border-[#3bc9f6]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3bc9f6]/20 flex flex-col items-center justify-center p-8 min-h-[490px]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #3bc9f6 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#3bc9f6]/20 to-[#2563EB]/20 border border-[#3bc9f6]/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-[#3bc9f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#3bc9f6] transition-colors duration-300">
                Seu talento pode brilhar aqui
              </h3>
              <p className="text-gray-400 mb-6 text-base leading-relaxed max-w-sm mx-auto">
                Faça parte do nosso time de artistas e leve sua música para o mundo através da ADEB Music
              </p>

              {/* CTA Button */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3bc9f6] via-[#60A5FA] to-[#2563EB] rounded-full text-[#0B0B0D] font-bold text-sm group-hover:scale-105 transition-transform duration-300">
                <span>Entrar em contato</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Animated glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3bc9f6]/0 via-[#3bc9f6]/5 to-[#2563EB]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
