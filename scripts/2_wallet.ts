import { createWalletClient, http, parseEther } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { goerli } from "viem/chains";

const getAccount = async () => {
  let account;
  if (process.env.ACCOUNT_PK) {
    const loadedPrivateKey = process.env.ACCOUNT_PK as `0x${string}`;
    account = privateKeyToAccount(loadedPrivateKey);
    console.log("Loaded private key from .env");
    console.log("Loaded address:", account.address);
  } else {
    const randomPrivateKey = generatePrivateKey();
    account = privateKeyToAccount(randomPrivateKey);
    const envString = `ACCOUNT_PK=${randomPrivateKey}`;
    await Bun.write(".env", envString);
    console.log("Generated random private key (saved into .env):");
    console.log("Generated address:", account.address);
  }

  return account;
};

const wallet = createWalletClient({
  account: await getAccount(),
  chain: goerli,
  transport: http(),
});

export { wallet as goerliWallet };
