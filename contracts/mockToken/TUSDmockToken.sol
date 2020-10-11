pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { ERC20, IERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";


/***
 * @notice - This contract is the TUSD mock token (TUSD mock) which is created by ERC20.
 **/
contract TUSDmockToken is ERC20 {

    constructor() ERC20("TUSD mock Token", "TUSD mock") public {
        uint initialSupply = 1e8 * 1e18;  /// Initial Supply amount is 100M
        address initialTokenHolder = msg.sender;
        _mint(initialTokenHolder, initialSupply);
    }

    function mintTo(address to, uint mintAmount) public returns (bool) {
        _mint(to, mintAmount);
    }    
}
