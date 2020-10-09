require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/' + process.env.INFURA_KEY);

let LendingPool= {};
LendingPool = require("../../build/contracts/LendingPool.json");

const senderAddress = "0x718E3ea0B8C2911C5e54Cb4b9B2075fdd87B55a7";


/***
 * @dev - [Execution]: $ truffle test ./test/test-rinkeby/LendingPool.test.js --network rinkeby
 **/
contract("LendingPool", function(accounts) {

    const lendingPoolABI = LendingPool.abi;
    const lendingPoolAddr = LendingPool["networks"]["4"]["address"];
    const lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddr);
    
    it('Call balance() of LendingPool contract', async () => {         /// Success
        let _balance = await lendingPool.methods.balance().call();
        console.log("=== balance() ===", _balance);
    });

    it('Call exchangeRate() of LendingPool contract', async () => {    /// Success
        let _exchangeRate = await lendingPool.methods.exchangeRate().call();
        console.log("=== exchangeRate() ===", _exchangeRate);
    });

    it('Call fetchlinkPrice() of LendingPool contract', async () => {  /// Success
        let _fetchlinkPrice = await lendingPool.methods.fetchlinkPrice().call();
        console.log("=== fetchlinkPrice() ===", _fetchlinkPrice);
    });

    it('Send mint() of LendingPool contract', async () => {
        const _mintAmount = 100
        const mintAmount = web3.utils.toWei(`${_mintAmount}`, 'ether');

        let result = await lendingPool.methods.mint(mintAmount).send({ from: senderAddress });
        console.log("=== mint() ===", result);
    });    

});





