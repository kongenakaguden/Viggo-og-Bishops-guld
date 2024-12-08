class Bil {
    constructor(klasse, nummer, mærke, model, kilometertal, tanket, service){
        this.klasse = klasse;
        this.nummer = nummer;
        this.mærke = mærke;
        this.model = model;
        this.kilometertal = kilometertal;
        this.tanket = tanket;
        this.service = service;
    }

    bilOK(){
        if (this.tanket === true && this.service === false){
            return true
        } else {
            return false
        }
    }
}

class Kunde {
    constructor(kørekortnr, navn, adresse, kreditkortnr, gyldigt_CC){
        this.kørekortnr = kørekortnr;
        this.navn = navn;
        this.adresse = adresse;
        this.kreditkortnr = kreditkortnr;
        this.gyldigt_CC = gyldigt_CC;
    }

    kundeOK() {
        // Tjek om kørekortnummer er et 8-cifret tal og kreditkortnummer er et 16-cifret tal
        const kørekortnrValid = Number.isInteger(this.kørekortnr) && this.kørekortnr.toString().length === 8;
        const kreditkortnrValid = Number.isInteger(this.kreditkortnr) && this.kreditkortnr.toString().length === 16;
        
        // Tjek om kreditkortet er gyldigt
        const kreditkortGyldigt = this.gyldigt_CC === true;

        // Hvis alle betingelser er opfyldt, returnér true
        if (kørekortnrValid && kreditkortnrValid && kreditkortGyldigt) {
            return true;
        } else {
            return false;
        }
    }
}

class Transkation {
    constructor(id, kunde, bil, datostart, datoslut){
        this.id = id;
        this.kunde = kunde;
        this.bil = bil;
        this.datostart = datostart;
        this.datoslut = datoslut;
    }

    transaktionOK(){
        
    }
}