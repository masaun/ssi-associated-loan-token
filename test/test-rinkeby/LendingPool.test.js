require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/' + process.env.INFURA_KEY);

let LendingPool= {};
LendingPool = require("../../build/contracts/LendingPool.json");


/***
 * @dev - [Execution]: $ truffle test ./test/test-rinkeby/LendingPool.test.js --network rinkeby
 **/
contract("LendingPool", function(accounts) {

    const lendingPoolABI = LendingPool.abi;
    const lendingPoolAddr = LendingPool["networks"]["4"]["address"];
    const lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddr);

    const senderAddress = "0x718E3ea0B8C2911C5e54Cb4b9B2075fdd87B55a7";
    
    it('Send call() of LendingPool contract', async () => {
        let balance = await lendingPool.methods.balance().call();
        console.log("=== balance() ===", balance)
    });

});



