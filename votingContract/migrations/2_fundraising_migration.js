const FundRaising= artifacts.require("FundRaising");

module.exports = function(deployer) {
  deployer.deploy(FundRaising,10,4);
};
