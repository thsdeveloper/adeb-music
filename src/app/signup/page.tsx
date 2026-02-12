import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function signup(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/dashboard");

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}&next=${encodeURIComponent(next)}`);
  }

  // Many Supabase projects require email confirmation; we always show a "check email" hint.
  redirect(`/signup?checkEmail=1&next=${encodeURIComponent(next)}`);
}

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string; checkEmail?: string }>;
}) {
  const { error, next, checkEmail } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#0B0B0D] text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold">Criar conta</h1>
        <p className="mt-1 text-sm text-white/70">
          Crie acesso para a área restrita.
        </p>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
            {decodeURIComponent(error)}
          </div>
        ) : null}

        {checkEmail ? (
          <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
            Conta criada. Se seu projeto exigir confirmação, verifique seu email para ativar.
          </div>
        ) : null}

        <form action={signup} className="mt-6 space-y-4">
          <input type="hidden" name="next" value={next ?? "/dashboard"} />

          <div>
            <label className="text-sm text-white/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-[#E8C15F]"
              placeholder="voce@empresa.com"
            />
          </div>

          <div>
            <label className="text-sm text-white/80" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="mt-1 w-full rounded-lg bg-black/20 border border-white/10 px-3 py-2 outline-none focus:border-[#E8C15F]"
            />
            <p className="mt-1 text-xs text-white/50">Mínimo 6 caracteres.</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#E8C15F] text-black font-semibold py-2 hover:opacity-90"
          >
            Criar conta
          </button>
        </form>

        <p className="mt-6 text-sm text-white/70">
          Já tem conta?{" "}
          <Link className="text-[#E8C15F] hover:underline" href={`/login${next ? `?next=${encodeURIComponent(next)}` : ""}`}>
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}
