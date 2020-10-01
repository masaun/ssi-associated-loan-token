// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import { LendingPool } from "./LendingPool.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";


/**
 * @dev - LendingPool Factory Contract for Chainlink workshop 
 */
abstract contract LendingPoolFactory is LendingPool {
    using SafeMath for uint256;

    // Ropsten testnet
    constructor(address _tusd, address _link, address _linkPriceFeed) public LendingPool(_tusd, _link, _linkPriceFeed) {
    }

    function testFunc() public returns (uint) {
        uint testCount = 1;  ///@notice - This is
        return testCount;
    }
    

}
