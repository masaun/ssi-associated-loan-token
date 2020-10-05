require('dotenv').config();

const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/' + process.env.INFURA_KEY);

let LoanTokenFactory= {};
LoanTokenFactory = require("../../build/contracts/LoanTokenFactory.json");


/***
 * @dev - [Execution]: $ truffle test ./test/LoanTokenFactory.test.js --network rinkeby
 **/
contract("LoanTokenFactory", function(accounts) {

    const loanTokenFactoryABI = LoanTokenFactory.abi;
    const loanTokenFactoryAddr = LoanTokenFactory["networks"]["4"]["address"];
    const loanTokenFactory = new web3.eth.Contract(loanTokenFactoryABI, loanTokenFactoryAddr);

    const senderAddress = "0x718E3ea0B8C2911C5e54Cb4b9B2075fdd87B55a7";
    
    it('Call getLatestPrice() of OilPriceOracle contract', async () => {
        const _borrower = accounts[0]
        const _principal = 5
        const _length = 5
        const _rate = 1e17

        let loanToken = await loanTokenFactory.methods.createLoanToken().send({ from: senderAddress });
        console.log("=== createLoanToken ===", loanToken)
    });

});



