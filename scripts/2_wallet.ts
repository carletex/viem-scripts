import { createWalletClient, http } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

const wallet = createWalletClient({
  chain: sepolia,
  transport: http(),
});

const privateKey = generatePrivateKey();
console.log("Generated random private key (don't do this :D):", privateKey);

const account = privateKeyToAccount(privateKey);
console.log("Generated address:", account.address);
