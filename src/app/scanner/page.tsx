"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Match {
  id: string;
  teams: string;
  league: string;
  prediction: string;
  confidence: string;
}

export default function ScannerPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMatches([
        { id: "1", teams: "Arsenal vs Chelsea", league: "Premier League", prediction: "Over 2.5 Gols", confidence: "87%" },
        { id: "2", teams: "Real Madrid vs Barcelona", league: "La Liga", prediction: "Ambas Marcam", confidence: "91%" },
        { id: "3", teams: "Flamengo vs Palmeiras", league: "Brasileirão", prediction: "Vitória Mandante", confidence: "79%" },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1>Scanner Inteligente - STARTIX IA</h1>
        <Link href="/dashboard" style={{ background: "#eee", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none", color: "#333" }}>
          Voltar ao Dashboard
        </Link>
      </div>

      <p style={{ color: "#666", marginBottom: "1.5rem" }}>Oportunidades de valor identificadas pela IA em tempo real.</p>

      {loading ? (
        <p>Buscando oportunidades no mercado...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {matches.map((match) => (
            <div key={match.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#888", textTransform: "uppercase" }}>{match.league}</span>
                <h3 style={{ margin: "0.25rem 0" }}>{match.teams}</h3>
                <p style={{ margin: 0, color: "#0070f3", fontWeight: "bold" }}>Sugestão: {match.prediction}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.85rem", color: "#666" }}>Confiança</span>
                <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "green" }}>{match.confidence}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
