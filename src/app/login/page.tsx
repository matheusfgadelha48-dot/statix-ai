
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro ao fazer login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100'>
      <div className='w-full max-w-md space-y-8 rounded-2xl bg-slate-900 p-8 border border-slate-800 shadow-2xl'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-white'>Startix IA</h1>
          <p className='mt-2 text-sm text-slate-400'>Entre na sua conta para continuar</p>
        </div>

        {error && (
          <div className='rounded-lg bg-red-500/10 p-4 border border-red-500/20 text-sm text-red-400 text-center'>
            {error}
          </div>
        )}

        <form className='mt-8 space-y-6' onSubmit={handleLogin}>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-slate-300'>E-mail</label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='seu@email.com'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-slate-300'>Senha</label>
              <input
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
                placeholder='••••••••'
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50'
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <p className='text-center text-sm text-slate-400'>
            Não tem uma conta?{' '}
            <Link href='/register' className='font-medium text-indigo-400 hover:text-indigo-300'>
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

