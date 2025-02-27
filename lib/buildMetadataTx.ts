import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { getAdditionalRentForNewMetadata } from "./getAdditionalRent";
import { TOKEN_2022_PROGRAM_ID, createInitializeInstruction } from "@solana/spl-token";
import { PublicKey as UMI_Publickey, createSignerFromKeypair, none, percentAmount, publicKey, signerIdentity } from "@metaplex-foundation/umi";
import { fromWeb3JsKeypair, fromWeb3JsPublicKey } from "@metaplex-foundation/umi-web3js-adapters";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { Collection, CollectionDetails, CreateV1InstructionAccounts, CreateV1InstructionData, Creator, PrintSupply, TokenStandard, Uses, createV1 } from "@metaplex-foundation/mpl-token-metadata";
import bs58 from "bs58";
import { tokenConfig } from "./tokenConfig";

export async function buildMetadataTransaction(
    connection: Connection,
    payer: Keypair,
    mint: PublicKey,
    name: string,
    symbol: string
): Promise<Transaction> {

    // TODO: Build Metadata Transaction
    return new Transaction();
}