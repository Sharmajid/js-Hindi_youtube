// // two types of object in 1: literal ,2: constructor
// // singleton -.> only for constructor 
 
// // object literals  
// //  object.create

// // const mySym=Symbol("key1")
// const jsUser={
//     name:"Anand",
//     "full name":"Anand Sharma",
//     // [mySym]:"mykey1",
//     age:18,
//     location:"jaipur",
//     email:"hitesh@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"],
// };
//     // console.log(jsUser.email);
// // console.log(jsUser["email"])

// // console.log(jsUser[mySym])

// // ****basics***
// //  value access indot notion
// // 1 value to change 
//  jsUser.email="hitesh@chatgtp.com",
// //  jsUser.freeze(jsUser);
//  jsUser.email="hitesh@microsoft.com",
// //  console.log(jsUser);
//  jsUser.greeting =function(){
//     console.log("Hello js user");

//  }
//  console.log(jsUser.greeting);
// cosolegreetingTwo=fnction(){
//     console.log("Hello js user");
// }


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());