import { Command } from "commander";
import { initCommand } from "./commands/init";
import { doctorCommand } from "./commands/doctor";
import { generateCommand } from "./commands/generate";
import { setupCommand } from "./commands/setup";
import { configCommand } from "./commands/config";

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
  .description("Gera módulos automaticamente")
  .action(async (type: string, name: string) => {
    process.argv.push(type, name);
    await generateCommand();
  });

program
  .command("setup")
  .description("Prepara automaticamente a estrutura da STARTIX IA")
  .action(setupCommand);

program
  .command("config")
  .description("Verifica a configuração do projeto")
  .action(configCommand);

program.parseAsync(process.argv);
