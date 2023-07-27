const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const {ethers} = require("hardhat");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)
    const tokenName = "NFTEarthOFT"
    const tokenSymbol = "NFTE"
    const sharedDecimals = 8;

    await deploy("NFTEarthOFT", {
        from: deployer,
        args: [tokenName, tokenSymbol, sharedDecimals, lzEndpointAddress],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["NFTEarthOFT"]
