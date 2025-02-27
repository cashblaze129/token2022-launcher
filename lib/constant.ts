import dotenv from 'dotenv';
dotenv.config();
import { PublicKey, Keypair, Connection } from "@solana/web3.js";
import { AnchorProvider } from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import * as fs from 'fs';

export const RPC_URL = "https://api.devnet.solana.com";

export const adminKeypair = Keypair.fromSecretKey(Buffer.from(JSON.parse(process.env.ADMIN_PRIVATE_KEY))));

export const connection = new Connection(RPC_URL, "confirmed");

export const adminWallet = new NodeWallet(adminKeypair);

export const provider = new AnchorProvider(connection, adminWallet, {
    commitment: 'confirmed',
});

export const SOL_MINT = new PublicKey("So11111111111111111111111111111111111111112");