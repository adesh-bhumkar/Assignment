
//1-Intialization
//2-re-assignment
//3-redeclare
//4-scope

//1-Intaialize
const a=10 ;  // must be intialize
let b ;  // can be initialize later
var c ;  // can be initialize later

//2. Re-assignment
// a=15; //Error: Assigmnet to constant variable 
b= 20; //valid

//3-Re-declare

//const a=123; // Error
//let b=30;  // Error
var c = 40


//4. Scope

{
    const x = 50;
    let y =60 ;
    var z = 70;
    console.log(x); //valid
    console.log(y); //valid
    console.log(z); //valid
}

  //  console.log(x); // Error: x not defined
  //  console.log(x); // Error: x not defined
    console.log(z);
    