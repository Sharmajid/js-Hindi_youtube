//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// clouser in andar ka function h jo bhar ke function ko accesss kiya jata h ----
//  child function  h vo parent ke variable ko access ka pate h 
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))
// in a delcaration 
function addone(num){
    return num + 1
}


 // function declaration  and hold
addTwo(5)
const addTwo = function(num){
    return num + 2
}
 
//  declaration se phale not to be accessed 