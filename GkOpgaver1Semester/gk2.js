/* Spillet skal spilles af computeren og mod sig selv.
Kryds og bolle 
Felterne skal have stilles op sådan:
         [0], [1], [2],
Felter = [3], [4], [5],
         [6], [7], [8],

Tre på stribe vinder:
Vandret
Lodret 
Diagonalt


Man kunne i en mulig løsning få brug for følgende globalevariable:
brædt : et array med 9 pladser til at holde styr på mærkerne. Til atstarte med kunne pladserne i arrayet have værdien null ogefterhånden som spillet skrider frem, de mærker "X" eller "O" der erblevet sat.

tommeFelter : et array til at holde styr på indicerbne/pladsnumrenepå de tomme felter der er tilbage på brædtet.

spiller : hvis tur er det? "X" eller "O"

randomFelt : en variabel til det tilfældige felt, der skal vælges i hvertur.

vinderKombinationer : en konstant med et array afvinderkombinationerne angivet ovenfor.

*/


let brædt = [[0, 1, 2,], 
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
    
    for (let i = 0; i < brædt.length; i++) {
        for (let j = 0; j < brædt.length; j++){
            console.log(brædt[i][j]);
        }
    };
}

matrixLoop();



                          /*console.log(vinderKombinationer[3]);
console.log(brædt);
console.log(brædt[0][1]);*/