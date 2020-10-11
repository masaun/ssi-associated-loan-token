var TUSDmockToken = artifacts.require("TUSDmockToken");

//const initialSupply = 100000000000000000000000000;  /// Initial Supply amount is 100M

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(TUSDmockToken);
    //await deployer.deploy(TUSDmockToken, initialSupply);
};
