function insekt(styrker) {
let result = 0;
for(i = 0; i < styrker.length; i++) {
    if (styrker[i] < styrker [i+1]){
        result++
    }
}
    return result;
}

let styrker = [1, 2, 3]
let styrker2 = [8, 4, 8, 5, 300]
let styrker3 = [8, 4, 8, 5, 30000, 124, 41, 52, 214]

console.log(insekt(styrker));
console.log(insekt(styrker2));
console.log(insekt(styrker3));


/* Først vil jeg lave et for loop der kører igennem insekternes styrker.*/
// Derefter ville jeg (siden insekterne kun spiser dem til venstre) sige at det index vi er på i for-loopet skal være index + 1 være størren end index. da index + 1 er til højre, for den til venstre. Hvis den er større vil jeg med et if statement tilføje 1 til result, og så fortsætte med for loopet.

function insektK(styrker, k){
    let result = 0;
    for (let i = 0; i < styrker.length; i++){
        let group1 = 0;
        for (let j = 0; j < k; j++){
            group1 += styrker[i + j]
        }

        let group2= 0;
        for (let j = 0; j < k; j++){
            group2 += styrker[i + j + 1]
        }

        if (group1 < group2) {
            result ++
        }
    }


    return result;
}


console.log(insektK(styrker, 1))
console.log(insektK(styrker2, 2))
console.log(insektK(styrker3, 3))





