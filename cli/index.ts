import { Command } from "commander";
import { initCommand } from "./commands/init";
import { doctorCommand } from "./commands/doctor";
import { generateCommand } from "./commands/generate";
import { setupCommand } from "./commands/setup";

const program = new Command();

program
  .name("startix")
  .description("STARTIX CORE - automação e gerenciamento do projeto STARTIX IA")
  .version("0.1.0");

program
  .command("init")
  .description("Inicializa e verifica a estrutura da STARTIX")
  .action(initCommand);

program
  .command("doctor")
  .description("Verifica a saúde e configuração do projeto")
  .action(doctorCommand);

program
  .command("generate <type> <name>")
  .description("Gera páginas e componentes automaticamente")
  .action(async (type: string, name: string) => {
    process.argv.push(type, name);
    await generateCommand();
  });

program
  .command("setup")
  .description("Prepara automaticamente a estrutura da STARTIX IA")
  .action(setupCommand);

program.parseAsync(process.argv);
