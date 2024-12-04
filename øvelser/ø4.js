let kundeliste = ["A.C. Hansen", "Peters cykler", "De Franske Oste"]

console.log(kundeliste[0])
console.log(kundeliste[1])
console.log(kundeliste[2])

kundeliste[1] = "Peters Cykler";

console.log(kundeliste[1]);

kundeliste.push("Pro SkiShop");

console.log(kundeliste.length);

console.log(kundeliste.shift());
console.log(kundeliste.length);
console.log(kundeliste.shift());
console.log(kundeliste.length);
console.log(kundeliste.shift());
console.log(kundeliste.length);
console.log(kundeliste.shift());
console.log(kundeliste.length);

const behandlKunde = (kundeListe) => {
    
    console.log("Behandler kunde: " + kundeListe.shift());
    kundeliste.shift();
    if (kundeListe.length = 0){
        console.log("Ingen kunder i kø");
    }
}

liste = ["Bent", "Per"]


const sætIKø = (kundeListe, kundeNavn) => {

    kundeListe.push(kundeNavn);
    console.log(`${kundeNavn} sat i kø`)
    console.log(kundeListe);

}

sætIKø(liste, "Erik");

const modificerKunde = (kundeListe, index, nyKunde) => {
    if (index > kundeListe.length) {console.log("forkert index")} else {
    console.log(`Gammel kunde: ${kundeListe[index]}, ændres til: ${nyKunde}`)
    kundeListe[index] = nyKunde;
    console.log(kundeListe);}

}

modificerKunde(liste, 2, "John");

let Bent = {
    adresse: "whatevervej",
    kontaktperson: "din mor",
    email: "fuckermail",
    username: "Bent betjent",
    password: ":("
}

const modKunde = (kunde, attr, værdi) => {
    kunde[attr] = værdi
    return kunde;
    
}

modKunde(Bent, "adresse", "fuckmigvej")

console.log(Bent);


const sætKundeIKø2 = (kundeListe, kundeObjekt) => {
    kundeListe.push(kundeObjekt);
    console.log(kundeListe);

    kundeListe.forEach(kunde => {
        console.log(kunde.alder);
        });
    }



let listen = []
let objekt1 = { navn: "Alice", alder: 12}
let objekt2 = { navn: "Erik", alder: 23}

sætKundeIKø2(listen, objekt1)
sætKundeIKø2(listen, objekt2);

const nytKundenavn = (kundeObjekt, nytNavn) => {
    
}