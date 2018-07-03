
//var soMany = 10;

//if(true){
//    var soMany = 20;
//    console.info(soMany);
//}

//console.info(soMany);

//console.log(`This is ${soMany} times easier!`);


//const fetch = require("node-fetch");
//const url = "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
//const getLocation = async url => {
//  try {
//    const response = await fetch(url);
//    const json = await response.json();
//     console.info(`${json.results[0].formatted_address}`);
//    //console.log(
//    //  `City: ${json.results[0].formatted_address} -`,
//    //  `Latitude: ${json.results[0].geometry.location.lat} -`,
//    //  `Longitude: ${json.results[0].geometry.location.lng}`
//    //);
//  } catch (error) {
//    console.log(error);
//  }
//};
//getLocation(url);



function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

//async function add1(x) {
//  const a = await resolveAfter2Seconds(20);
//  const b = await resolveAfter2Seconds(30);
//  return x + a + b;
//}

//add1(10).then(v => {
//  console.log(v);  // prints 60 after 4 seconds.
//});


async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});














//function resolveAfter2Seconds() {
//  return new Promise(resolve => {
//    setTimeout(() => {
//      resolve('resolved');
//    }, 5000);
//  });
//}

//async function asyncCall() {
//  console.log('calling');
//  var result = await resolveAfter2Seconds();
//  console.log(result);
//  // expected output: "resolved"
//}

//asyncCall();



