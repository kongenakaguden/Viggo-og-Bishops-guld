/* Beskrivelse: Du skal lave et program, der holder styr på en liste af studerendes karakterer. Programmet skal bruge arrays, array-funktioner og både for-loop og forEach. Derudover skal programmet beregne gennemsnittet af karaktererne.

Trin:

	1.	Opret en array kaldet karakterer, der indeholder fem tal (karakterer mellem 0 og 100).
	2.	Tilføj en ekstra karakter til listen ved hjælp af push.
	3.	Brug et for-loop til at finde den højeste karakter i listen.
	4.	Brug forEach til at beregne den samlede sum af alle karaktererne.
	5.	Brug summen til at udregne gennemsnittet af karaktererne og udskriv det.
	6.	Brug slice til at lave en ny liste, som indeholder de tre bedste karakterer, og udskriv dem.

Ekstra udfordring (valgfri):

	7.	Sorter karakterer i stigende rækkefølge (lav til høj) og udskriv den sortede liste. */

    let karakterer = [2, 4, 7, 10, 12];
    let højesteKarakter = karakterer[0];
    let sum = 0;

    karakterer.push(0);

   
    for (let i = 0; i < karakterer.length; i++){
        if (karakterer[i] > højesteKarakter) {
             højesteKarakter = karakterer[i];
        }
     }
    

    console.log("Den højeste karakter er:", højesteKarakter)

    karakterer.forEach(function(mink) {
        sum += mink;
    });

    console.log("Den samlede værdi af de forskellige karakterer er:", sum)

    console.log(sum/karakterer.length)