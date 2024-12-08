// 8x8 matrixer

//Delopgave 1.1
//For at lse delopgave 1.1 vil jeg tage de 2 arrays og lgge dem sammen. Det vil jeg gre ved frst at loop igennem array a og push dets vrdier til array c, og derefter loop igennem array b og tilfje dets vrdier til array c.
let array_a = [1, 2, 3];
let array_b = [4, 5, 6];

const appendArrays = (array_a, array_b) => {
  return array_a.concat(array_b);
};

let array_c = appendArrays(array_a, array_b);
console.log(array_c);

// Delopgave 1.2

const plus = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
];

const minus = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];

const stringifyDotchars = (dotchars) => {
  // Start med en tom dotstring
  let dotstring = [];

  // G igennem hver linje i de 8 linjer af dotchars
  for (let i = 0; i < 8; i++) {
    // Start med en tom linje for denne rkke
    let combinedline = [];
    // Saml i-te linje fra hver dotchar
    for (let dotchar of dotchars) {
      combinedline = appendArrays(combinedline, dotchar[i]);
    }
    dotstring.push(combinedline);
  }
  return dotstring;
};

let plus_minus = stringifyDotchars([plus, minus]);
console.log(plus_minus);

// Delopgave 1.3


const h64 = [
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const a64 = [
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const leftPar64 = [
  // venstreparantes
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const rightPar64 = [
  // hjreparantes
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const i64 = [
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const t64 = [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function printDotstring(dotstring, printChar = "#") {
    const spaceChar = " "; // Bruges til at reprsentere 0

    // Iterr over hver rkke i dotstring
    for (let i = 0; i < dotstring.length; i++) {
        let line = ""; // Start med en tom streng til denne rkke

        // Iterr over hver bit i rkken
        for (let j = 0; j < dotstring[i].length; j++) {
            if (dotstring[i][j] === 1) {
                line += printChar; // Tilfj printChar for 1
            } else {
                line += spaceChar; // Tilfj spaceChar for 0
            }
        }

        console.log(line); // Udskriv den samlede rkke
    }
}



let hait64 = stringifyDotchars([h64, a64, leftPar64, i64, t64, rightPar64]);



console.log("Standard udskrift:");
printDotstring(hait64);

// Udskriv med et andet tegn
console.log("\nUdskrift med @:");
printDotstring(hait64, "@");