/////////////////////////////////
/// Testing on the local
////////////////////////////////

require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));

let LendingPool = {};
let TUSDmockToken = {}; 
LendingPool = artifacts.require("LendingPool");
TUSDmockToken = artifacts.require("TUSDmockToken");


/***
 * @dev - [Execution]: $ truffle test ./test/test-rinkeby/LendingPool.test.js --network rinkeby
 **/
contract("LendingPool", function(accounts) {

    const senderAddress = accounts[0];
    console.log('=== senderAddress / accounts[0] ===', accounts[0]);


    let lendingPool;
    let tUSD;

    let LENDING_POOL;
    let TUSD;

    it('Setup contracts', async () => {
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        if (LendingPool.networks) {
            deployedNetwork = LendingPool.networks[networkId.toString()];
            if (deployedNetwork) {
                lendingPool = new web3.eth.Contract(
                    LendingPool.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                LENDING_POOL = deployedNetwork.address;
            }
        }

        if (TUSDmockToken.networks) {
            deployedNetwork = TUSDmockToken.networks[networkId.toString()];
            if (deployedNetwork) {
                tUSD = new web3.eth.Contract(
                    TUSDmockToken.abi,
                    deployedNetwork && deployedNetwork.address,
                );
                TUSD = deployedNetwork.address;
            }
        }        

    });
    
    it('Call balance() of LendingPool contract', async () => {         /// Success
        let _balance = await lendingPool.methods.balance().call();
        console.log("=== balance() ===", _balance);
    });

    // it('Call exchangeRate() of LendingPool contract', async () => {
    //     let _exchangeRate = await lendingPool.methods.exchangeRate().call();
    //     console.log("=== exchangeRate() ===", _exchangeRate);
    // });

    // it('Call fetchlinkPrice() of LendingPool contract', async () => {
    //     let _fetchlinkPrice = await lendingPool.methods.fetchlinkPrice().call();
    //     console.log("=== fetchlinkPrice() ===", _fetchlinkPrice);
    // });

    it('Send mint() of LendingPool contract', async () => {

        /// minted amount
        const _mintAmount = 100;
        const mintAmount = web3.utils.toWei(`${_mintAmount}`, 'ether');

        /// Mint tUSD for senderAddress
        let res1 = await tUSD.methods.mintTo(senderAddress, mintAmount).send({ from: senderAddress }); 

        /// Execute approve() for transferFrom()
        let approved = await tUSD.methods.approve(LENDING_POOL, mintAmount).send({ from: senderAddress }); 

        /// Execute mint() --> Can't execute due to need returned value of fetchlinkPrice() that need rinkeby
        //let result = await lendingPool.methods.mint(mintAmount).send({ from: senderAddress });
        //console.log("=== mint() ===", result);
    });    

});
