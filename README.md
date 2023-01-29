# Kalos Farms & pools Contracts

This repo contains all the contracts used in Kalos DeFi. It is divided in independent projects where each of them contains its smart contracts, test environment and unique config files.

## Existing projects

| Project name                                                          | Description                                                                                                                | Solidity version(s)      |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [BSC Library]                                                         | Legacy implementation of BEP20/IBEP20/SafeBEP20. Not to be used for new contracts.                                         | 0.6.12                   |
| [Kalos Vault]                                                         | XALO vault ("AutoPool") contract that allows auto-compounding for XALO tokens.                                             | 0.6.12                   |
| [Exchange Protocol]                                                   | Based on Uniswap V2, it combines peripheral and core trading and liquidity protocols. It also adds new features like zaps. | 0.5.16 / 0.6.6 / 0.8.4   |
| [Farms and Pools]                                                     | Based on SushiSwap's MasterChef, it also includes stand-alone pools and pool deployer.                                     | 0.6.12                   |



