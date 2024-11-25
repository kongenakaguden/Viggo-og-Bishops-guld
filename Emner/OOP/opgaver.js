class Book {
    constructor(title, author, yearPublished) {
        this.title = title; // Titel på bogen
        this.author = author; // Forfatterens navn
        this.yearPublished = yearPublished; // Udgivelsesår
    }

    getSummary() {
        return `'${this.title}' af ${this.author}, udgivet i ${this.yearPublished}`;
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
            console.log(`Bogen '${book.title}' af ${book.author} er tilføjet til biblioteket.`);
        } else {
            console.error("Kun objekter af typen 'Book' kan tilføjes.");
        }
    }

    listBooks() {
        if (this.books.length === 0) {
            console.log("Biblioteket indeholder ingen bøger.");
        } else {
            console.log("Bøger i biblioteket:");
            this.books.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title} af ${book.author}`);
            });
        }
    }
}


const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);

const mylibrary = new Library();
mylibrary.addBook(book1);
mylibrary.addBook(book2);
mylibrary.addBook(book3);

mylibrary.listBooks