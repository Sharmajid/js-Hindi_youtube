// string =" are a sigle and double  both coloumn both are code to be used  "
const name = "hitesh"  // string declare
const repoCount = 50

//  concatedinate karna 
// console.log(name + repoCount + " Value");
//   better used in breaktist(``)

// this is a modern way of syntax
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declareation new keyword used in object of javascript used as a object pair 
const gameName = new String('hitesh-hc-com')
console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.__proto__); 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));