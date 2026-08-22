'use client';

import { useAuth } from '@/features/auth/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-slate-950 text-slate-100'>
        <div className='text-lg animate-pulse'>Carregando painel...</div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <div className='flex min-h-screen bg-slate-950 text-slate-100'>
      {/* Sidebar simples */}
      <aside className='w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between'>
        <div>
          <h2 className='text-xl font-bold tracking-tight text-white mb-6'>Startix IA</h2>
          <nav className='space-y-2'>
            <a href='/dashboard' className='block px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 font-medium'>
              Painel Geral
            </a>
          </nav>
        </div>
        <button
          onClick={handleSignOut}
          className='w-full rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white'
        >
          Sair da conta
        </button>
      </aside>

      {/* Conteúdo principal */}
      <main className='flex-1 p-8'>
        <header className='flex justify-between items-center mb-8 pb-6 border-b border-slate-800'>
          <div>
            <h1 className='text-2xl font-bold text-white'>Visão Geral</h1>
            <p className='text-sm text-slate-400'>Bem-vindo de volta ao seu painel de gestão esportiva.</p>
          </div>
          <div className='text-right'>
            <span className='inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 uppercase'>
              {user?.profile?.plan || 'FREE'}
            </span>
          </div>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <div className='rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-xl'>
            <h3 className='text-sm font-medium text-slate-400'>Usuário Logado</h3>
            <p className='mt-2 text-lg font-semibold text-white truncate'>{user?.email}</p>
          </div>
          <div className='rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-xl'>
            <h3 className='text-sm font-medium text-slate-400'>Nome do Perfil</h3>
            <p className='mt-2 text-lg font-semibold text-white'>{user?.profile?.full_name || 'Não informado'}</p>
          </div>
          <div className='rounded-2xl bg-slate-900 p-6 border border-slate-800 shadow-xl'>
            <h3 className='text-sm font-medium text-slate-400'>Análises Restantes</h3>
            <p className='mt-2 text-lg font-semibold text-indigo-400'>Ilimitado</p>
          </div>
        </div>

        <div className='rounded-2xl bg-slate-900 p-8 border border-slate-800 shadow-xl text-center'>
          <h2 className='text-xl font-bold text-white mb-2'>Pronto para começar suas análises?</h2>
          <p className='text-slate-400 max-w-xl mx-auto mb-6'>
            Sua infraestrutura de autenticação, banco de dados e controle de rotas está 100% configurada e operacional.
          </p>
        </div>
      </main>
    </div>
  );
}
