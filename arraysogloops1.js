// Delopgave 1.1
// Til delopgave 1.1 har jeg gemt et tilfældigt tal mellem 0 og længden på listen, i en variabel. Jeg logger derefter listen med index i det tilfældige tal gemt.

const liste = ["blå", "rød", "grøn", "gul"];

const tilfældigtElement = (liste) => {
    let temp = Math.floor(Math.random() * liste.length);
    return liste[temp]; 
}

console.log(tilfældigtElement(liste));

// Delopgave 1.2
// Jeg vil gerne i delopgave 1.2 genbruge funktionen fra delopgave 1.1 Da jeg jo stadig skal bruge tilfældige elementer fra listen. 
// Jeg vil starte med at lave et loop, der så kører funktionen n antal gange og pusher det tilfældige element ind i listen


const nyPose = (n) => {
    let pose = [];
    for (let i = 0; i < n; i++){
        let value = tilfældigtElement(liste);
        pose.push(value)
    }
    return pose;
}

console.log(nyPose(5))

// Delopgave 1.3
// For at modificere den tidligere funktion vil jeg nu igen gøre brug af Math.random i stedet for at bruge parameteren n

const nyPose1 = () => {
    let pose = [];
    let length = Math.floor(Math.random() * 10);
    for (let i = 0; i < length; i++){
        let value = tilfældigtElement(liste);
        pose.push(value);
    }
    return pose;
}

console.log(nyPose1());

// Delopgave 1.4
// For at løse delopgave 4, vil jeg igen loop igennem den givne liste, og derefter benytte mig af et if statement med en === operator for at se om den præcise værdi af liste[i] er === blå.

const tælBlå = (liste) => {
    let sum = 0;
    for (let i = 0; i < liste.length; i++){
        if (liste[i] === "blå") {
            sum++
        }

    }
    return sum;
}

let liste1 = ["blå", "blå", "grøn", "gul", "blå"];
let liste2 = ["blå", "gul", "grøn", "gul", "blå"];

console.log(tælBlå(liste1));
console.log(tælBlå(liste2));

// Delopgave 1.5
// En funktion der returnerer et array med 10 tilfældige poser kræver lige pludselig at jeg der laves et nested array. Altså et array med arrays i. 
// Først vil jeg genbruge funktionen nypose, da den bruger funktionen tilfældigtelement. Så jeg genbruger i princippet 2 funktioner. Funktionen nypose skal så generere en liste at tilfældige elementer der så pushes ind i en ny liste, så der kommer en ny liste med 10 lister

const randomPoser = () => {
    let bags = [];
    for (let i = 0; i < 10; i++){
        let liste = nyPose1()
        bags.push(liste);

    }
    console.log(`Her er de ${bags.length} tilfældige poser: `)
    return bags;
}

console.log(randomPoser());

// Delopgave 1.6
// Nu skal der så loopes igennem alle poserne, for at tælle antallet af blå kugler i alle poserne.

const tælBlåKugler = () => {
    let sum = 0;
    let bags = randomPoser();
    for (let i = 0; i < bags.length; i++){
        for (let j = 0; j < bags.length; j++){
            if(bags[i][j] === "blå"){
                sum++
            }
        }
    }

    return sum;
}

console.log(tælBlåKugler());