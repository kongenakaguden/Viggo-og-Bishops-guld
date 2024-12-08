// Adgang til elementer i nested array

let arr = [[1, 2], [3, 4], [5, 6]];

console.log(arr[0][0])
console.log(arr[2][1])

// ndre elemnter i nested array
let arr1 = [[1, 2], [3, 4], [5, 6]];

arr1[1][1] = 5;
console.log(arr1);
arr1[0][1] = 1;
console.log(arr1);


// Itere gennem nested array
let arr2 = [[1, 2], [3, 4], [5, 6]];

const loop = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            console.log(arr[i][j])
        }
    }
}

// Flet arrays sammen
let arr3 = [1, 2];
let arr4 = [3, 4];
let arr5 = [5, 6];

const flet = (arr, arr1, arr2) => {
    return arr.concat(arr1, arr2)
}

let arr6 = flet(arr3, arr4, arr5);
console.log(arr6);

// Skab et 2D array (matrix) og find summen af alle elemnterne

let matrix = [[1, 2], [3, 4], [5, 6]];

const sum = (matrix) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j];
        }
    }

    return sum;
}

console.log(sum(matrix));

// Sgning i nested arrays

let personer = [{navn: "Klaus", alder: 21}, 
                { navn: "Erik", alder: 15}, 
                {navn: "Viggo", alder: 22}];


let person = personer.find(p => p.navn === "Erik");
console.log(person);

let voksne = personer.filter(p => p.alder > 18);
console.log(voksne);

let erik = personer.find(p => p.navn === "Erik");
if (erik) (
    erik.alder = 16
)

console.log(erik);

// Flade nested arrays (flattening) bde med .flat() og uden

// med .flat
let nestedArray = [[1, 2], [3, 4], [5, 6]];

let fladtArray = nestedArray.flat();

console.log(fladtArray);


// Uden .flat()
let fladtArray1 = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

console.log(fladtArray1)

// Filtrering af elemnter i nested arrays

let nestedArray1 = [
    [1, 2, 3],
    [11, 12, 13],
    [4, 5, 6]
  ];
  
  // Filtrr ud tal, der er strre end 10
  let filteredArray = nestedArray1.map(arr => arr.filter(num => num > 10));
  
  console.log(filteredArray); // Output: [[], [11, 12, 13], []]

  let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Beregn summen af hver rkke
  for (let i = 0; i < matrix1.length; i++) {
    let rowSum = matrix1[i].reduce((acc, num) => acc + num, 0);
    console.log(`Sum af rkke ${i + 1}: ${rowSum}`);
  }
  
  // Beregn summen af hver kolonne
  for (let i = 0; i < matrix1[0].length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix1.length; j++) {
      colSum += matrix1[j][i];
    }
    console.log(`Sum af kolonne ${i + 1}: ${colSum}`);
  }