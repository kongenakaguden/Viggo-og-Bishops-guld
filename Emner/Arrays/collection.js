// Opgave 1: Filmopgaver

/* 	1.	Opret en tom array kaldet favoritFilm.
	2.	Tilfj fire af dine favoritfilm til listen ved hjlp af push.
	3.	Brug pop til at fjerne den sidste film fra listen (da du ændrede mening om den).
	4.	Brug slice til at lave en kopi af de første tre film på listen og gem dem i en ny array kaldet topFilm.
	5.	Brug et for-loop til at udskrive navnene på alle filmene i topFilm.
*/

let favoritFilm = []; // Opretter en tom array

// Tilføjer fire film til favoritFilm arrayen
favoritFilm.push("Rita", "Geen-yuz", "Quention", "Fartil4");

// Fjerner den sidste film fra favoritFilm arrayen
favoritFilm.pop();

// Opretter en kopi af de første tre film i favoritFilm
let topFilm = favoritFilm.slice(0, 3);

// Funktion til at udskrive alle film i topFilm
const print = () => {
	for (let i = 0; i < topFilm.length; i++) {
		console.log(topFilm[i]); // Udskriver hver film i topFilm
	}
};

print(); // Kald funktionen for at printe filmene


// Opgave 2: Gennemsnitsberegning

let gennemsnitAfArray = [2, 5, 7, 1, 125];

// Funktion til at beregne gennemsnittet af en array
function gennemsnit(array) {
    let sum = 0;
    // Iterer gennem arrayen og læg værdierne sammen
    for (let i = 0; i < array.length; i++){
        sum += array[i]; // Summerer værdierne
    }

    console.log(sum / array.length); // Beregner og udskriver gennemsnittet
}

gennemsnit(gennemsnitAfArray); // Kald funktionen for at udskrive gennemsnittet



// Opgave 3: Find det største tal

let arr = [2, 5, 1, 7, 3, 8, 3, -6, -2, -7, 64];

// Funktion til at finde det største tal i en array
function findStreste(array){
    let sum = array[0]; // Sætter første element som startværdi
    // Iterer gennem arrayen og sammenlign for at finde den største værdi
    for(let i = 1; i < array.length; i++){
        if (sum < array[i]){
        sum = array[i]; // Opdaterer summen hvis et større tal findes
    }
}  
 return sum; // Returnerer det største tal
}

console.log(findStreste(arr)); // Udskriver det største tal i arrayen


// Opgave 4: Filtrering af ord med længde >= 5

const words = ["kat", "elefant", "bil", "computer", "hus", "kkken", "skole", "tr", "bord", "bibliotek"];

const longWords = []; // Tom array til at gemme lange ord
// Funktion til at filtrere ord med længde >= 5
function nyarray(words){
    // Iterer gennem hvert ord i arrayen
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) { // Tjekker om ordet er længere end 5
            longWords.push(words[i]); // Lægger ordet til longWords arrayen
        }
    }
    console.log(longWords); // Udskriver de lange ord
}

nyarray(words); // Kald funktionen for at udskrive de lange ord


// Opgave 5: Studerendes karakterer

let karakterer = [2, 4, 7, 10, 12];
let hjesteKarakter = karakterer[0]; // Sætter den første karakter som den højeste
let sum = 0;

// Tilføjer en ekstra karakter til arrayen
karakterer.push(0);

// Finder den højeste karakter
for (let i = 0; i < karakterer.length; i++){
    if (karakterer[i] > hjesteKarakter) {
        hjesteKarakter = karakterer[i]; // Opdaterer den højeste karakter
    }
}

console.log("Den højeste karakter er:", hjesteKarakter);

// Beregner den samlede sum af karaktererne
karakterer.forEach(function(mink) {
    sum += mink; // Summerer alle karakterer
});

console.log("Den samlede værdi af de forskellige karakterer er:", sum);

// Beregner gennemsnittet af karaktererne
console.log(sum / karakterer.length); // Udskriver gennemsnittet


// Opgave 6: Sum af elementer i en array

// Funktion der returnerer summen af alle elementer i en array
function sumArray(arr) {
    let sum = 0;
    // Iterer gennem arrayen og summer elementerne
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]; // Summer værdierne
    }
    return sum; // Returnerer summen
}

console.log(sumArray([1, 2, 3, 4])); // Udskriver summen, der skal være 10


// Opgave 7: Tælle ulige tal i en array

// Funktion der tæller antallet af ulige tal i en array
function countOddNumbers(arr) {
    let sum = 0;
    let uligeTal = []; // Tom array til at gemme ulige tal
    // Iterer gennem arrayen
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){ // Tjekker om tallet er ulige
            sum++; // Øger tælleren
            uligeTal.push(arr[i]); // Lægger det ulige tal til uligeTal arrayen
        }
    }
    console.log(uligeTal); // Udskriver alle ulige tal
    return sum; // Returnerer antallet af ulige tal
}

console.log(countOddNumbers([1, 2, 3, 4])); // Udskriver 2


// Opgave 8: Find det største tal i en array

// Funktion der returnerer det største tal i en array
function findLargestNumber(arr){
    let sum = arr[0]; // Sætter første element som startværdi
    // Iterer gennem arrayen og finder det største tal
    for (let i = 1; i < arr.length; i++){
        if (sum < arr[i])
            sum = arr[i]; // Opdaterer summen hvis et større tal findes
    }
    return sum; // Returnerer det største tal
}

console.log(findLargestNumber([1, 2, 3, 4])); // Udskriver 4
console.log(findLargestNumber([-10, -5, 0, 5, 10])); // Udskriver 10


// Opgave 9: Find antallet af gange det største tal optræder

// Funktion der returnerer antallet af gange det største tal optræder i en array
function countLargestNumberOccurrences(arr){
    let largest = arr[0]; // Sætter første element som det største tal
    // Iterer gennem arrayen for at finde det største tal
    for (let i = 1; i < arr.length; i++){
        if (largest < arr[i])
            largest = arr[i]; // Opdaterer det største tal
    }

    let count = 0; // Tæller hvordan mange gange det største tal optræder
    // Iterer for at tælle antallet af gange det største tal optræder
    for (let i = 0; i < arr.length; i++){
        if (largest === arr[i]){
            count++; // Øger tælleren
        }
    }
    return count; // Returnerer antallet
}

console.log(countLargestNumberOccurrences([1, 2, 3, 3, 4, 4, 4])); // Udskriver 3
console.log(countLargestNumberOccurrences([5, 5, 5, 1])); // Udskriver 3
console.log(countLargestNumberOccurrences([10, 20, 10, 20, 20, 20, 20])); // Udskriver 5


// Opgave 10: Vend en array om

// Funktion der vender en array om
function reverseArray(arr){
    let newArr = []; // Tom array til at gemme den vendte version
    // Iterer baglæns gennem arrayen og læg elementerne i newArr
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]); // Lægger elementerne i den nye array
    }
    return newArr; // Returnerer den vendte array
}

console.log(reverseArray([1, 2, 3, 4])); // Udskriver den vendte array: [4, 3, 2, 1]