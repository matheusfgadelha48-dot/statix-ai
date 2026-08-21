"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={{ padding: "3rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Planos STARTIX IA</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>Escolha o plano ideal para elevar suas análises e resultados.</p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ddd", padding: "2rem", borderRadius: "8px", width: "300px" }}>
          <h2>Iniciante</h2>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>Grátis</p>
          <ul style={{ textAlign: "left", marginBottom: "1.5rem", paddingLeft: "1.2rem", color: "#444" }}>
            <li>Análises básicas</li>
            <li>Acesso ao Dashboard</li>
            <li>Suporte comunitário</li>
          </ul>
          <Link href="/register" style={{ display: "block", background: "#333", color: "#fff", padding: "0.75rem", borderRadius: "4px", textDecoration: "none" }}>
            Começar Grátis
          </Link>
        </div>

        <div style={{ border: "2px solid #0070f3", padding: "2rem", borderRadius: "8px", width: "300px", background: "#f9fbff" }}>
          <h2 style={{ color: "#0070f3" }}>PRO IA</h2>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>R$ 97/mês</p>
          <ul style={{ textAlign: "left", marginBottom: "1.5rem", paddingLeft: "1.2rem", color: "#444" }}>
            <li>Scanner em tempo real</li>
            <li>IA preditiva avançada</li>
            <li>Gestao de banca ilimitada</li>
            <li>Suporte prioritário</li>
          </ul>
          <Link href="/register" style={{ display: "block", background: "#0070f3", color: "#fff", padding: "0.75rem", borderRadius: "4px", textDecoration: "none" }}>
            Assinar PRO
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Link href="/login" style={{ color: "#0070f3", textDecoration: "underline" }}>Já tem uma conta? Faça login</Link>
      </div>
    </main>
  );
}
