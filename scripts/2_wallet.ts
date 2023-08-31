import "dotenv/config";
import { createWalletClient, http } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const wallet = createWalletClient({
  chain: sepolia,
  transport: http(),
});

let account;
if (process.env.ACCOUNT_PK) {
  const loadedPrivateKey = process.env.ACCOUNT_PK as `0x${string}`;
  account = privateKeyToAccount(loadedPrivateKey);
  console.log("Loaded private key from .env");
} else {
  const randomPrivateKey = generatePrivateKey();
  account = privateKeyToAccount(randomPrivateKey);
  console.log(
    "Generated random private key (don't print this :D):",
    randomPrivateKey
  );
}

console.log("Generated address:", account.address);
