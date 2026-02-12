import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function signOut() {
  "use server";

  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white px-4 py-16">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-white/70">
          Você está autenticado via Supabase.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Seu usuário</h2>
          <dl className="mt-4 grid grid-cols-1 gap-3 text-sm">
            <div className="flex gap-2">
              <dt className="text-white/60 w-24">Email</dt>
              <dd className="font-mono break-all">{user.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/60 w-24">ID</dt>
              <dd className="font-mono break-all">{user.id}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <form action={signOut}>
              <button className="rounded-lg border border-white/15 px-4 py-2 hover:bg-white/10">
                Sair
              </button>
            </form>

            <Link
              href="/"
              className="rounded-lg bg-[#E8C15F] px-4 py-2 font-semibold text-black hover:opacity-90"
            >
              Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
