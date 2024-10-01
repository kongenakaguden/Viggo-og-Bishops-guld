/*   1.	Opret en tom array kaldet shoppingListe.
    2.	Tilføj tre varer til indkøbslisten ved hjælp af push.
	3.	Brug pop til at fjerne den sidste vare fra listen (da du ændrede mening og ikke vil købe den).
	4.	Brug unshift til at tilføje en vare i starten af listen (da det er noget, du virkelig har brug for).
	5.	Brug shift til at fjerne den første vare fra listen (du fandt den allerede derhjemme).
	6.	Brug slice til at oprette en ny liste, der kun indeholder de to første varer i shoppingListe (i tilfælde af at du vil lave en mindre tur).
	7.	Udskriv den oprindelige shoppingListe og den nye, mindre liste. */

// Opgave 1:

let liste = [];

// Opgave 2:

liste.push("Æbler");
liste.push("Bananer");
liste.push("Pærer");
liste.push("Ost");
console.log("Opgave 2: ");
console.log(liste);

// Opgave 3:

liste.pop();
console.log("Opgave 3: ");
console.log(liste);

// Opgave 4:

liste.unshift("Mælk");
console.log("Opgave 4: ");
console.log(liste);

// Opgave 5:

liste.shift();
console.log("Opgave 5: ")
console.log(liste);

//Opgave 6:

let mindreliste = liste.slice(0, 2);
console.log("Opgave 6: ")
console.log(mindreliste);

//Opgave 7:

console.log("Opgave 7: ");
console.log(liste);
console.log(mindreliste);