"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ministry: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        ministry: "",
        projectType: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 px-6 bg-gradient-to-b from-[#0B0B0D] to-[#1a1a1c] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3bc9f6] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl opacity-5" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Envie seu <span className="text-[#3bc9f6]">Projeto</span>
          </h2>
          <div className="w-24 h-1 bg-[#3bc9f6] mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tem um projeto musical? Entre em contato conosco e vamos transformar sua visão em realidade
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                Telefone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors"
                placeholder="(61) 99999-9999"
              />
            </div>

            {/* Ministério/Igreja */}
            <div>
              <label htmlFor="ministry" className="block text-gray-300 font-medium mb-2">
                Ministério / Igreja *
              </label>
              <input
                type="text"
                id="ministry"
                name="ministry"
                value={formData.ministry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors"
                placeholder="Nome do ministério ou igreja"
              />
            </div>
          </div>

          {/* Tipo de Projeto */}
          <div>
            <label htmlFor="projectType" className="block text-gray-300 font-medium mb-2">
              Tipo de Projeto *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors"
            >
              <option value="">Selecione uma opção</option>
              <option value="producao-musical">Produção Musical</option>
              <option value="videoclipe">Videoclipe</option>
              <option value="live">Produção de Live</option>
              <option value="consultoria">Consultoria Artística</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#0B0B0D] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#3bc9f6] transition-colors resize-none"
              placeholder="Conte-nos mais sobre seu projeto..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 bg-[#3bc9f6] text-[#0B0B0D] font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3bc9f6]/50 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Projeto"}
            </button>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mt-6 p-4 bg-green-600/20 border border-green-600 rounded-lg text-center">
              <p className="text-green-400 font-medium">
                Projeto enviado com sucesso! Entraremos em contato em breve.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
