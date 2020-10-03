// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

/**
 * LendingPool Contract for Chainlink workshop 
 * Assumptions & Constraints:
 * - TUSD is always worth $1
 * - Ignore Leap Years
 * - Fixed interest rate on borrowing
 * - Can't withdraw if pool lacks liquidity
 * - No reserve
 */
interface ILendingPool {

    // get TUSD balance of this contract
    function balance() external view returns (uint256);

    // get price of interest bearing token
    function exchangeRate() external view returns (uint256);

    // mint interest bearing TUSD
    // @param amount TUSD amount
    function mint(uint256 amount) external;

    // redeem pool tokens for TUSD
    // @param amount zToken amonut
    function redeem(uint256 amount) external;

    // deposit LINK to use as collateral to borrow
    function deposit(uint256 amount) external;

    // withdraw LINK used as collateral
    // could cause user to be undercollateralized
    function withdraw(uint256 amount) external;

    // borrow TUSD using LINK as collateral
    function borrow(uint256 amount) external;

    // repay TUSD debt
    function repay(uint256 amount) external;

    // update on changes to user account
    //function _updateAccount(address account) external;

    // update oracle prices and total interest earned
    function update() external;

    // liquidate account ETH if below threshold
    function liquidate(address account, uint256 amount) external;
}
