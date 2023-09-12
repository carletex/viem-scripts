import { createPublicClient, formatEther, http } from "viem";
import { mainnet } from "viem/chains";

// A client provides an abstraction for a connection to the Ethereum Network.
// It provides read-only access to the Blockchain and its status.
// Connect to a public client (equivalent to "provider" in Ethers)
const client = createPublicClient({
  chain: mainnet,
  // You can add your alchemy / infura / own node RPC here.
  transport: http(),
});

console.log("📡 Connected to", client.chain.name, "chain id", client.chain.id);

// Some actions that you can do
const blockNumber = await client.getBlockNumber();
console.log("Current block number", blockNumber);

const austinAddress = await client.getEnsAddress({ name: "atg.eth" });
console.log("atg.eth is", austinAddress);

if (austinAddress) {
  const austinBalance = await client.getBalance({ address: austinAddress });
  console.log("austin balance", formatEther(austinBalance));
}

export { client as mainnetClient, austinAddress };
