function randomsum(a_max, b_max) {
  let max_sum_count = 0;
  for (let i = 0; i < 100; i++) {
    let sum =
      Math.floor(Math.random() * a_max) + Math.floor(Math.random() * b_max);
    if (sum == a_max + b_max) {
      max_sum_count++;
      console.log("max sum count :" + max_sum_count);
    }
  }
}

randomsum(4, 5);

// Delopgave 3.2
// Her har jeg gjort const til let, for at man kan redigere på værdien af variablen.
// Derefter har jeg fået den til at return max, sådan den har et stoppested, og kan printe max til konsollen.
function max_member(array_A) {
  let max = 0;
  for (let i = 0; i < array_A.length; i++) {
    if (array_A[i] > max) {
      max = array_A[i];
    }
  }
  return max;
}
console.log(max_member([2, 7, 4]));

// Delopgave 3.3
// = operatoren skal skiftes til === sådan at det er når a[0] er præcist 0;
function count_zeros(A) {
  let zeros = 0;
  do {
    A.shift();
    zeros++;
  } while (A[0] === 0);

  return [zeros, A];
}
console.log(count_zeros([0, 0, 0, 0, 1, 1, 1, 1, 1, 1]));

// Delopgave 3.4
// Sætter først result indenfor scope, så ændrer jeg let i = l, til let i = 0
let styrker_1 = [21, 4, 21];
// --> 1
let styrker_2 = [1, 2, 3, 4];
// --> 3
let styrker_3 = [10, 9, 8, 7];
// --> 0
function insekt(styrker) {
  let result = 0;
  for (let i = 0; i < styrker.length; i++) {
    if (styrker[i - 1] < styrker[i]) {
      result++;
    }
  }
  return result;
}
console.log(insekt(styrker_1));
console.log(insekt(styrker_2));
console.log(insekt(styrker_3));

// Delopgave 3.5
// Fikser først result stavefejlen.
// Derefter laver jeg om på rækkefølgen af [j][i] til [i][j] sådan den returner det rigtige
let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function matrix_2nd(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let result_i = [];
    for (j = 0; j < A.length; j++) {
      result_i.push(A[i][j] * A[i][j]);
    }
    result.push(result_i);
  }
  return result;
}
console.log(matrix_2nd(A));
