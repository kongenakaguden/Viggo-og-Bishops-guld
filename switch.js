function ticketPrice(category) {
    let message; // Variabel til besked
    switch (category) {
        case "child":
            message = "Billetprisen for børn (under 12 år) er 50 kr.";
            break;
        case "adult":
            message = "Billetprisen for voksne (12-64 år) er 100 kr.";
            break;
        case "senior":
            message = "Billetprisen for seniorer (65+ år) er 75 kr.";
            break;
        case "student": // Ekstra kategori
        case "teacher": // Samme logik som student
            message = "Studerende og lærere får en rabat på 20%.";
            break;
        default:
            message = "Ukendt kategori. Prøv igen med 'child', 'adult', 'senior', 'student' eller 'teacher'.";
    }
    return message;
}

// Test af funktionen
console.log(ticketPrice("child"));    // Billetprisen for børn (under 12 år) er 50 kr.
console.log(ticketPrice("adult"));    // Billetprisen for voksne (12-64 år) er 100 kr.
console.log(ticketPrice("senior"));   // Billetprisen for seniorer (65+ år) er 75 kr.
console.log(ticketPrice("student"));  // Studerende og lærere får en rabat på 20%.
console.log(ticketPrice("teacher"));  // Studerende og lærere får en rabat på 20%.
console.log(ticketPrice("unknown"));  // Ukendt kategori. Prøv igen med ...

// Eksempel uden break
function ticketInfoNoBreak(category) {
    let info = "Kategori: ";
    switch (category) {
        case "child":
            info += "Børn - under 12 år.";
        case "adult":
            info += " Voksne - 12 til 64 år.";
        case "senior":
            info += " Seniorer - 65+ år.";
            break;
        default:
            info += " Ukendt kategori.";
    }
    return info;
}

console.log(ticketInfoNoBreak("child"));  // Uden break: Alle cases kører.
console.log(ticketInfoNoBreak("adult"));  // Uden break: Alle fra adult ned.
console.log(ticketInfoNoBreak("unknown"));// Default rammes.