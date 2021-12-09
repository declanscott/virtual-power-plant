const VirtualPowerPlant = artifacts.require("./VirtualPowerPlant.sol");
const BatteryInvestment = artifacts.require("./BatteryInvestment.sol");
const BatteryEnergy = artifacts.require("./BatteryEnergy.sol");

module.exports = function (deployer) {
  deployer.deploy(VirtualPowerPlant).then(function () {
    deployer.deploy(BatteryInvestment, VirtualPowerPlant.address, 2);
    return deployer.deploy(BatteryEnergy, VirtualPowerPlant.address);
  });
};
