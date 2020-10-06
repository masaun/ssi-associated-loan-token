require('dotenv').config();

const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`);
const web3 = new Web3(provider);


let LendingPool= {};
LendingPool = require("../build/contracts/LendingPool.json");

const lendingPoolABI = LendingPool.abi;
const lendingPoolAddr = LendingPool["networks"]["4"]["address"];
const lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddr);

const senderAddress = "0x718E3ea0B8C2911C5e54Cb4b9B2075fdd87B55a7";

async function balance() {
    let balance = await lendingPool.methods.balance().call();
    console.log("=== balance() ===", balance);
}
balance();





