const LoanTokenFactory = artifacts.require("LoanTokenFactory");

module.exports = function(deployer) {
    deployer.deploy(LoanToken);
};
