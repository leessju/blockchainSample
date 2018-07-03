import { Promise } from "../../../../../Users/nicejames/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mssql";


function functionA() 
{
    return "A";
}

function functionB(B) 
{
    return B + "B";
}

function functionC(C) 
{
    return C + "C";
}

function functionD(D) 
{
    return D + "D";
}

async function asyncTask () {
  try {
    const valueA = await functionA()
    console.info(valueA);
    const valueB = await functionB(valueA)
    console.info(valueB);
    const valueC = await functionC(valueB)
    console.info(valueC);
    return await functionD(valueC)
  } catch (err) {
    //logger.error(err)
  }
}

console.info(asyncTask());
//console.info(await Promise.resolve( asyncTask()));



//async function getTrace () {
//  let pageContent
//  try {
//    pageContent = await fetch('https://trace.risingstack.com', {
//      method: 'get'
//    })
//  } catch (ex) {
//    console.error(ex)
//  }

//  return pageContent
//}

//getTrace()
//  .then()