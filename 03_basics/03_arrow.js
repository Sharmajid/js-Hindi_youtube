// const user ={
//     username:"Anand ",
//     price:999,

//    welcomeMessage:function(){
//     console.log(`${this.username}, welcome to website `);
//    console.log(this);
// }
// }
// // user.welcomeMessage()
// // user.username="Sam"
// // user.welcomeMessage()
// console.log(this);
 

// //   this keywoard  not used im fub=nction it is used only for object 
// //  function chai(){
// //     let username="hitesh"
// //     console.log(this.username);
// //  }
// //   chai()


// // const chai= function chai(){
// //     let username="hitesh"
// //     console.log(this.username);
// //  }
// //   chai()
// // 
// const chai=  ()=>{
//     let username="hitesh"
//     console.log(this.username);
//  }
//   chai()

// //   ******ARROW FUNCTION*****
 
// // Basic Arrow function // 1 declaration
// // const addTwo=(num1, num2)=>{
// //     return num1+num2
// // }


//  // Implicit return 
//   // 2 declaration
// // const addTwo=(num1, num2)=>  num1+num2

// // 3 .declaration 
// const addTwo=(num1, num2)=> ( num1+num2)
// console.log(addTwo(3,5));

// // **** chai or code *****
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


 // arrow function
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()