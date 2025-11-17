import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-[#0B0B0D] to-[#1a1a1c]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sobre a
              <span className="text-[#3bc9f6]"> ADEB Music</span>
            </h2>

            <div className="w-24 h-1 bg-[#3bc9f6]" />

            <p className="text-xl text-gray-300 leading-relaxed">
              A <strong className="text-[#3bc9f6]">ADEB Music</strong> é o selo musical oficial da
              <strong className="text-white"> ADEB — Assembleia de Deus de Brasília</strong>.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              Registramos louvores, projetos autorais e produções especiais que
              <strong className="text-[#3bc9f6]"> edificam vidas</strong> e levam a Palavra através da música.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Com excelência técnica e compromisso espiritual, transformamos adoração em arte
              e levamos a mensagem do Evangelho através de produções musicais de alto nível.
            </p>

            <a
              href="https://adeb.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-4 bg-transparent border-2 border-[#3bc9f6] text-[#3bc9f6] font-bold text-lg rounded-full transition-all duration-300 hover:bg-[#3bc9f6] hover:text-[#0B0B0D] hover:scale-105"
            >
              Saiba mais sobre a ADEB →
            </a>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              {/* Studio Image */}
              <Image
                src="https://www.cotanet.com.br/img/site/paginas/estudio-para-gravar-cd.jpg"
                alt="Estúdio de gravação ADEB Music"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#3bc9f6] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2563EB] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
