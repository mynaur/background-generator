// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = test;


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city : "setif",
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const eyeColor = person.eyeColor;
// const city = person.city;
const {firstName, lastName, age, eyeColor, eyeColor, city } = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

const okObj = { a, b, c};


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age='10') => age;

// Symbol
// Create a symbol: "This is my first Symbol"
const symbol = symbol('This is my first Symbol');
// Arrow functions
// function whereAmI(username, location) {
//   if (username && location) { 
//       return "I am not lost";
//   } else {
//       return "I am totally lost!";
//   }
// }

const whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!";



