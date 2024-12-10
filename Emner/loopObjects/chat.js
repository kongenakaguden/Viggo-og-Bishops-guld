// Opgave 1: Looper gennem objekter og udskriver deres egenskaber

/* 
    I denne opgave skal vi loope gennem en array af objekter, 
    og for hvert objekt udskrive dets nøgler og værdier.
*/

const person1 = {
    name: "John",
    age: 30,
    occupation: "developer"
};

const person2 = {
    name: "Sarah",
    age: 25,
    occupation: "designer"
};

const person3 = {
    name: "Jake",
    age: 40,
    occupation: "manager"
};

const person4 = {
    name: "Emma",
    age: 35,
    occupation: "teacher"
};

// Array af personer
const people = [person1, person2, person3, person4];

// Funktion til at loope gennem objekter i arrayen og udskrive deres egenskaber
const LoopthroughObject = (arr) => {
    // Løber igennem alle objekter i arrayen
    for (let i = 0; i < arr.length; i++){
        const person = arr[i];
        // Løber gennem hver nøgle i objektet
        for (let key in person) {
            // Udskriver nøgle og værdi
            console.log(key + ": " + person[key]);
        }
        console.log("-----------"); // Skaber en adskillelse mellem objekterne
    }
};

LoopthroughObject(people); // Kald funktionen for at loope og udskrive objekterne


// Opgave 2: Find den ældste person i arrayen

/* 
    I denne opgave skal vi finde den ældste person i arrayen af objekter.
    Vi sammenligner 'age' (alder) for hver person og holder styr på den ældste.
*/

// Funktion til at finde den ældste person
const findOldestPerson = (arr) => {
    let oldest = -Infinity; // Starter med den laveste værdi for at finde den højeste alder
    // Løber gennem arrayen af personer
    for (let i = 0; i < arr.length; i++){
        const person = arr[i];
        // Tjekker om den nuværende person er ældre end den tidligere fundne
        if (person.age > oldest){
            oldest = person.age; // Opdaterer hvis en ældre person findes
        }
    }
    return oldest; // Returnerer den højeste alder
};

// Kald funktionen og udskriv den ældste person
console.log(findOldestPerson(people)); // Udskriver den ældste alder