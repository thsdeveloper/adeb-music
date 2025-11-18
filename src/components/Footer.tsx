import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Phone,
  Spotify,
  Youtube,
} from "@deemlol/next-icons";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Sobre", href: "#sobre" },
    { label: "Artistas", href: "#artistas" },
    { label: "Lançamentos", href: "#lancamentos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  const services = [
    "Produção musical completa",
    "Mixagem e masterização",
    "Arranjos e direção artística",
    "Captação em estúdio e ao vivo",
    "Consultoria para lançamentos digitais",
  ];

  const socials = [
    {
      label: "YouTube",
      href: "https://youtube.com/@adebmusic",
      icon: Youtube,
      accent: "bg-red-500/20 text-red-200 hover:bg-red-500/30",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/adeboficial",
      icon: Instagram,
      accent: "bg-pink-500/20 text-pink-200 hover:bg-pink-500/30",
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/adeb",
      icon: Spotify,
      accent: "bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30",
    },
    {
      label: "Facebook",
      href: "https://facebook.com/adeboficial",
      icon: Facebook,
      accent: "bg-blue-500/20 text-blue-200 hover:bg-blue-500/30",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      accent: "bg-sky-500/20 text-sky-200 hover:bg-sky-500/30",
    },
  ];

  return (
    <footer className="bg-[#0B0B0D] text-gray-200 border-t border-gray-800/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111121] to-[#0B0B0D] opacity-80" />
      <div className="absolute right-16 -top-12 w-64 h-64 bg-[#3bc9f6]/10 blur-3xl rounded-full" />
      <div className="absolute left-10 bottom-0 w-72 h-72 bg-emerald-300/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr] items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Logo size="lg" showText={false} />
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-wide uppercase text-white/80">
                Selo Oficial ADEB
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">Produzindo experiências sonoras que inspiram fé.</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                A ADEB Music conecta artistas, congregações e audiências digitais com produções musicais de alta qualidade,
                excelência técnica e autenticidade espiritual.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-2 bg-white/5 rounded-full border border-white/10 text-white/80 flex items-center gap-2">
                <Music className="w-4 h-4" /> Estúdios em Brasília & online
              </span>
              <span className="px-3 py-2 bg-white/5 rounded-full border border-white/10 text-white/80 flex items-center gap-2">
                10+ anos em produção gospel
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#8ae1ff] transition-colors"
                  >
                    <span className="h-px w-6 bg-[#3bc9f6]/50" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8ae1ff]" />
                Setor de Indústria Gráfica, Brasília - DF
              </p>
              <p className="flex items-center gap-2">
                <ClockIcon />
                Atendimentos agendados para sessões de estúdio e consultorias.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight">Serviços & Especialidades</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8ae1ff]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-gray-300 leading-relaxed">
              Produções alinhadas com o calendário de eventos, conferências e lançamentos oficiais da ADEB.
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-white font-semibold tracking-tight">Fale com a equipe</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:contato@adebmusic.com"
                className="flex items-center gap-3 hover:text-[#8ae1ff] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#8ae1ff]" />
                contato@adebmusic.com
              </a>
              <a href="tel:+5561999999999" className="flex items-center gap-3 hover:text-[#8ae1ff] transition-colors">
                <Phone className="w-5 h-5 text-[#8ae1ff]" />
                +55 (61) 99999-9999
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#8ae1ff]" />
                Brasília · Produções presenciais e híbridas
              </p>
            </div>

            <div className="rounded-2xl bg-[#141424] border border-white/10 p-4 space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Redes & press kit</span>
                <span className="text-xs text-gray-400">Atualizado semanalmente</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, href, icon: Icon, accent }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 transition-colors ${accent}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm text-white/90">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">
          <p>© {currentYear} ADEB Music. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por {" "}
            <a
              href="https://netcriativa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8ae1ff] hover:text-white transition-colors font-medium"
            >
              NetCriativa
            </a>{" "}
            para a glória de Deus.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-[#8ae1ff]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7v5l3 3" />
    </svg>
  );
}
