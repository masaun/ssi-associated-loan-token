require('dotenv').config();

const Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const provider = new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${ process.env.INFURA_KEY }`);
const web3 = new Web3(provider);

let LoanTokenFactory = {};
LoanTokenFactory = require("../../build/contracts/LoanTokenFactory.json");

const walletAddress = process.env.WALLET_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

/***
 * @dev - [Execution]: $ truffle test ./test/test-rinkeby/LoanTokenFactory.test.js --network rinkeby
 **/
contract("LoanTokenFactory", function(accounts) {

    const loanTokenFactoryABI = LoanTokenFactory.abi;
    const loanTokenFactoryAddr = LoanTokenFactory["networks"]["4"]["address"];
    const loanTokenFactory = new web3.eth.Contract(loanTokenFactoryABI, loanTokenFactoryAddr);
    
    it('Send createLoanToken() of LoanTokenFactory contract', async () => {
        const _borrower = walletAddress
        const _principal = web3.utils.toWei('100', 'ether')  /// Principal amount(元本) = 100 token 
        const _length = 31536000   /// Timestamp for setting expire date (Note: expiry = block.timestamp.add(length))
        const _rate = web3.utils.toWei('1', 'ether')  /// Borrow rate = 1%

        let inputData1 = await loanTokenFactory.methods.createLoanToken(_borrower, _principal, _length, _rate).encodeABI();
        let transaction1 = await sendTransaction(walletAddress, privateKey, loanTokenFactoryAddr, inputData1)
    });

});

/***
 * @notice - Sign and Broadcast the transaction
 **/
async function sendTransaction(walletAddress, privateKey, contractAddress, inputData) {
    try {
        const txCount = await web3.eth.getTransactionCount(walletAddress);
        const nonce = await web3.utils.toHex(txCount);
        console.log('=== txCount, nonce ===', txCount, nonce);

        /// Build the transaction
        const txObject = {
            nonce:    web3.utils.toHex(txCount),
            from:     walletAddress,
            to:       contractAddress,  /// Contract address which will be executed
            value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
            gasLimit: web3.utils.toHex(2100000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
            data: inputData  
        }
        console.log('=== txObject ===', txObject)

        /// Sign the transaction
        privateKey = Buffer.from(privateKey, 'hex');
        let tx = new Tx(txObject, { 'chain': 'rinkeby'});
        tx.sign(privateKey);

        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');

        /// Broadcast the transaction
        const transaction = await web3.eth.sendSignedTransaction(raw);
        console.log('=== transaction ===', transaction)

        /// Return the result above
        return transaction;
    } catch(e) {
        console.log('=== e ===', e);
        return String(e);
    }
}




