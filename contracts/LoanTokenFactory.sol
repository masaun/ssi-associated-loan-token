// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import { LoanToken } from "./LoanToken.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";


/**
 * @title - LoanToken Factory
 * @dev - Factory contract for the LoanToken
 */
contract LoanTokenFactory {
    using SafeMath for uint256;

    constructor() public {}

    /// @dev - Create new LoanToken
    function createLoanToken(address _borrower, uint256 _principal, uint256 _length, uint256 _rate) public returns (address _loanToken) {
        LoanToken loanToken = new LoanToken(_borrower, _principal, _length, _rate);
        return address(loanToken);
    }

}
