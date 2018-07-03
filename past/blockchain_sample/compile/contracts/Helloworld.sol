pragma solidity ^0.4.8;

contract Helloworld {

    string public greeting;
    function Helloworld(string _greeting) public {
        greeting = _greeting;
    }

    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

    function say() public constant returns(string) {
        return greeting;
    }
}