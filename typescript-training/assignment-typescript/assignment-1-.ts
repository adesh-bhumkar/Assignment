// 1. Temperature of a city in degrees Celsius: 25.5tr

let tempCity:number = 25.5;
console.log(tempCity);

// 2. Whether a customer has placed an order: true or false

let customerOrder:boolean = true;
console.log(customerOrder);

// 3. Person's phone number: "123-456-7890"
let phoneNumber:number = 76670021;
console.log(phoneNumber);

// 4. Amount of money in a customer's bank account: 1000.50
const banlBal:number = 41000.5;
console.log(banlBal);

// 5. Person's email address: "john.doe@example.com"

const emailAddress:String = "adc@gamil.com";
console.log(emailAddress);

// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
    
 // by using array
let CoorLocation:(string|number)[] = ["latitude",37.7743,"longitude",-122.4194];
console.log(CoorLocation);

  // by using object
interface CorLocation {
    latitude : Number,
    longitude : Number,
}

let coLo: CorLocation ={
    latitude : 512.34,
    longitude: 784.12
}
console.log(coLo.latitude);
console.log(coLo.longitude);


// 7. Person's marital status: true or false

const matitalStatus:boolean = false;
console.log(matitalStatus);


// 8. Person's occupation: "Software Engineer"

var perOccupation:string = "Software Engineer";
console.log(perOccupation);


// 9. Person's favourite colour: "Blue"

const favcolor:string = "Blue";
console.log(favcolor);


// 10.Current year: 2023
const CurrentYear:Number = 2023;
console.log(CurrentYear);


// 11.Number of followers on a social media platform: 1,000,000
const followers:number = 1000000;
console.log(followers);


// 12.Rating of a movie: 7.5

const movieRating:number = 7.5;
console.log(movieRating);

// 13.Person's blood type: 'A'
let bloodType:string = "A";
console.log(bloodType);

// 14.Title of a book: "To Kill a Mockingbird"
const bookTitle:string = "To kill a mockkingbird";
console.log(bookTitle);


// 15.Number of employees in a company: 500

const empNumInCompany:number = 500;
console.log(empNumInCompany);

// 16.Time of an event: 2:30 PM

const eventTime:(number|string)[] = [2.30,"PM"] 
console.log(eventTime);

// 17.Name of a country: "United States"

const country:string = "United States"
console.log(country);

// 18.Person's eye color: "Brown"
interface personDetail {
    eyeColoor: String,
    birthPlace: string,
    birtYear: Number
}
let pd:personDetail ={
    eyeColoor: "brown",
    birthPlace: "New York City",
    birtYear: 2003
}
console.log(pd);
console.log(pd.eyeColoor);



// 19.Person's birthplace: "New York City"

// 20. Distance between two cities: 200.5T

const distOfCities:string = "200 km";
console.log(distOfCities);

//21 . orint date heare

let currentDate = new Date();
console.log(currentDate);
