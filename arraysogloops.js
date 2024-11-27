const liste = ["blå", "rød", "grøn", "gul"]

function tilfældigtElement(liste){
    let i = Math.floor(Math.random()* liste.length)
    return liste[i];
}
console.log(tilfældigtElement(liste))








function nyPose(tal, liste) {
    let nyPose = [];

    for (let i = 0; i < tal; i++) {
       
        nyPose.push(tilfældigtElement(liste));

    }
return nyPose;
}

console.log(nyPose(5, liste));