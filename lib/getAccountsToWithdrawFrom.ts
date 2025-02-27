import {
    PublicKey,
} from '@solana/web3.js';

import {
    TOKEN_2022_PROGRAM_ID,
    unpackAccount,
    getTransferFeeAmount,
} from '@solana/spl-token';
import { connection } from './constant';

export async function getAccountsToWithdrawFrom(
    mint: PublicKey,
): Promise<PublicKey[]> {
    // TODO: Implement this
    return [];
}