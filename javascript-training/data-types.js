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

//6. symbol ==> reprsent a 8unique identifire.
var countryName = Symbol(); 
let productInfo= {
    productName: "OnePlus 9",
    productPrice: 100000,
    [countryName]: "China"
}
console.log(productInfo);
console.log(productInfo[countryName]);



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

//3. Function ==> function represrnt a block of code design to perform a particular task

function launchTheApplication(browserName,url){
    console.log("Launch the Browser: " +browserName);
    console.log("Navigate to url : " +url);
    console.log("Application Lauch Sucessfully");
}

// call the function
launchTheApplication("Chrome","https//www.example.com");

//4. Date ==> DAte represent date and current time in javascript
let currentDate = new Date();

console.log(currentDate);

//Year

console.log(currentDate.getFullYear());

//Month

console.log(currentDate.getMonth()+1);


//date

console.log(currentDate.getDate());

//Hour

console.log(currentDate.getHours());

//Minute

console.log(currentDate.getMinutes());

//Map ==>  Represents a collection of key-value pairs. Keys can be of any data type. 

let employeMap=new Map();

employeMap.set("empid",10);
employeMap.set("empName","John Doe");
employeMap.set("havingVisa",true);
employeMap.set("empName","Bharat");

console.log(employeMap.get("empName"));

//Set ==> Represents a collection of unique values of any data

let uniqueNumbers=new Set();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(40);
uniqueNumbers.add(50);

console.log(uniqueNumbers);
console.log(uniqueNumbers.size);
console.log(uniqueNumbers.delete(40));
console.log(uniqueNumbers);



