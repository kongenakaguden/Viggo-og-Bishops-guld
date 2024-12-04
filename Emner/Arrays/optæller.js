/* sumArray([1, 2, 3, 4]); // Skal returnere 10 */



function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]))

/* countOddNumbers([1, 2, 3, 4]); // Skal returnere 2 */

function countOddNumbers(arr) {
    let sum = 0;
    let uligeTal = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            sum++
            uligeTal.push(arr[i]);
        }
        }
        console.log(uligeTal);
        return sum;
    }

console.log(countOddNumbers([1, 2, 3, 4]))

/* findLargestNumber([1, 2, 3, 4]); // Skal returnere 4 */
/* findLargestNumber([-10, -5, 0, 5, 10]); // Skal returnere 10*/

function findLargestNumber(arr){
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (sum < arr[i])
            sum = arr[i];
    }
    return sum;

}

console.log(findLargestNumber([1, 2, 3, 4]))
console.log(findLargestNumber([-10, -5, 0, 5, 10]))

function countLargestNumberOccurrences(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (largest < arr[i])
            largest = arr[i];
    }
    
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (largest === arr[i]){
            count++
        }
        
    }
    return count
}


console.log(countLargestNumberOccurrences([1, 2, 3, 3, 4, 4, 4])); // Skal returnere 3
console.log(countLargestNumberOccurrences([5, 5, 5, 1])); 
console.log(countLargestNumberOccurrences([10, 20, 10, 20, 20, 20, 20]));

function reverseArray(arr){
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}

console.log(reverseArray([1, 2, 3, 4]))