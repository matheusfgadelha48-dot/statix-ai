import fs from "fs-extra";
import path from "path";

function usage() {
  console.log("");
  console.log("Uso:");
  console.log("  npm run startix:generate -- page Nome");
  console.log("  npm run startix:generate -- component Nome");
  console.log("  npm run startix:generate -- service Nome");
  console.log("  npm run startix:generate -- hook Nome");
  console.log("  npm run startix:generate -- api Nome");
  console.log("  npm run startix:generate -- feature Nome");
  console.log("");
}

function validName(name: string) {
  return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(name);
}

async function createFile(
  file: string,
  content: string,
  label: string
) {
  if (await fs.pathExists(file)) {
    console.log(`⚠ ${label} já existe.`);
    console.log(`  ${file}`);
    return false;
  }

  await fs.ensureDir(path.dirname(file));
  await fs.writeFile(file, content, "utf8");

  console.log(`✓ ${label} criado.`);
  console.log(`  ${file}`);

  return true;
}

export async function generateCommand() {
  const args = process.argv.slice(3);
  const type = args[0];
  const name = args[1];

  if (!type || !name) {
    usage();
    return;
  }

  if (!validName(name)) {
    console.log("✗ Nome inválido.");
    console.log("Use apenas letras, números, _ ou -.");
    return;
  }

  const root = process.cwd();

  console.log("");
  console.log("========================================");
  console.log("       STARTIX CORE - GENERATOR");
  console.log("========================================");
  console.log("");

  switch (type) {
    case "page": {
      const file = path.join(
        root,
        "src",
        "app",
        name,
        "page.tsx"
      );

      const content = `export default function ${name}Page() {
  return (
    <main>
      <h1>${name}</h1>
    </main>
  );
}
`;

      await createFile(
        file,
        content,
        `Página ${name}`
      );

      break;
    }

    case "component": {
      const file = path.join(
        root,
        "src",
        "components",
        `${name}.tsx`
      );

      const content = `export function ${name}() {
  return (
    <div>
      ${name}
    </div>
  );
}
`;

      await createFile(
        file,
        content,
        `Componente ${name}`
      );

      break;
    }

    case "service": {
      const file = path.join(
        root,
        "src",
        "services",
        `${name}.service.ts`
      );

      const content = `export const ${name}Service = {
  async execute() {
    // Implementação do serviço ${name}
  },
};
`;

      await createFile(
        file,
        content,
        `Service ${name}`
      );

      break;
    }

    case "hook": {
      const hookName =
        name.startsWith("use") ? name : `use${name}`;

      const file = path.join(
        root,
        "src",
        "hooks",
        `${hookName}.ts`
      );

      const content = `export function ${hookName}() {
  // Implementação do hook ${hookName}
}
`;

      await createFile(
        file,
        content,
        `Hook ${hookName}`
      );

      break;
    }

    case "api": {
      const file = path.join(
        root,
        "src",
        "app",
        "api",
        name,
        "route.ts"
      );

      const content = `import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "${name} API funcionando",
  });
}
`;

      await createFile(
        file,
        content,
        `API ${name}`
      );

      break;
    }

    case "feature": {
      const featureRoot = path.join(
        root,
        "src",
        "features",
        name
      );

      const files = [
        {
          path: path.join(featureRoot, "components", `${name}.tsx`),
          content: `export function ${name}Feature() {
  return (
    <section>
      <h2>${name}</h2>
    </section>
  );
}
`,
          label: `Feature ${name} - componente`,
        },
        {
          path: path.join(featureRoot, "services", `${name}.service.ts`),
          content: `export const ${name}Service = {
  async execute() {
    // Serviço da feature ${name}
  },
};
`,
          label: `Feature ${name} - service`,
        },
        {
          path: path.join(featureRoot, "types", `${name}.types.ts`),
          content: `export interface ${name}Data {
  id: string;
}
`,
          label: `Feature ${name} - types`,
        },
        {
          path: path.join(featureRoot, "index.ts"),
          content: `export * from "./components/${name}";
export * from "./services/${name}.service";
export * from "./types/${name}.types";
`,
          label: `Feature ${name} - index`,
        },
      ];

      let created = 0;

      for (const item of files) {
        if (
          await createFile(
            item.path,
            item.content,
            item.label
          )
        ) {
          created++;
        }
      }

      console.log("");
      console.log(
        `✓ Feature ${name}: ${created} arquivo(s) criado(s).`
      );

      break;
    }

    default:
      console.log(`✗ Tipo "${type}" não reconhecido.`);
      usage();
      return;
  }

  console.log("");
  console.log("✓ Operação concluída.");
  console.log("");
}
