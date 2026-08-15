import fs from "fs-extra";
import path from "path";

export async function createAuthCommand() {
  const root = process.cwd();

  const files = [
    {
      file: "src/features/auth/types/auth.types.ts",
      content:
`export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends AuthCredentials {
  name?: string;
}
`,
    },
    {
      file: "src/features/auth/services/auth.service.ts",
      content:
`import { supabase } from "@/lib/supabase/client";
import type { AuthCredentials, SignUpData } from "../types/auth.types";

export const authService = {
  async signUp({ email, password, name }: SignUpData) {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
  },

  async signIn({ email, password }: AuthCredentials) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  async signOut() {
    return supabase.auth.signOut();
  },

  async getSession() {
    return supabase.auth.getSession();
  },
};
`,
    },
    {
      file: "src/features/auth/index.ts",
      content:
`export * from "./services/auth.service";
export * from "./types/auth.types";
`,
    },
  ];

  console.log("");
  console.log("========================================");
  console.log("       STARTIX CORE - AUTH");
  console.log("========================================");
  console.log("");

  let created = 0;
  let existing = 0;

  for (const item of files) {
    const fullPath = path.join(root, item.file);

    if (await fs.pathExists(fullPath)) {
      console.log("✓ Já existe: " + item.file);
      existing++;
      continue;
    }

    await fs.ensureDir(path.dirname(fullPath));
    await fs.writeFile(fullPath, item.content, "utf8");

    console.log("+ Criado: " + item.file);
    created++;
  }

  console.log("");
  console.log("Arquivos criados: " + created);
  console.log("Arquivos existentes: " + existing);
  console.log("");
  console.log("✓ Estrutura Auth criada com segurança.");
  console.log("");
}
