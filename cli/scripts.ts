import { Program, web3 } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import { Keypair } from "@solana/web3.js";
import fs from "fs";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

import {
  mintTransaction,
} from "../lib/scripts";

// Set the initial program and provider
let program: Program = null;
let provider: anchor.Provider = null;
let payer: NodeWallet = null;

provider = anchor.getProvider();

let solConnection = anchor.getProvider().connection;

export const setClusterConfig = async (
  cluster: web3.Cluster,
  keypair: string,
  rpc?: string
) => {
  if (!rpc) {
    solConnection = new web3.Connection(web3.clusterApiUrl(cluster));
  } else {
    solConnection = new web3.Connection(rpc);
  }
  console.log("Wallet Address: ", wallet.publicKey.toBase58());

};

export const tokenCreateMint = async (name: string, ticker: string, supply: number, tax: number, snapshotTime: number) => {

  let result = await mintTransaction(
    name,
    ticker,
    supply,
    tax,
    snapshotTime
  );

  if (!result) {
    console.log("Minting failed!");
    return false;
  }

  console.log("Minting finished!");

  return true;
};
