// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import { McStorage } from "./storage/McStorage.sol";

import { LoanToken } from "./LoanToken.sol";
import { SafeMath } from "@openzeppelin/contracts/math/SafeMath.sol";


/**
 * @title - LoanToken Factory
 * @dev - Factory contract for the LoanToken
 */
contract LoanTokenFactory is McStorage {
    using SafeMath for uint256;

    constructor() public {}

    /// @dev - Create new LoanToken
    function createLoanToken(address _borrower, uint256 _principal, uint256 _length, uint256 _rate) public returns (address _loanToken) {
        /// Create a new LoanToken (with contract address)
        LoanToken loanToken = new LoanToken(_borrower, _principal, _length, _rate);

        /// Save the LoanToken metadata
        LoanTokenData storage loanTokenData = loanTokenDatas[address(loanToken)];
        loanTokenData.contractAddress = address(loanToken);
        loanTokenData.borrower = _borrower;   /// Borrower is owner of LoanToken
        loanTokenData.principal = _principal;      
        loanTokenData.length = _length;
        loanTokenData.rate = _rate;

        return address(loanToken);
    }



}
