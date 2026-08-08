import fs from "fs-extra";
import path from "path";

export async function doctorCommand() {
  const root = process.cwd();

  const requiredFiles = [
    "package.json",
    "tsconfig.json",
    "next.config.ts"
  ];

  const requiredDirectories = [
    "src",
    "public",
    "cli"
  ];

  let errors = 0;

  console.log("");
  console.log("========================================");
  console.log("       STARTIX CORE - DOCTOR");
  console.log("========================================");
  console.log("");

  for (const file of requiredFiles) {
    const exists = await fs.pathExists(path.join(root, file));

    if (exists) {
      console.log(`✓ ${file}`);
    } else {
      console.log(`✗ ${file} - AUSENTE`);
      errors++;
    }
  }

  for (const directory of requiredDirectories) {
    const exists = await fs.pathExists(path.join(root, directory));

    if (exists) {
      console.log(`✓ ${directory}/`);
    } else {
      console.log(`✗ ${directory}/ - AUSENTE`);
      errors++;
    }
  }

  console.log("");

  if (errors === 0) {
    console.log("✓ STARTIX CORE: nenhum problema estrutural encontrado.");
  } else {
    console.log(`⚠ STARTIX CORE encontrou ${errors} problema(s).`);
  }

  console.log("");
}
