// Klasse: Medlem
class Medlem {
    // Constructor til at initialisere et medlem med de ndvendige egenskaber
    constructor(id, navn, email, alder, aktiv) {
        this.id = id; // Medlemsnummer
        this.navn = navn; // Navn p medlemmet
        this.email = email; // Medlemmets emailadresse
        this.alder = alder; // Alder p medlemmet
        this.aktiv = aktiv; // Boolean: True, hvis medlemmet er aktivt
    }

    // Metode til at tjekke, om medlemmet er aktivt
    erAktiv() {
        return this.aktiv; // Returnerer vrdien af aktiv
    }
}

// Klasse: FllesTure
class FllesTure {
    // Constructor til at initialisere en flles lbetur
    constructor(id, dato, distance, beskrivelse) {
        this.id = id; // Unikt ID for lbeturen
        this.dato = dato; // Dato for lbeturen
        this.distance = distance; // Distance p lbeturen (i km)
        this.beskrivelse = beskrivelse; // Kort beskrivelse af lbeturen
    }

    // Metode til at vise detaljer om lbeturen
    visDetaljer() {
        // Logger en beskrivelse af lbeturen til konsollen
        console.log(`Lbetur Detaljer:\nID: ${this.id}, Dato: ${this.dato}, Distance: ${this.distance} km, Beskrivelse: ${this.beskrivelse}`);
    }
}

// Klasse: Deltagelse
class Deltagelse {
    // Constructor til at initialisere deltagelse med medlem, lbetur og tid
    constructor(medlem, lbetur, tid) {
        this.medlem = medlem; // Et Medlem-objekt
        this.lbetur = lbetur; // Et FllesTure-objekt
        this.tid = tid; // Tid registreret for lbeturen (i minutter)
    }

    // Metode til at tjekke, om deltagelsen er godkendt
    erGodkendt() {
        if (this.medlem.erAktiv()) { // Tjekker, om medlemmet er aktivt
            return true; // Godkendt, hvis medlemmet er aktivt
        } else {
            // Logger en besked, hvis medlemmet ikke er aktivt
            console.log(`Medlem ID: ${this.medlem.id} er ikke aktivt og kan ikke deltage.`);
            return false; // Deltagelse afvises
        }
    }
}

// Klasse: Lbeklub
class Lbeklub {
    // Constructor til at initialisere lbeklubben med tomme lister
    constructor() {
        this.medlemmer = []; // Liste over medlemmer
        this.lbeture = []; // Liste over flles lbeture
        this.deltagelser = []; // Liste over registrerede deltagelser
    }

    // Metode til at tilfje et medlem til listen
    tilfjMedlem(medlem) {
        this.medlemmer.push(medlem); // Tilfjer medlemmet til listen
    }

    // Metode til at tilfje en lbetur til listen
    tilfjLbetur(lbetur) {
        this.lbeture.push(lbetur); // Tilfjer lbeturen til listen
    }

    // Metode til at registrere en deltagelse
    registrerDeltagelse(deltagelse) {
        if (deltagelse.erGodkendt()) { // Tjekker, om deltagelsen er godkendt
            this.deltagelser.push(deltagelse); // Tilfjer deltagelsen til listen
            console.log(`Deltagelse godkendt for Medlem ID: ${deltagelse.medlem.id} p lbetur ID: ${deltagelse.lbetur.id}`);
        } else {
            // Logger en besked, hvis deltagelsen afvises
            console.log(`Deltagelse afvist for Medlem ID: ${deltagelse.medlem.id}`);
        }
    }

    // Metode til at logge klubbens data til konsollen
    logData() {
        console.log("\nMedlemmer:");
        // Logger hvert medlem med deres ID, navn og status
        this.medlemmer.forEach((medlem) => console.log(`ID: ${medlem.id}, Navn: ${medlem.navn}, Aktiv: ${medlem.erAktiv()}`));
        
        console.log("\nLbeture:");
        // Logger detaljer om hver lbetur
        this.lbeture.forEach((lbetur) => lbetur.visDetaljer());
        
        console.log("\nDeltagelser:");
        // Logger hver deltagelse med medlem-ID, lbetur-ID og tid
        this.deltagelser.forEach((deltagelse) => {
            console.log(`Medlem ID: ${deltagelse.medlem.id}, Lbetur ID: ${deltagelse.lbetur.id}, Tid: ${deltagelse.tid} min`);
        });
    }
}

// Opret medlemmer
const medlem1 = new Medlem(1, "Anne", "anne@mail.dk", 22, false); // Inaktivt medlem
const medlem2 = new Medlem(2, "Jens", "jens@mail.dk", 30, true);  // Aktivt medlem

// Opret lbeture
const lbetur1 = new FllesTure(1, "01-12-2024", 5, "Morgenlb i skoven");
const lbetur2 = new FllesTure(2, "02-12-2024", 10, "Lang tur ved stranden");

// Opret deltagelser
const deltagelse1 = new Deltagelse(medlem1, lbetur1, 30); // Inaktivt medlem
const deltagelse2 = new Deltagelse(medlem2, lbetur2, 50); // Aktivt medlem

// Opret lbeklub og tilfj data
const lbeklub = new Lbeklub();
lbeklub.tilfjMedlem(medlem1); // Tilfjer inaktivt medlem
lbeklub.tilfjMedlem(medlem2); // Tilfjer aktivt medlem
lbeklub.tilfjLbetur(lbetur1); // Tilfjer frste lbetur
lbeklub.tilfjLbetur(lbetur2); // Tilfjer anden lbetur

// Registrer deltagelser
lbeklub.registrerDeltagelse(deltagelse1); // Forsger at registrere inaktivt medlem
lbeklub.registrerDeltagelse(deltagelse2); // Registrerer aktivt medlem

// Log klubbens data
lbeklub.logData(); // Viser alle medlemmer, lbeture og deltagelser