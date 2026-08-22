export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'sans-serif', background: '#0f172a', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Startix IA</h1>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Plataforma de análise inteligente e gestão</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/login" style={{ padding: '0.75rem 1.5rem', background: '#2563eb', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Entrar</a>
        <a href="/register" style={{ padding: '0.75rem 1.5rem', background: '#334155', color: '#fff', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Criar Conta</a>
      </div>
    </main>
  )
}
