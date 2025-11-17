import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0D] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo size="lg" showText={false} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ADEB MUSIC</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Selo musical oficial da ADEB — Assembleia de Deus de Brasília
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-[#3bc9f6] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#artistas" className="text-gray-400 hover:text-[#3bc9f6] transition-colors">
                  Artistas
                </a>
              </li>
              <li>
                <a href="#lancamentos" className="text-gray-400 hover:text-[#3bc9f6] transition-colors">
                  Lançamentos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-[#3bc9f6] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-[#3bc9f6] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* ADEB Links */}
          <div>
            <h4 className="text-white font-bold mb-4">ADEB</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://adeb.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3bc9f6] transition-colors"
                >
                  Site Oficial
                </a>
              </li>
              <li>
                <a
                  href="https://adeb.com.br/sobre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3bc9f6] transition-colors"
                >
                  Sobre a ADEB
                </a>
              </li>
              <li>
                <a
                  href="https://adeb.com.br/ministerios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3bc9f6] transition-colors"
                >
                  Ministérios
                </a>
              </li>
              <li>
                <a
                  href="https://adeb.com.br/eventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3bc9f6] transition-colors"
                >
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a
                href="https://youtube.com/@adebmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-600 group-hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">▶</span>
                </div>
                <span>YouTube</span>
              </a>

              <a
                href="https://instagram.com/adeboficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">📷</span>
                </div>
                <span>Instagram</span>
              </a>

              <a
                href="https://open.spotify.com/artist/adeb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600 group-hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white text-sm">♫</span>
                </div>
                <span>Spotify</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>
            © {currentYear} ADEB Music. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por <a href="https://netcriativa.com" target="_blank" rel="noopener noreferrer" className="text-[#3bc9f6] hover:underline">NetCriativa</a> para a glória de Deus.
          </p>
        </div>
      </div>
    </footer>
  );
}
