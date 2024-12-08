/* 	1.	Opret en tom array kaldet favoritFilm.
	2.	Tilfj fire af dine favoritfilm til listen ved hjlp af push.
	3.	Brug pop til at fjerne den sidste film fra listen (da du ndrede mening om den).
	4.	Brug slice til at lave en kopi af de frste tre film p listen og gem dem i en ny array kaldet topFilm.
	5.	Brug et for-loop til at udskrive navnene p alle filmene i topFilm.
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