import { Command } from "commander";
import { initCommand } from "./commands/init";
import { doctorCommand } from "./commands/doctor";
import { generateCommand } from "./commands/generate";

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
  .description("Verifica a saúde e a configuração do projeto")
  .action(doctorCommand);

program
  .command("generate")
  .description("Gera estruturas da aplicação")
  .action(generateCommand);

program.parseAsync(process.argv);
