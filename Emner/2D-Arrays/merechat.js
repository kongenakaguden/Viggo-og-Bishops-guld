const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};

printArray(grid);

const sumAll = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }

  return sum;
};

console.log(sumAll(grid));

// This one i will first make the 2 arrays that the values have to be pushed into eg row and column
// i will also create a temporary sum, which is the value that will be pushed into the 2 arrays
// Then i will loop through the nested array to get all the values
// So the first row = arr[0][j]

const calculateRowAndColumnSums = (arr) => {
  const rowSums = []; // To store the sum of each row
  const colSums = new Array(arr[0].length).fill(0); // To store the sum of each column, initialized with 0s

  for (let i = 0; i < arr.length; i++) {
    // Outer loop for rows
    let tempSum = 0; // Temporary sum for the current row
    for (let j = 0; j < arr[i].length; j++) {
      // Inner loop for columns
      tempSum += arr[i][j]; // Add the current element to the row sum
      colSums[j] += arr[i][j]; // Add the current element to the column sum
    }
    rowSums.push(tempSum); // After finishing the row, push the row sum to rowSums
  }

  return { rowSums, colSums }; // Return both arrays as an object
};

const result = calculateRowAndColumnSums(grid);
console.log("Row sums:", result.rowSums); // [6, 15, 24]
console.log("Column sums:", result.colSums); // [12, 15, 18]

const transposeArr = (arr) => {
    let transpose = []
    for (let i = 0; i < arr[0].length; i++){
        transpose[i] = [];
        for (let j = 0; j < arr.length; j++){
            transpose[i].push(arr[j][i]);
        }
    }
    return transpose;
}

console.log(transposeArr(grid));

const grid1 = [
    [1, 22, 3],
    [14, 5, 16],
    [7, 8, 19]
];

const findLargest = (arr) => {
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (largest < arr[i][j]){
                largest = arr[i][j]
            }
        }
    }

    return largest;
}

console.log(findLargest(grid1));