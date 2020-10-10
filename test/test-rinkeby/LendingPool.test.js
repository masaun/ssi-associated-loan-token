require('dotenv').config();

const Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${ process.env.INFURA_KEY }`);
const web3 = new Web3(provider);

let LendingPool = {};
let TUSDmockToken = {}; 
LendingPool = require("../../build/contracts/LendingPool.json");
TUSDmockToken = require("../../build/contracts/TUSDmockToken.json");

const senderAddress = "0x718E3ea0B8C2911C5e54Cb4b9B2075fdd87B55a7";


/***
 * @dev - [Execution]: $ truffle test ./test/test-rinkeby/LendingPool.test.js --network rinkeby
 **/
contract("LendingPool", function(accounts) {

    let lendingPool;
    let tUSD;

    let LENDING_POOL;
    let TUSD;

    before('Setup contracts', async () => {
        const lendingPoolABI = LendingPool.abi;
        LENDING_POOL = LendingPool["networks"]["4"]["address"];
        lendingPool = new web3.eth.Contract(lendingPoolABI, LENDING_POOL); 

        const tUSDmockTokenABI = TUSDmockToken.abi;
        TUSD = TUSDmockToken["networks"]["4"]["address"];
        tUSD = new web3.eth.Contract(tUSDmockTokenABI, TUSD); 
    });

    // const lendingPoolABI = LendingPool.abi;
    // const lendingPoolAddr = LendingPool["networks"]["4"]["address"];
    // const lendingPool = new web3.eth.Contract(lendingPoolABI, lendingPoolAddr);
    
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

    it('deposit LINK to use as collateral to borrow', async () => {
        /// minted amount
        const _depositAmount = 1;  /// 1 LINK (Rinkeby)
        const depositAmount = web3.utils.toWei(`${_depositAmount}`, 'ether');

        /// Execute approve() for transferFrom()
        let approved = await tUSD.methods.approve(LENDING_POOL, depositAmount).send({ from: senderAddress }); 

        /// Execute deposit()
        let result = await lendingPool.methods.deposit(depositAmount).send({ from: senderAddress });
        console.log("=== deposit() ===", result);
    });    

    it('Send mint() of LendingPool contract', async () => {
        /// minted amount
        const _mintAmount = 1;
        const mintAmount = web3.utils.toWei(`${_mintAmount}`, 'ether');

        /// Execute approve() for transferFrom()
        let approved = await tUSD.methods.approve(LENDING_POOL, mintAmount).send({ from: senderAddress }); 

        /// Execute mint()
        let result = await lendingPool.methods.mint(mintAmount).send({ from: senderAddress });
        console.log("=== mint() ===", result);
    });    

});
