const fs   = require("fs");
const solc = require('solc')
let Web3   = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://10.211.55.2:7545'));

var input = {

    'Helloworld.sol'  : fs.readFileSync(__dirname + '/Helloworld.sol', 'utf8')
};

console.info("1");
let compiledContract = solc.compile({sources: input}, 1);
console.info("2");
let abi              = compiledContract.contracts['LMS.sol:LMS'].interface;
console.info("3");
let bytecode         = '0x'+compiledContract.contracts['LMS.sol:LMS'].bytecode;
console.info("4");
let gasEstimate      = web3.eth.estimateGas({data: bytecode});
console.info("5");
let LMS              = web3.eth.contract(JSON.parse(abi));
console.info("6");

//console.info(compiledContract);
//console.info(abi);
//console.info(bytecode);
//console.info(gasEstimate);
//console.info(LMS);

//var lms = LMS.new("sanchit", "s@a.com", {
//       from:web3.eth.coinbase,
//       data:bytecode,
//       gas: gasEstimate}, function(err, myContract){
//            if(!err) {
//               if(!myContract.address) {
//                   console.log(myContract.transactionHash) 
//               } else {
//                   console.log(myContract.address) 
//               }
//            }
//        }
//    );