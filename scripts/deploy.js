const hre = require('hardhat')
//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  const unlockTime = currentTimestampInSeconds + 60

  const lockedAmount = hre.ethers.utils.parseEther('0.001')

  const Crowdfunding = await hre.ethers.getContractFactory('Crowdfunding')

  const crowdfunding = await Crowdfunding.deploy()

  await crowdfunding.deployed()

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${
      crowdfunding.address
    }`
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
