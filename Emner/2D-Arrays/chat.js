// Adgang til elementer i nested array
let arr = [[1, 2], [3, 4], [5, 6]];

// Tilgår første række, første element (1)
console.log(arr[0][0]); // Output: 1

// Tilgår tredje række, andet element (6)
console.log(arr[2][1]); // Output: 6


// Ændre elementer i nested array
let arr1 = [[1, 2], [3, 4], [5, 6]];

// Ændrer det andet element i den anden række (4 -> 5)
arr1[1][1] = 5;
console.log(arr1); // Output: [[1, 2], [3, 5], [5, 6]]

// Ændrer det andet element i den første række (2 -> 1)
arr1[0][1] = 1;
console.log(arr1); // Output: [[1, 1], [3, 5], [5, 6]]


// Iterer gennem nested array
let arr2 = [[1, 2], [3, 4], [5, 6]];

// Funktion der itererer gennem hver række og hver værdi i nested array
const loop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]); // Outputter hvert element i arrayet
        }
    }
}

// Kald funktionen for at iterere gennem arr2
loop(arr2); // Output: 1, 2, 3, 4, 5, 6


// Flet arrays sammen
let arr3 = [1, 2];
let arr4 = [3, 4];
let arr5 = [5, 6];

// Funktion der fletter tre arrays sammen til et nyt array
const flet = (arr, arr1, arr2) => {
    return arr.concat(arr1, arr2); // Brug .concat() til at flette arrays
}

// Fletter arr3, arr4 og arr5 og gemmer resultatet i arr6
let arr6 = flet(arr3, arr4, arr5);
console.log(arr6); // Output: [1, 2, 3, 4, 5, 6]


// Skab et 2D array (matrix) og find summen af alle elementer
let matrix = [[1, 2], [3, 4], [5, 6]];

// Funktion der beregner summen af alle elementer i en matrix
const sum = (matrix) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]; // Lægger elementet i matrixen til summen
        }
    }
    return sum; // Returnerer den samlede sum
}

console.log(sum(matrix)); // Output: 21


// Søgning i nested arrays

let personer = [{navn: "Klaus", alder: 21}, 
                { navn: "Erik", alder: 15}, 
                {navn: "Viggo", alder: 22}];

// Finder første person med navnet "Erik"
let person = personer.find(p => p.navn === "Erik");
console.log(person); // Output: { navn: "Erik", alder: 15 }

// Filtrerer personer, der er over 18 år gamle
let voksne = personer.filter(p => p.alder > 18);
console.log(voksne); // Output: [{ navn: "Klaus", alder: 21 }, { navn: "Viggo", alder: 22 }]

// Finder Erik og ændrer hans alder til 16
let erik = personer.find(p => p.navn === "Erik");
if (erik) {
    erik.alder = 16;
}

console.log(erik); // Output: { navn: "Erik", alder: 16 }


// Flade nested arrays (flattening) både med .flat() og uden

// med .flat()
let nestedArray = [[1, 2], [3, 4], [5, 6]];

// Bruger .flat() til at flade nested array
let fladtArray = nestedArray.flat();
console.log(fladtArray); // Output: [1, 2, 3, 4, 5, 6]


// Uden .flat()
let fladtArray1 = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

// Bruger .reduce() til at flade nested array uden .flat()
console.log(fladtArray1); // Output: [1, 2, 3, 4, 5, 6]


// Filtrering af elementer i nested arrays

let nestedArray1 = [
    [1, 2, 3],
    [11, 12, 13],
    [4, 5, 6]
];

// Filtrerer ud tal, der er større end 10
let filteredArray = nestedArray1.map(arr => arr.filter(num => num > 10));
console.log(filteredArray); // Output: [[], [11, 12, 13], []]


let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Beregn summen af hver række
for (let i = 0; i < matrix1.length; i++) {
    let rowSum = matrix1[i].reduce((acc, num) => acc + num, 0); // Sum af elementer i en række
    console.log(`Sum af række ${i + 1}: ${rowSum}`);
}

// Beregn summen af hver kolonne
for (let i = 0; i < matrix1[0].length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix1.length; j++) {
        colSum += matrix1[j][i]; // Sum af elementer i en kolonne
    }
    console.log(`Sum af kolonne ${i + 1}: ${colSum}`);
}