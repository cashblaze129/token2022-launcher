import { ExtensionType, TOKEN_2022_PROGRAM_ID, TokenAccountNotFoundError, getNewAccountLenForExtensionLen } from "@solana/spl-token";
import { TokenMetadata } from "@solana/spl-token-metadata";
import {
    pack,
} from '@solana/spl-token-metadata';
import { Connection, PublicKey } from "@solana/web3.js";

export async function getAdditionalRentForNewMetadata(
    connection: Connection,
    address: PublicKey,
    tokenMetadata: TokenMetadata,
    programId = TOKEN_2022_PROGRAM_ID
): Promise<number> {
    // TODO: Implement this
    return 0;
}

const TYPE_SIZE = 2;
const LENGTH_SIZE = 2;

export function addTypeAndLengthToLen(len: number): number {
    return len + TYPE_SIZE + LENGTH_SIZE;
}