const CrunchySwapToken = artifacts.require("CrunchySwapToken");

module.exports = function (deployer) {
  deployer.deploy(CrunchySwapToken);
};
