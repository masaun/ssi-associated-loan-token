const LendingPoolFactory = artifacts.require("LendingPoolFactory");

/// @dev - Contract address on Ropsten testnet
const _tusd = "0xB36938c51c4f67e5E1112eb11916ed70A772bD75";
const _link = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
const _linkPriceFeed = "0x40c9885aa8213B40e3E8a0a9aaE69d4fb5915a3A";

module.exports = function(deployer) {
    deployer.deploy(LendingPoolFactory, _tusd, _link, _linkPriceFeed);
};
