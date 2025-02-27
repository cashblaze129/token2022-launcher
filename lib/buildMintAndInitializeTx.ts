import {
    AccountState,
    ExtensionType,
} from "@solana/spl-token";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
import { tokenConfig } from "./tokenConfig";

export async function buildMintAndInitializeTransaction(
    connection: Connection,
    payer: Keypair,
    mint: PublicKey,
    tax: number,
    supply: number
): Promise<Transaction> {

    const transaction = new Transaction();
    const extensions: ExtensionType[] = [];
    const instructions: TransactionInstruction[] = [];

    // TODO: Implement this
    console.log("transaction complete");
    return transaction;
}