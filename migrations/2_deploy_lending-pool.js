const LendingPool = artifacts.require("LendingPool");

//@dev - Import from exported file
var contractAddressList = require('./contractAddress/contractAddress.js');
var tokenAddressList = require('./tokenAddress/tokenAddress.js');
var walletAddressList = require('./walletAddress/walletAddress.js');

/// @dev - Contract address on Rinkeby testnet
const _tusd = tokenAddressList["Rinkeby"]["TUSD"];
const _link = tokenAddressList["Rinkeby"]["LINK"];
const _linkPriceFeed = contractAddressList["Rinkeby"]["PriceFeed"]["LinkPriceFeed(LINK/USD)"];

module.exports = function(deployer) {
    deployer.deploy(LendingPool, _tusd, _link, _linkPriceFeed);
};
