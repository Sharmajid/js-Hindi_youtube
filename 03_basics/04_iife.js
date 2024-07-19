// Immediately Invoked Function Expressins (IIFE)
//  jaise function likhe Immediately execute ho jaye
 // jaise  ki ak file ho sirf database connection ho ham chate h ki jaise file start ho vaise daabase connection ho 
 // not a polluition for global scope 
 // alag se scope ho jaye or immediately exection ho jaye

//   function
//  function chai(){
//     console.log(`DB CONNECTED`);
//  }
//  chai()


// global scope ke polluction se problem hoti h khai bar to  global scope ke variable ko hatane ke liye  ko hatane ke liye 
// ()()



(function chai(){
     // named iife 
    console.log(`DB CONNECTED`);
 })();
// do code ko exectue ak sath karne maye ; semi coloum ki bhul hoti h
 // function defination and execution 
//  ()()

// function ko arrow functin ki tarah and pramater pass 
( (name) => {
    //  simple iife 
    console.log(`DB CONNECTED TWO ${name}`);
} )('Anand')