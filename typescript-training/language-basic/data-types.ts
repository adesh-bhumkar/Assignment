// Primitive Data Types

//1. number ==> number is represents number with decimal and without decimal.(without queots)

let marks:number = 99;
let percentage:number = 75.21;

console.log("Marks : ",marks);
console.log("Percentage : ",percentage);

// 2. String ==> String represnt text data (with quetos)

let name1:string = "Punit"; // double queots
let name2:string = 'Arya'; // single Queots
let name3:string = `Aishwarya` //backticks

console.log(name1);
console.log(name2);
console.log(name3);

// 3. boolean ==> boolean represent only two values true or false

let visaStatus:boolean = true;
let isGraduated:boolean = false;

console.log(visaStatus);
console.log(isGraduated);

// union of types (|) ==> variable can hold more than one types of data

let empAddress:string|number|boolean;
empAddress = "Pune";
empAddress = 412208;
console.log(empAddress);

// 4. undefined represents a vriable that is declared  but not assigned with any value

let empSalary: undefined|number;
empSalary = 99999999999;

console.log(empSalary);

//Non - Primitive Data Types 

// 1. Arrays ==> Arryas represnt a collection of similar databtype

let fruits:string[] = ["Banan","Apple","WaterMElon","Chiku"]
console.log(fruits);

let scores:number[] = [98,45,78,99,94,100];
console.log(scores);

// fruits names along with their price in array

let fruitsDetails:(string|number)[] = ["Banan",100,"Apple",150,"WaterMElon",120,"Chiku",140];
console.log(fruitsDetails);

//2. Object ==> represrnt a coolection of key value pairs 

interface empDetails {
    empId : number,
    empName : string,
    havingVisa : boolean,
    address:{
        city : string,
        zipCode: number,
        state: string,
        country: string
    }
}

let emp: empDetails ={
    empId: 101,
    empName: "Adesh",
    havingVisa: true,
    address: {
        city: "Pune",
        zipCode: 412208,
        state: "Mhaha",
        country: "Uk"
    }
};


console.log(emp);
console.log(emp.empName);
console.log(emp.address.state);


// 3. tuple - tuple represnts a collection of diiferent data type in a specific ordrer. 

let address : [string,string,number] = ["Pune","Shikrapur",412208];
console.log(address);


//4. Function ==> function represrnt a block of code that perform a specific task

  // 4.1 

function launchTheApplication(browserName:string,url:string):void {
    console.log(browserName);
    console.log(url);
    console.log("Application Lauch Sucessfully");
}
 console.log(launchTheApplication("Chrome","www.fb.com"));

    //4.2

 function sumOfNumbers(num1: number,num2:number): number{
    let num3: number = num1 + num2;
    return num3;
 }
 console.log( sumOfNumbers(10,20));


  // 4.3

 function getFullName(FirstName: string,lastName: string): string {
    let fullName:string = FirstName+ " " + lastName;
    return fullName;
 }
 console.log( getFullName("Omraje","Nimbalkar"));


 // 5. Map ==> Represents a collection of key-value pairs. Keys can be of any data type.

let employeMap:Map<string,string>=new Map();

employeMap.set("empid","10");
employeMap.set("empName","John Doe");
employeMap.set("havingVisa","true");
employeMap.set("empName","Bharat");
employeMap.delete("havingVisa");   // deleting key havingVisa

console.log("Employee Map :",employeMap);

//6. Set ==> Represents a collection of unique values of any data

let uniqueNumbers : Set<number> = new Set();

uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(40);
uniqueNumbers.add(30);  // duplicate value willnot added
uniqueNumbers.delete(10);  // deleting value 10

console.log(uniqueNumbers);
console.log(uniqueNumbers.size);   // getting size of the set
console.log(uniqueNumbers.delete(40));
console.log(uniqueNumbers);

// 7. any ==> any represent a variable that can hold any type data (not reccomanded to use)
// it will remove all the type checking benefits  provided bt typescript.

let randomValue:any;
randomValue = 100;
console.log("RandomValye (Number)",randomValue);
randomValue = "Adesh";
console.log("RandomValye (string)",randomValue);
randomValue = true;
console.log("RandomValye (boolean)",randomValue);



