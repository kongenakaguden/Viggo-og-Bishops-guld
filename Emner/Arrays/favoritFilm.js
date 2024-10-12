/* 	1.	Opret en tom array kaldet favoritFilm.
	2.	Tilføj fire af dine favoritfilm til listen ved hjælp af push.
	3.	Brug pop til at fjerne den sidste film fra listen (da du ændrede mening om den).
	4.	Brug slice til at lave en kopi af de første tre film på listen og gem dem i en ny array kaldet topFilm.
	5.	Brug et for-loop til at udskrive navnene på alle filmene i topFilm.
*/

/* opgave 1) */

let favoritFilm = [];

favoritFilm.push("Rita", "Geen-yuz", "Quention", "Fartil4")

favoritFilm.pop();

let topFilm = favoritFilm.slice(0, 3);

const print = () => {
	for (let i = 0; i < topFilm.length; i++) {
		console.log(topFilm[i]);
	}
}

print();