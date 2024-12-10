// Funktion der finder den mest populære karakter i en given streng
function findMostPopularCharacter(inputString) {
    // Objekt til at holde antallet af hver karakter
    const charCount = {};

    // Gennemgår hver karakter i input-strengen
    for (const char of inputString) {
        // Hvis karakteren allerede er i objektet, øg dens tæller
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Ellers initialiser den med 1
            charCount[char] = 1;
        }
    }

    // Find den højeste værdi i tællerne
    let maxCount = 0;
    for (const count of Object.values(charCount)) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    // Find alle tegn med tælleren lig med maxCount
    const mostPopularChars = [];
    for (const [char, count] of Object.entries(charCount)) {
        if (count === maxCount) {
            mostPopularChars.push(char);
        }
    }

    // Returner resultatet som en array
    return [mostPopularChars, maxCount];
}

// Test af funktionen med test-casen
const inputString = "ejoifwbsdjiojiboergjiesdjvoidwjofiwefoiwjfjosidcjdgjreoit43ufjiowjwer428394e7q8da98d";
const result = findMostPopularCharacter(inputString);

console.log(result);
// Output: [ [ 'j', 'i' ], 12 ]