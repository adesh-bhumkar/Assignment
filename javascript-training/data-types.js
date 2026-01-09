//Primitive data type

// immutable meanns unchange vaule 

//1. Number- Represt numeric  value only it can be integer / float

let num1=10;
let num2=15.07;
console.log(num1);
console.log(num2);

//2. Sring - it represent text can be enclosed in single & double qoutes

let name1=" Adesh ";
let nmae2=' Punit';

console.log(name1);
console.log(nmae2);

//3. Boolean- it represent true or false

let doYouHavePassport = true;

console.log(doYouHavePassport);

//4. Null - represent intentionally absenses of any object value

let empName=null;
console.log(empName);

//5. Undefined

let pinNum;
console.log(pinNum);

//6. symbol -


/**** Non-Primitive data type******/

//1. Object- it is collection of key-value pair

let detailOfPerson = {
    pName: "Ram" ,
    age: 20 ,
    weight: 67 ,
    address: {
        city: "Shikrapur" ,
        dist: 'Pune',
        pinCode: 412208
    }
}

console.log(detailOfPerson);
console.log(detailOfPerson.weight);
console.log(detailOfPerson.address.city);

//2. Arrays - it represt orderd list & it can store mulitiple vaule with different data type 

let fruit=["Apple",'Mango','Banana','WaterMelon'];
console.log(fruit[2]);


let fruitPrice=['Apple',100,'Mango',150,'Banana',50];
console.log(fruitPrice[4]);
console.log(fruitPrice[5]);





