// // singleton or constuctor
// // const tinderUser=new Object() Note:= ye singleton object h isse bhi output ={} ye ayega 

// const tinderUser={}
// // sameoutput ={} ye ak non sigleton object h

// tinderUser.id="123asdf"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false 

// console.log(tinderUser);

 // const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ***********18 *****
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
 // jab kafi bar same type data pritn karna ho
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // object ko de structure karte h 
console.log(instructor);


//  ApI := Application programming interface h jo ki interact of user maye kaam atta h 
//   kaise data fetch karke layega  isme use JSON ka hota h
//  As a object 

 // 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]