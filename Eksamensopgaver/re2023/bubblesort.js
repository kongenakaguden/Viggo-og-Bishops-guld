// Delopgave 1.1


let a = [2, 1, 3];
console.log(a);
const byt = (arr, i, j) => {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
byt(a,0,1);
console.log(a);

// Delopgave 1.2

let a1 = [5, 4, 1, 2, 3]

const bubblesort = (arr) => {
    let temp = 0;
    for (let j = 0; j < arr.length; j++){
        if (temp < arr[j]) {
            temp = arr[j];
        }
    }
}