// Delopgave 2.1

class Kursus {
    constructor(navn, kode){
        this.navn = navn;
        this.kode = kode;
    }
}

// Delopgave 2.2
class Kursist {
    constructor(navn, studienummer){
        this.navn = navn;
        this.studienummer = studienummer;
        this.kurser = [];
    }

    tilmeld(kursus) {
        this.kurser.push(kursus);
    }

}

// Delopgave 2.3
class Eksamen {
    constructor(kursus, kursist, karakter){
        this.kursus = kursus;
        this.kursist = kursist;
        this.karakter = karakter;
    }
}

// Delopgave 2.4
class Studie {
    constructor(){
        this.kursister = [];
        this.kurser = [];
        this.eksaminer = [];
    }

    tilfjKursus(kursus) {
        this.kurser.push(kursus);
    }

    tilfjKursist(kursist) {
        this.kursister.push(kursist);
    }

    tilfjEksamen(eksamen) {
        this.eksaminer.push(eksamen);
    }

    //Delopgave 2.5
    findEksaminer(kursist) {
    return this.eksaminer.filter(eksamen => eksamen.kursist === kursist);
    }
}


const kursus = new Kursus("programmering", "p101")
const kursist = new Kursist("H.Hansen", 1)
const eksamen = new Eksamen(kursist, kursus)


const itStudium = new Studie();

itStudium.tilfjKursist(kursist);
itStudium.tilfjKursus(kursus);
itStudium.tilfjEksamen(eksamen);

console.log(itStudium)
const kursistEksaminer = itStudium.findEksaminer(kursist);
console.log(kursistEksaminer);