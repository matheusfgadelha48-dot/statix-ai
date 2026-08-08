import fs from "fs-extra";
import path from "path";

export async function generateCommand() {
  const root = process.cwd();

  const directories = [
    "src/components",
    "src/lib",
    "src/services",
    "src/hooks",
    "src/types",
    "src/utils"
  ];

  for (const directory of directories) {
    await fs.ensureDir(path.join(root, directory));
  }

  console.log("");
  console.log("========================================");
  console.log("      STARTIX CORE - GENERATE");
  console.log("========================================");
  console.log("");
  console.log("✓ Estrutura base de desenvolvimento criada.");
  console.log("✓ components/");
  console.log("✓ lib/");
  console.log("✓ services/");
  console.log("✓ hooks/");
  console.log("✓ types/");
  console.log("✓ utils/");
  console.log("");
}
