"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 500, suffix: "K+", label: "Visualizações no YouTube" },
  { value: 150, suffix: "+", label: "Produções Lançadas" },
  { value: 25, suffix: "+", label: "Artistas & Ministérios" },
  { value: 15, suffix: "+", label: "Anos de Ministério Musical" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(stat.value * progress);

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = stat.value;
            return newCounts;
          });
        }
      }, interval);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="impacto"
      className="py-24 px-6 bg-gradient-to-b from-[#1a1a1c] to-[#0B0B0D] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3bc9f6] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Impacto & <span className="text-[#3bc9f6]">Alcance</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Números que refletem vidas alcançadas através da música
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1c] to-[#0B0B0D] p-8 rounded-2xl border border-gray-800 hover:border-[#3bc9f6] transition-all duration-300 text-center hover:scale-105 hover:shadow-2xl hover:shadow-[#3bc9f6]/20"
            >
              {/* Stat Value */}
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-[#3bc9f6] group-hover:scale-110 inline-block transition-transform duration-300">
                  {counts[index]}
                  {stat.suffix}
                </span>
              </div>

              {/* Stat Label */}
              <p className="text-lg text-gray-300 font-medium leading-tight">
                {stat.label}
              </p>

              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3bc9f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada número representa vidas tocadas pela mensagem do Evangelho através da música.
            Nosso compromisso é continuar crescendo em excelência e alcance, sempre com{" "}
            <span className="text-[#3bc9f6] font-bold">propósito espiritual</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
