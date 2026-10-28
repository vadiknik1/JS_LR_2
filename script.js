let userName = prompt("Enter your name:") || "User";
alert(`Hello, ${userName}! Welcome to JavaScript`);

let age = prompt("Enter your age:") || "18";
let currentYear = 2026;
let birthYear = currentYear - Number(age);
alert(`You were born in ${birthYear}`);

let firstName = prompt("Enter your first name:") || "John";
let lastName = prompt("Enter your last name:") || "Smith";

console.log("Your full name is " + firstName + " " + lastName);
console.log(`Your full name is ${firstName} ${lastName}`);