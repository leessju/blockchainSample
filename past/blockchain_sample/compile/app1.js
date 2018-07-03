//import fs from "fs";
//import path from 'path';
//import solc from 'solc';

const fs   = require("fs");
const path = require('path');
const solc = require('solc');
let Web3   = require('web3');

const CONTRACTS_DIR = path.resolve(__dirname, 'contracts');

function findContract(pathName) {
    const contractPath = path.resolve(CONTRACTS_DIR, pathName);
    if (isContract(contractPath)) {
        return fs.readFileSync(contractPath, 'utf8');
    } else {
        throw new Error(`File ${contractPath} not found`);
    }
}

function isContract(path) {
    return fs.existsSync(path);
}

function findImports (pathName) {
    try {
        return { contents: findContract(pathName) };
    } catch(e) {
        return { error: e.message };
    }
}

const source = findContract('Helloworld.sol');

const compiled = solc.compile({
    sources: {
        'Contract' : source
    }
}, 1, findImports);


//const bytecode = compiled.contracts[':Helloworld'].bytecode;
const abi = JSON.parse(compiled.contracts[':Helloworld'].interface);

//console.info(bytecode);
console.info(abi);

//let abi              = compiled.contracts['LMS.sol:LMS'].interface;
//console.info("3");
//let bytecode         = '0x'+compiled.contracts['LMS.sol:LMS'].bytecode;
//console.info("4");
//let gasEstimate      = web3.eth.estimateGas({data: bytecode});
//console.info("5");
//let LMS              = web3.eth.contract(JSON.parse(abi));
//console.info("6");

//console.info(compiled);
//console.info(abi);
//console.info(bytecode);
//console.info(gasEstimate);
//console.info(LMS);