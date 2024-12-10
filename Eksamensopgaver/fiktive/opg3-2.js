function bogstavBageren(letterCounts, word) {
    // Opret en kopi af lageret, så vi kan opdatere det undervejs
    const availableLetters = { ...letterCounts };

    // Iterer gennem hvert bogstav i det ønskede ord
    for (let char of word) {
        // Tjek om bogstavet findes på lager og der er nok af det
        if (!availableLetters[char] || availableLetters[char] <= 0) {
            return false; // Hvis ikke, kan ordet ikke laves
        }
        // Reducér antallet af det pågældende bogstav
        availableLetters[char]--;
    }

    // Hvis vi når hertil, kan ordet laves
    return true;
}

// Testcases
let letterCounts = { h: 1, e: 1, l: 2, o: 1 };
let word = "hello";
console.log(bogstavBageren(letterCounts, word)); // Output: true

let letterCounts2 = { h: 1, e: 1, l: 1, o: 1 };
let word2 = "hello";
console.log(bogstavBageren(letterCounts2, word2)); // Output: false

let letterCounts3 = {
    s: 10, p: 5, e: 8, c: 2, i: 8, a: 6, l: 7, g: 4, ø: 1, 
    k: 2, n: 4, t: 2, b: 2, r: 3, d: 1, o: 1, æ: 2,
};
let word3 = "speciallægepraksisplanlægningsstabiliseringsperiode";
console.log(bogstavBageren(letterCounts3, word3)); // Output: true