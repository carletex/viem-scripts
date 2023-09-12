import { mainnetDAI } from "../contracts/mainnetDAI";
import { mainnetClient } from "./1_client";
import { formatEther } from "viem";

const data = await mainnetClient.readContract({
  address: mainnetDAI.address,
  abi: mainnetDAI.abi,
  functionName: "totalSupply",
});

console.log("The max supply of DAI is", formatEther(data));
