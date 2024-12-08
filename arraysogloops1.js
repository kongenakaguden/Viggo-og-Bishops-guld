// Delopgave 1.1
// Til delopgave 1.1 har jeg gemt et tilfldigt tal mellem 0 og lngden p listen, i en variabel. Jeg logger derefter listen med index i det tilfldige tal gemt.

const liste = ["bl", "rd", "grn", "gul"];

const tilfldigtElement = (liste) => {
    let temp = Math.floor(Math.random() * liste.length);
    return liste[temp]; 
}

console.log(tilfldigtElement(liste));

// Delopgave 1.2
// Jeg vil gerne i delopgave 1.2 genbruge funktionen fra delopgave 1.1 Da jeg jo stadig skal bruge tilfldige elementer fra listen. 
// Jeg vil starte med at lave et loop, der s krer funktionen n antal gange og pusher det tilfldige element ind i listen


const nyPose = (n) => {
    let pose = [];
    for (let i = 0; i < n; i++){
        let value = tilfldigtElement(liste);
        pose.push(value)
    }
    return pose;
}

console.log(nyPose(5))

// Delopgave 1.3
// For at modificere den tidligere funktion vil jeg nu igen gre brug af Math.random i stedet for at bruge parameteren n

const nyPose1 = () => {
    let pose = [];
    let length = Math.floor(Math.random() * 10);
    for (let i = 0; i < length; i++){
        let value = tilfldigtElement(liste);
        pose.push(value);
    }
    return pose;
}

console.log(nyPose1());

// Delopgave 1.4
// For at lse delopgave 4, vil jeg igen loop igennem den givne liste, og derefter benytte mig af et if statement med en === operator for at se om den prcise vrdi af liste[i] er === bl.

const tlBl = (liste) => {
    let sum = 0;
    for (let i = 0; i < liste.length; i++){
        if (liste[i] === "bl") {
            sum++
        }

    }
    return sum;
}

let liste1 = ["bl", "bl", "grn", "gul", "bl"];
let liste2 = ["bl", "gul", "grn", "gul", "bl"];

console.log(tlBl(liste1));
console.log(tlBl(liste2));

// Delopgave 1.5
// En funktion der returnerer et array med 10 tilfldige poser krver lige pludselig at jeg der laves et nested array. Alts et array med arrays i. 
// Frst vil jeg genbruge funktionen nypose, da den bruger funktionen tilfldigtelement. S jeg genbruger i princippet 2 funktioner. Funktionen nypose skal s generere en liste at tilfldige elementer der s pushes ind i en ny liste, s der kommer en ny liste med 10 lister

const randomPoser = () => {
    let bags = [];
    for (let i = 0; i < 10; i++){
        let liste = nyPose1()
        bags.push(liste);

    }
    console.log(`Her er de ${bags.length} tilfldige poser: `)
    return bags;
}

console.log(randomPoser());

// Delopgave 1.6
// Nu skal der s loopes igennem alle poserne, for at tlle antallet af bl kugler i alle poserne.

const tlBlKugler = () => {
    let sum = 0;
    let bags = randomPoser();
    for (let i = 0; i < bags.length; i++){
        for (let j = 0; j < bags.length; j++){
            if(bags[i][j] === "bl"){
                sum++
            }
        }
    }

    return sum;
}

console.log(tlBlKugler());