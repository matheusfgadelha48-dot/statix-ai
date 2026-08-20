"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/features/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function checkSession() {
      const { data } = await authService.getSession();

      if (!data.session) {
        router.replace("/login");
        return;
      }

      setEmail(data.session.user.email ?? "");
      setLoading(false);
    }

    checkSession();
  }, [router]);

  async function handleLogout() {
    await authService.signOut();
    router.replace("/login");
  }

  if (loading) {
    return (
      <main>
        <p>Carregando...</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Dashboard STARTIX IA</h1>

      <p>Usuário conectado:</p>
      <p>{email}</p>

      <button onClick={handleLogout}>
        Sair
      </button>
    </main>
  );
}
