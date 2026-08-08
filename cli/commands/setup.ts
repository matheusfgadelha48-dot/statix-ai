import fs from "fs-extra";
import path from "path";

export async function setupCommand() {
  const root = process.cwd();

  const directories = [
    "src/app",
    "src/components",
    "src/components/ui",
    "src/hooks",
    "src/lib",
    "src/lib/supabase",
    "src/services",
    "src/types",
    "src/utils",
    "src/features",
    "src/features/auth",
    "src/features/dashboard",
    "src/features/scanner",
    "src/features/analytics",
    "src/features/recommendations",
    "src/features/bankroll",
    "src/features/history",
    "src/features/payments",
    "src/features/ai"
  ];

  console.log("");
  console.log("========================================");
  console.log("        STARTIX CORE - SETUP");
  console.log("========================================");
  console.log("");

  let created = 0;
  let existing = 0;

  for (const directory of directories) {
    const fullPath = path.join(root, directory);

    if (await fs.pathExists(fullPath)) {
      console.log(`✓ Já existe: ${directory}/`);
      existing++;
    } else {
      await fs.ensureDir(fullPath);
      console.log(`+ Criado: ${directory}/`);
      created++;
    }
  }

  console.log("");
  console.log("----------------------------------------");
  console.log(`Pastas existentes: ${existing}`);
  console.log(`Pastas criadas:    ${created}`);
  console.log("----------------------------------------");
  console.log("");
  console.log("✓ STARTIX CORE - SETUP concluído.");
  console.log("✓ Nenhum arquivo existente foi sobrescrito.");
  console.log("");
}
