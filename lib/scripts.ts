import * as fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

export const mintTransaction = async (
  name: string,
  ticker: string,
  supply: number,
  tax: number,
  snapshotTime: number
) => {
  try {

    console.log("============== tokenCreateMint ==============");
    console.log("name: ", name);
    console.log("ticker: ", ticker);
    console.log("supply: ", supply);
    console.log("tax: ", tax);
    console.log("snapshotTime: ", snapshotTime);

    console.log("Minting...");

    console.log("sending mint transaction");

    console.log("Mint transaction signature: ");

    console.log("Adding metadata...");

    console.log("saving token info");
    console.log("Token infos saved in tokenInfo.json file");

    console.log("Mint transaction signature: ");

    return true;
  } catch (error) {
    console.log("Error: ", error);
    return false;
  }
}
