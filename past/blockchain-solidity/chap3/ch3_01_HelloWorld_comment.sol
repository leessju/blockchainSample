pragma solidity ^0.4.8;


contract HelloWorld {
    // (3) 상태 변수 선언
    string public greeting;

    // (4) 생성자
    function HelloWorld(string _greeting) public {
        greeting = _greeting;
    }

  // (5) 메서드 선언
    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

    function say() constant public returns (string) {
        return greeting;
    }
}
