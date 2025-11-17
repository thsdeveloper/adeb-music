import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white" | "blue";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ variant = "default", size = "md", showText = true }: LogoProps) {
  // Configurações de tamanho
  const sizes = {
    sm: { icon: 40, text: "text-sm" },
    md: { icon: 56, text: "text-xl" },
    lg: { icon: 72, text: "text-2xl" },
  };

  // Configurações de cor
  const colors = {
    default: {
      bg: "from-[#3bc9f6] to-[#2563EB]",
      text: "text-[#0B0B0D]",
      subtitle: "text-[#3bc9f6]",
    },
    white: {
      bg: "from-white to-gray-100",
      text: "text-white",
      subtitle: "text-white/80",
    },
    blue: {
      bg: "from-[#3bc9f6] to-[#2563EB]",
      text: "text-[#3bc9f6]",
      subtitle: "text-[#3bc9f6]/80",
    },
  };

  const sizeConfig = sizes[size];
  const colorConfig = colors[variant];

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon - Substitua este bloco pela sua imagem real */}
      <div
        className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{
          width: `${sizeConfig.icon}px`,
          height: `${sizeConfig.icon}px`,
          minWidth: `${sizeConfig.icon}px`,
          minHeight: `${sizeConfig.icon}px`,
        }}
      >
        <Image
          src="/logo-oficial.png"
          alt="ADEB Music"
          width={sizeConfig.icon}
          height={sizeConfig.icon}
          priority
          className="object-contain"
        />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="hidden md:block">
          <div className={`${colorConfig.text} font-bold ${sizeConfig.text} tracking-tight leading-none`}>
            ADEB MUSIC
          </div>
          <div className={`${colorConfig.subtitle} text-xs tracking-widest uppercase font-medium`}>
            Official Label
          </div>
        </div>
      )}
    </div>
  );
}
