//  Primitive  
//  Note :- in suppose to a another value for call by value or call by reference 
// cateriogarised only for a "kis parakar se data ko memory maye rakha jata h or kis parakar se access kiya jata h ushi "type se caterigeried kia h datatype ka primitive or non-primitive 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt /() call by value hote h  not a orignal value passed in copy is passed kiya jata h 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;// undefined 

const id = Symbol('123')  //  yha yaad rakhna h sabse different h 
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


/////Chatgpt---------
/*JavaScript is a dynamically typed language. This means that you do not have to specify the data type of a variable when you declare it, and the type can change at runtime. For example, you can declare a variable and assign it different types of values at different points in your code:

javascript
Copy code
let myVar = 42;       // myVar is a number
myVar = 'Hello';      // myVar is now a string
myVar = true;         // myVar is now a boolean
In JavaScript, the type of a variable is determined at runtime based on the value assigned to it. This flexibility is a key characteristic of dynamically typed languages.*/ 
// ------- NON primtive ------//
// Reference (Non primitive)

// Array, Objects(IMP), Functions
 
Array
const heros = ["shaktiman", "naagraj", "doga"];

// --------- object ------
//  / /object is always defene in calarly braket {}, calary braket ke andar keyvalue ko declare kar sakte h ap chaye to kisi variable maye declare kar sakte h  but object ko variable={

//  }
let myObj = {
    name: "hitesh",
    age: 22,
}
  /// -- function-----
const myFunction = function(){
    console.log("Hello world");
}

//_------ data =type find out in any value---
console.log(typeof myFunction); 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// 




////************* stack am]nd Heap memory ************ */
 // stack(primitive) copy  , heap memory(non- primitive) original 

 let myyoutubename="hiteshchoudhary.com"
 let anothername=myyoutubename
  anothername="chai or code"
  console.log(myyoutubename);
  console.log(anothername);

  let userOne={
    email:"user@google.com"
    // upi:"user@ybl"/
    
  }
   let userTwo=userOne

   userTwo.email="hitesh@google.com"
   console.log(userOne.email); // original value maye change 

   console.log(userTwo.email);


  