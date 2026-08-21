import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "4rem", textAlign: "center", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>STARTIX IA</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>Plataforma Inteligente de Análises e Gestao Esportiva</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/login" style={{ background: "#0070f3", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Entrar
        </Link>
        <Link href="/register" style={{ background: "#333", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Criar Conta
        </Link>
        <Link href="/pricing" style={{ background: "#eee", color: "#333", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Ver Planos
        </Link>
        <Link href="/scanner" style={{ background: "#10b981", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
          Scanner IA
        </Link>
      </div>
    </main>
  );
}
