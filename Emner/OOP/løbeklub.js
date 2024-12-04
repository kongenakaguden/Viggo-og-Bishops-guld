// Klasse: Medlem
class Medlem {
    // Constructor til at initialisere et medlem med de nødvendige egenskaber
    constructor(id, navn, email, alder, aktiv) {
        this.id = id; // Medlemsnummer
        this.navn = navn; // Navn på medlemmet
        this.email = email; // Medlemmets emailadresse
        this.alder = alder; // Alder på medlemmet
        this.aktiv = aktiv; // Boolean: True, hvis medlemmet er aktivt
    }

    // Metode til at tjekke, om medlemmet er aktivt
    erAktiv() {
        return this.aktiv; // Returnerer værdien af aktiv
    }
}

// Klasse: FællesTure
class FællesTure {
    // Constructor til at initialisere en fælles løbetur
    constructor(id, dato, distance, beskrivelse) {
        this.id = id; // Unikt ID for løbeturen
        this.dato = dato; // Dato for løbeturen
        this.distance = distance; // Distance på løbeturen (i km)
        this.beskrivelse = beskrivelse; // Kort beskrivelse af løbeturen
    }

    // Metode til at vise detaljer om løbeturen
    visDetaljer() {
        // Logger en beskrivelse af løbeturen til konsollen
        console.log(`Løbetur Detaljer:\nID: ${this.id}, Dato: ${this.dato}, Distance: ${this.distance} km, Beskrivelse: ${this.beskrivelse}`);
    }
}

// Klasse: Deltagelse
class Deltagelse {
    // Constructor til at initialisere deltagelse med medlem, løbetur og tid
    constructor(medlem, løbetur, tid) {
        this.medlem = medlem; // Et Medlem-objekt
        this.løbetur = løbetur; // Et FællesTure-objekt
        this.tid = tid; // Tid registreret for løbeturen (i minutter)
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

// Klasse: Løbeklub
class Løbeklub {
    // Constructor til at initialisere løbeklubben med tomme lister
    constructor() {
        this.medlemmer = []; // Liste over medlemmer
        this.løbeture = []; // Liste over fælles løbeture
        this.deltagelser = []; // Liste over registrerede deltagelser
    }

    // Metode til at tilføje et medlem til listen
    tilføjMedlem(medlem) {
        this.medlemmer.push(medlem); // Tilføjer medlemmet til listen
    }

    // Metode til at tilføje en løbetur til listen
    tilføjLøbetur(løbetur) {
        this.løbeture.push(løbetur); // Tilføjer løbeturen til listen
    }

    // Metode til at registrere en deltagelse
    registrerDeltagelse(deltagelse) {
        if (deltagelse.erGodkendt()) { // Tjekker, om deltagelsen er godkendt
            this.deltagelser.push(deltagelse); // Tilføjer deltagelsen til listen
            console.log(`Deltagelse godkendt for Medlem ID: ${deltagelse.medlem.id} på løbetur ID: ${deltagelse.løbetur.id}`);
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
        
        console.log("\nLøbeture:");
        // Logger detaljer om hver løbetur
        this.løbeture.forEach((løbetur) => løbetur.visDetaljer());
        
        console.log("\nDeltagelser:");
        // Logger hver deltagelse med medlem-ID, løbetur-ID og tid
        this.deltagelser.forEach((deltagelse) => {
            console.log(`Medlem ID: ${deltagelse.medlem.id}, Løbetur ID: ${deltagelse.løbetur.id}, Tid: ${deltagelse.tid} min`);
        });
    }
}

// Opret medlemmer
const medlem1 = new Medlem(1, "Anne", "anne@mail.dk", 22, false); // Inaktivt medlem
const medlem2 = new Medlem(2, "Jens", "jens@mail.dk", 30, true);  // Aktivt medlem

// Opret løbeture
const løbetur1 = new FællesTure(1, "01-12-2024", 5, "Morgenløb i skoven");
const løbetur2 = new FællesTure(2, "02-12-2024", 10, "Lang tur ved stranden");

// Opret deltagelser
const deltagelse1 = new Deltagelse(medlem1, løbetur1, 30); // Inaktivt medlem
const deltagelse2 = new Deltagelse(medlem2, løbetur2, 50); // Aktivt medlem

// Opret løbeklub og tilføj data
const løbeklub = new Løbeklub();
løbeklub.tilføjMedlem(medlem1); // Tilføjer inaktivt medlem
løbeklub.tilføjMedlem(medlem2); // Tilføjer aktivt medlem
løbeklub.tilføjLøbetur(løbetur1); // Tilføjer første løbetur
løbeklub.tilføjLøbetur(løbetur2); // Tilføjer anden løbetur

// Registrer deltagelser
løbeklub.registrerDeltagelse(deltagelse1); // Forsøger at registrere inaktivt medlem
løbeklub.registrerDeltagelse(deltagelse2); // Registrerer aktivt medlem

// Log klubbens data
løbeklub.logData(); // Viser alle medlemmer, løbeture og deltagelser