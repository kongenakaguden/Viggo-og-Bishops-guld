/* Beskrivelse: Du skal lave et program, der holder styr p en liste af studerendes karakterer. Programmet skal bruge arrays, array-funktioner og bde for-loop og forEach. Derudover skal programmet beregne gennemsnittet af karaktererne.

Trin:

	1.	Opret en array kaldet karakterer, der indeholder fem tal (karakterer mellem 0 og 100).
	2.	Tilfj en ekstra karakter til listen ved hjlp af push.
	3.	Brug et for-loop til at finde den hjeste karakter i listen.
	4.	Brug forEach til at beregne den samlede sum af alle karaktererne.
	5.	Brug summen til at udregne gennemsnittet af karaktererne og udskriv det.
	6.	Brug slice til at lave en ny liste, som indeholder de tre bedste karakterer, og udskriv dem.

Ekstra udfordring (valgfri):

	7.	Sorter karakterer i stigende rkkeflge (lav til hj) og udskriv den sortede liste. */

    let karakterer = [2, 4, 7, 10, 12];
    let hjesteKarakter = karakterer[0];
    let sum = 0;

    karakterer.push(0);

   
    for (let i = 0; i < karakterer.length; i++){
        if (karakterer[i] > hjesteKarakter) {
             hjesteKarakter = karakterer[i];
        }
     }
    

    console.log("Den hjeste karakter er:", hjesteKarakter)

    karakterer.forEach(function(mink) {
        sum += mink;
    });

    console.log("Den samlede vrdi af de forskellige karakterer er:", sum)
/* Opgave 5 */
    console.log(sum/karakterer.length)

    