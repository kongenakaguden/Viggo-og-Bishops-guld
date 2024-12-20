// Klasse Book
class Book {
    constructor(title, author, yearPublished) {
        this.title = title; // Titel p bogen
        this.author = author; // Forfatterens navn
        this.yearPublished = yearPublished; // Udgivelsesr
    }

    // Metode til at returnere en beskrivelse af bogen
    getSummary() {
        return `'${this.title}' af ${this.author}, udgivet i ${this.yearPublished}`;
    }
}

// Klasse Library
class Library {
    constructor() {
        this.books = []; // Array til at holde bger
    }

    // Metode til at tilfje en bog til biblioteket
    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
            console.log(`Bogen '${book.title}' af ${book.author} er tilfjet til biblioteket.`);
        } else {
            console.error("Kun objekter af typen 'Book' kan tilfjes.");
        }
    }

    // Metode til at liste alle bger i biblioteket
    listBooks() {
        if (this.books.length === 0) {
            console.log("Biblioteket indeholder ingen bger.");
        } else {
            console.log("Bger i biblioteket:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title} af ${book.author}`);
            });
        }
    }

    // Metode til at finde en bog baseret p titel
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (foundBook) {
            console.log(`Fundet bog: ${foundBook.getSummary()}`);
        } else {
            console.log("Bogen blev ikke fundet.");
        }
    }

    // Metode til at fjerne en bog baseret p titel
    removeBook(title) {
        const index = this.books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`Bogen '${removedBook[0].title}' af ${removedBook[0].author} er blevet fjernet fra biblioteket.`);
        } else {
            console.log("Bogen blev ikke fundet, og kan derfor ikke fjernes.");
        }
    }
}

// Brugersystem - Simpel tekstbaseret interface

const myLibrary = new Library();

// Simulerer et brugerinterface
function showMenu() {
    console.log("\nVlg en handling:");
    console.log("1. Tilfj en bog");
    console.log("2. Sg efter en bog");
    console.log("3. Fjern en bog");
    console.log("4. Vis bger");
    console.log("5. Afslut");
}

function handleUserInput(choice) {
    const readlineSync = require("readline-sync");

    switch (choice) {
        case "1":
            // Tilfj en bog
            const title = readlineSync.question("Indtast bogens titel: ");
            const author = readlineSync.question("Indtast forfatterens navn: ");
            const year = readlineSync.question("Indtast udgivelsesret: ");
            const newBook = new Book(title, author, parseInt(year));
            myLibrary.addBook(newBook);
            break;

        case "2":
            // Sg efter en bog
            const searchTitle = readlineSync.question("Indtast titel p bogen, du vil sge efter: ");
            myLibrary.findBookByTitle(searchTitle);
            break;

        case "3":
            // Fjern en bog
            const removeTitle = readlineSync.question("Indtast titel p bogen, du vil fjerne: ");
            myLibrary.removeBook(removeTitle);
            break;

        case "4":
            // Vis alle bger
            myLibrary.listBooks();
            break;

        case "5":
            // Afslut
            console.log("Afslutter programmet...");
            process.exit();

        default:
            console.log("Ugyldigt valg, prv igen.");
            break;
    }
}

function runLibraryInterface() {
    const readlineSync = require("readline-sync");

    let choice = "";
    while (choice !== "5") {
        showMenu();
        choice = readlineSync.question("Vlg en handling (1-5): ");
        handleUserInput(choice);
    }
}

// Start bibliotekssystemet
runLibraryInterface();