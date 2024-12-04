let nestedarray = [["hej", "hund"], ["din", "mor"], ["hest", "hund"]];

const simpleloop = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            console.log(array[i][j])
        }
    }
};

simpleloop(nestedarray);

/* En lille loop af bare et normalt array, hvor at den skal printe højeste værdi i arrayet <<<, ligger også en i opgaven gennemsnit.js*/

let arr = [5, 1, 6, 8, 2, 5, 87, 1, 321, 92, 123, 63, 124, 732, 72314, 3124, 51254, 1255, 5125, 512414]

const highest = (arr) => {
let sum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(sum < arr[i]){
            sum = arr[i]}
    }
    return sum;
}

console.log(highest(arr));

