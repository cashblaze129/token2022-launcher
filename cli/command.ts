import { program } from "commander";
import {
  tokenCreateMint,
  setClusterConfig,
} from "./scripts";

program.version("0.0.1");

programCommand("mint")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .action(async (directory, cmd) => {
    const { env, keypair, rpc, name, ticker, supply, tax, snapshotTime } = cmd.opts();
    console.log("============== solana token 2022 mint ==============");
    if (keypair === undefined || rpc === undefined) {
      console.log("Error Config Data Input");
      return;
    }
    await setClusterConfig(env, keypair, rpc);
    await tokenCreateMint(name, ticker, supply, tax, snapshotTime);
  });


function programCommand(name: string) {
  return program
    .command(name)
    .option("-e, --env <string>", "Solana cluster env name", "devnet") //mainnet-beta, testnet, devnet
    .option(
      "-r, --rpc <string>",
      "Solana cluster RPC name",
      "https://api.devnet.solana.com"
    ) //https://api.devnet.solana.com | https://api.mainnet-beta.solana.com
    .option(
      "-k, --keypair <string>",
      "Solana wallet Keypair Path",
      "/who/admin.json"
    )
    // Add these new options
    .option("--name <string>", "Token name")
    .option("--ticker <string>", "Token ticker/symbol")
    .option("--supply <number>", "Token supply")
    .option("--tax <number>", "Tax rate")
    .option("--snapshotTime <number>", "Snapshot time");
}

program.parse(process.argv);
