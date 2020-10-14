pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

contract McObjects {

    struct LoanTokenData {   /// Key: contract address of LoanToken
        address contractAddress;
        address borrower;
        uint principal;
        uint length;
        uint rate;
    }

}
