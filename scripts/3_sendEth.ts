import { austinAddress, mainnetClient } from "./1_client";
import { goerliWallet } from "./2_wallet";
import { parseEther } from "viem";

if (austinAddress) {
  // Sending ETH on sepolia
  const hash = await goerliWallet.sendTransaction({
    to: austinAddress,
    value: parseEther("0.001"),
  });
  console.log(
    `Sent Sepolia ETH transaction: https://goerli.etherscan.io/tx/${hash}`
  );
}
