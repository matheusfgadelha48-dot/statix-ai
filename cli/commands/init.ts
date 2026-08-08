import fs from "fs-extra";
import path from "path";

export async function initCommand() {
  const root = process.cwd();

  const directories = [
    "cli",
    "cli/commands",
    "cli/utils",
    "cli/config",
    "cli/services",
    "src",
    "src/lib",
    "src/lib/supabase"
  ];

  for (const directory of directories) {
    await fs.ensureDir(path.join(root, directory));
  }

  console.log("");
  console.log("========================================");
  console.log("       STARTIX CORE - INIT");
  console.log("========================================");
  console.log("");
  console.log("✓ Estrutura verificada.");
  console.log("✓ Diretórios necessários verificados.");
  console.log("✓ Projeto pronto para continuar.");
  console.log("");
}
