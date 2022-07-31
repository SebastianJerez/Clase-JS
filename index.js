// Variables 

const yearBorn = 1997;
let namePerson = 'Nixon';
var lastname = 'Parra';

namePerson = 'Sebastian';

// console.log(namePerson);

// Scope 

// Global
function MyFunction(){
    console.log(yearBorn);
}

// Local
function OtherFunction(){
    let myLastname = 'Coy';
    console.log(myLastname);
}

// MyFunction();
// OtherFunction();

// Hoisting 

function showMyAge(data) {
    return console.log(data + 2);
}

const age = 25;

// showMyAge();

const myArray = [
    {
        name: "Sebastian",
        age: 23
    },
    {
        name: "Brayan",
        age: 23
    }
];

// for (let i = 0; i < myArray.length; i++) {
//     const item = myArray[i];
//     item.name = "Nixon";
//     console.log(item.name);
    
// }
// let count = 0;
// while (count <=4) {
//     console.log("position", count);
//     count++;
// }

let response = {};


fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
.then(function (res) {
    return res.json();
})
.then(function (data) {
    return response = data; })
.catch(err => console.log(error));

// console.log(response);

// setTimeout(() => {
//     console.log(response);
// }, 5000);

// Arrow Functions

function sumNumbers (a, b) {
    return console.log(a + b);

}

const sumNumbersArrow = (a,b) => console.log(a + b);

// sumNumbers(1, 2);
// sumNumbersArrow(1, 2);

// Callbacks

const myCallbackFunction = (a, b, sum) => sum(a, b);


myCallbackFunction(2, 1, (a, b) => {
    console.log(a + b);
})