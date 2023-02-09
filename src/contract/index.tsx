import { ethers } from "ethers";
const Abis = require("./abi.json");

const address = "0x9246D984adE8EF81be748998a03CfD8eED3be4Dd";

const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");

const marketContract = new ethers.Contract(
    address,
    Abis.marketABI,
    provider
);

export { marketContract };