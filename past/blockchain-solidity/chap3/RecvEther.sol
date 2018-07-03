pragma solidity ^0.4.8;

contract RecvEther {
    address public sender;
    uint public recvEhter;

    //송금받기
    function() payable public {
        sender = msg.sender;
        recvEhter += msg.value;
    }
}

