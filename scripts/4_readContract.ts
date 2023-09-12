import { mainnetDAI } from "../contracts/mainnetDAI";
import { mainnetClient } from "./1_client";
import { formatEther } from "viem";

const totalSupply = await mainnetClient.readContract({
  address: mainnetDAI.address,
  abi: mainnetDAI.abi,
  functionName: "totalSupply",
});

console.log("The max supply of DAI is", formatEther(totalSupply));

const austinAddress = await mainnetClient.getEnsAddress({ name: "atg.eth" });
if (austinAddress) {
  const data = await mainnetClient.readContract({
    address: mainnetDAI.address,
    abi: mainnetDAI.abi,
    functionName: "balanceOf",
    args: [austinAddress],
  });

  console.log("Austin's DAI balance", formatEther(data));
}
