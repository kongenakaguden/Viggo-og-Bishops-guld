// Oprettelse af en 2D array (matrix)
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Funktion til at printe alle elementer i matrixen
const printArray = (arr) => {
  // Iterer gennem hver række (i)
  for (let i = 0; i < arr.length; i++) {
    // Iterer gennem hver værdi i rækken (j)
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]); // Outputter hver værdi
    }
  }
};

printArray(grid); // Kalder printArray for at udskrive matrixen

// Funktion til at beregne summen af alle elementer i matrixen
const sumAll = (arr) => {
  let sum = 0; // Initialiserer sum som 0
  // Iterer gennem hver række (i)
  for (let i = 0; i < arr.length; i++) {
    // Iterer gennem hver værdi i rækken (j)
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j]; // Lægger værdien til den samlede sum
    }
  }

  return sum; // Returnerer summen af alle elementer
};

console.log(sumAll(grid)); // Udskriver summen af alle elementer i grid


// Beregn summen af hver række og hver kolonne
const calculateRowAndColumnSums = (arr) => {
  const rowSums = []; // Array til at gemme summen af hver række
  const colSums = new Array(arr[0].length).fill(0); // Array til at gemme summen af hver kolonne, initialiseret til 0

  // Iterer gennem hver række (i)
  for (let i = 0; i < arr.length; i++) {
    let tempSum = 0; // Midlertidig sum for den nuværende række
    // Iterer gennem hver kolonne (j) i den nuværende række
    for (let j = 0; j < arr[i].length; j++) {
      tempSum += arr[i][j]; // Lægger værdien til rækkens sum
      colSums[j] += arr[i][j]; // Lægger værdien til kolonnens sum
    }
    rowSums.push(tempSum); // Efter afslutning af rækken, gem summen i rowSums
  }

  return { rowSums, colSums }; // Returnerer både rækkesummene og kolonnesummene som et objekt
};

const result = calculateRowAndColumnSums(grid);
console.log("Row sums:", result.rowSums); // Outputter summen af hver række: [6, 15, 24]
console.log("Column sums:", result.colSums); // Outputter summen af hver kolonne: [12, 15, 18]


// Funktion til at transponere en 2D array (matrix)
const transposeArr = (arr) => {
  let transpose = []; // Initialiserer en tom array til at gemme den transponerede matrix
  // Iterer gennem hver kolonne (i) i den oprindelige matrix
  for (let i = 0; i < arr[0].length; i++) {
    transpose[i] = []; // Initialiserer en tom array for hver kolonne
    // Iterer gennem hver række (j) i den oprindelige matrix
    for (let j = 0; j < arr.length; j++) {
      transpose[i].push(arr[j][i]); // Skifter rækkernes og kolonners positioner
    }
  }
  return transpose; // Returnerer den transponerede matrix
};

console.log(transposeArr(grid)); // Udskriver den transponerede version af matrixen


// Finding the largest number in a 2D array
const grid1 = [
  [1, 22, 3],
  [14, 5, 16],
  [7, 8, 19]
];

// Funktion til at finde den største værdi i matrixen
const findLargest = (arr) => {
  let largest = 0; // Initialiserer den største værdi som 0
  // Iterer gennem hver række (i)
  for (let i = 0; i < arr.length; i++) {
    // Iterer gennem hver kolonne (j) i rækken
    for (let j = 0; j < arr[i].length; j++) {
      // Hvis den nuværende værdi er større end den nuværende største værdi
      if (largest < arr[i][j]) {
        largest = arr[i][j]; // Opdaterer den største værdi
      }
    }
  }

  return largest; // Returnerer den største værdi fundet
};

console.log(findLargest(grid1)); // Outputter den største værdi i grid1, som er 22