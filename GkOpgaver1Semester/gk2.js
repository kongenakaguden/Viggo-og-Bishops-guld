/* Spillet skal spilles af computeren og mod sig selv.
Kryds og bolle 
Felterne skal have stilles op sdan:
         [0], [1], [2],
Felter = [3], [4], [5],
         [6], [7], [8],

Tre p stribe vinder:
Vandret
Lodret 
Diagonalt


Man kunne i en mulig lsning f brug for flgende globalevariable:
brdt : et array med 9 pladser til at holde styr p mrkerne. Til atstarte med kunne pladserne i arrayet have vrdien null ogefterhnden som spillet skrider frem, de mrker "X" eller "O" der erblevet sat.

tommeFelter : et array til at holde styr p indicerbne/pladsnumrenep de tomme felter der er tilbage p brdtet.

spiller : hvis tur er det? "X" eller "O"

randomFelt : en variabel til det tilfldige felt, der skal vlges i hvertur.

vinderKombinationer : en konstant med et array afvinderkombinationerne angivet ovenfor.

*/


let brdt = [[0, 1, 2,], 
             [3, 4, 5,], 
             [6, 7, 8,]];

let vinderKombinationer = [[0, 1, 2],  
                          [3, 4, 5], 
                          [6, 7, 8], 
                          [0, 3, 6], 
                          [1, 4, 7],  
                          [2, 5, 8], 
                          [0, 4, 8], 
                          [2, 4, 6]];



/* https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array */

const matrixLoop = () => {
    
    for (let i = 0; i < brdt.length; i++) {
        for (let j = 0; j < brdt.length; j++){
            console.log(brdt[i][j]);
        }
    };
}

matrixLoop();



                          /*console.log(vinderKombinationer[3]);
console.log(brdt);
console.log(brdt[0][1]);*/