const fs   = require("fs");
const solc = require('solc')
let Web3   = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://10.211.55.2:7545'));

if (!web3.isConnected()) {
    console.log("not connected");
    process.exit();
}
else 
{
    console.log("connected");
}

var coinbase = web3.eth.coinbase;
console.log(coinbase);

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(web3.eth.defaultAccount);

var balance = web3.eth.getBalance(coinbase);
console.log(web3.fromWei( balance, 'ether').toString(10) );

var abi = '[{"constant": true,"inputs": [],"name": "getInstructor","outputs": [{"name": "","type": "string"},{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "_fName","type": "string"},{"name": "_age","type": "uint256"}],"name": "setInstructor","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"}]';
var addr = '0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f';















//var a = web3.eth.Contract(abi).at(addr);

console.log (web3.eth);

var CoursetroContract = new web3.eth.contract(abi);
var a = CoursetroContract.at(addr);
//CoursetroContract.getInstructor("0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f",function (error, result){
//    if (error) {
//        console.log('Error:'+JSON.stringify(error));
//        res.send({'status':0,'message':error});
//    }else{
//        console.log('Result:'+JSON.stringify(result));
//        res.send({'status':1,'message':result});
//    }
//});







//var Coursetro = CoursetroContract.at('0x8f0483125fcb9aaaefa9209d8e9d7b9c8b9fb90f');

//var EbolaContract = web3.eth.Contract(abi, addr);



//Coursetro.setInstructor('Brutis', 44);
//console.log(Coursetro);


// Coursetro.setInstructor('Brutis', 44) // Hit Enter
//"0x894..."                           // This is the response (address)

//> Coursetro.getInstructor()          // Hit Enter
//(2) ["brutis", e]     



//Coursetro.getInstructor(function(error, result){
//            if(!error)
//                {
//                    $("#instructor").html(result[0]+' ('+result[1]+' years old)');
//                    console.log(result);
//                }
//            else
//                console.error(error);
//        });