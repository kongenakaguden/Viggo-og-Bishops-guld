let gennemsnitAfArray = [2, 5, 7, 1, 125]

function gennemsnit(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += i
    }

    sum / array.length
    console.log(sum);
}

gennemsnit(gennemsnitAfArray);





let arr = [2, 5, 1, 7, 3, 8, 3, -6, -2, -7, 64];

function findStreste(array){
    let sum = array[0];
    for(let i = 1; i < array.length; i++){
        if (sum < array[i]){
        sum = array[i]
    }
}  
 return sum
}

console.log(findStreste(arr));


const words = ["kat", "elefant", "bil", "computer", "hus", "kkken", "skole", "tr", "bord", "bibliotek"];

const longWords = [];
function nyarray( words){
for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longWords.push(words[i]);
    }
}
console.log(longWords);
}


