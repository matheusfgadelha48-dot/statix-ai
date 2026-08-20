"use client";

import { FormEvent, useState } from "react";
import { authService } from "@/features/auth";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await authService.signUp({
      name,
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Cadastro realizado. Verifique seu e-mail para confirmar a conta."
    );

    setName("");
    setEmail("");
    setPassword("");
    setLoading(false);
  }

  return (
    <main>
      <h1>Criar conta</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Criando conta..." : "Criar conta"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </main>
  );
}
