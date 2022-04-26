// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Keyboards {
    string[] public createdKeyboards;

    constructor() {
        console.log("gm! i have been constructed.");
    }

    function getKeyboards() public view returns (string[] memory) {
        return createdKeyboards;
    }

    function create(string calldata _description) external {
        createdKeyboards.push(_description);
    }
}
