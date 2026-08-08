import fs from "fs-extra";
import path from "path";

export async function configCommand() {
  const root = process.cwd();

  console.log("");
  console.log("========================================");
  console.log("       STARTIX CORE - CONFIG");
  console.log("========================================");
  console.log("");

  const checks = [
    {
      name: "package.json",
      path: "package.json",
    },
    {
      name: "tsconfig.json",
      path: "tsconfig.json",
    },
    {
      name: "next.config.ts",
      path: "next.config.ts",
    },
    {
      name: ".env.local",
      path: ".env.local",
    },
    {
      name: "Supabase",
      path: "src/lib/supabase",
    },
    {
      name: "CLI",
      path: "cli",
    },
    {
      name: "Source",
      path: "src",
    },
  ];

  let ok = 0;
  let missing = 0;

  for (const item of checks) {
    const exists = await fs.pathExists(
      path.join(root, item.path)
    );

    if (exists) {
      console.log(`✓ ${item.name}`);
      ok++;
    } else {
      console.log(`✗ ${item.name} - AUSENTE`);
      missing++;
    }
  }

  console.log("");
  console.log("----------------------------------------");
  console.log(`Itens encontrados: ${ok}`);
  console.log(`Itens ausentes:    ${missing}`);
  console.log("----------------------------------------");
  console.log("");

  if (missing === 0) {
    console.log("✓ CONFIGURAÇÃO BASE: OK");
  } else {
    console.log("⚠ Existem itens que precisam de configuração.");
  }

  console.log("");
}
