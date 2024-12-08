let su = 6000
let months = 24




function opsparing(su, months) {
    let sum = 0;
    let brugt = 0;

    // Simuler mnedlige SU-indbetalinger
    for (let i = 1; i <= months; i++) {
        sum += su;
        console.log(`Mned: ${i}: Total opsparet: ${sum} kr.`);

        // Start byture efter 12 mneder
        if (i > 12) {
            let bytur = 1;

            while (sum >= 500) { // Fortst s lnge opsparingen er over 500 kr.
                let procent = bytur; // Brug procent svarende til bytursnummeret
                brugt = sum * procent / 100; // Beregn belbet der bruges
                sum -= brugt; // Trk det brugte belb fra opsparingen

                console.log(`Bytur: ${bytur}: Brugt ${procent}% = ${brugt.toFixed(2)} kr. Total opsparing = ${sum.toFixed(2)} kr.`);

                bytur++; // G til nste bytur
                if (sum < 500) break; // Stop, hvis opsparingen er under 500 kr.
            }
        }
    }
}

opsparing(su, months);



const square = function(x) {
    return x*x
};

const sum = () =>{
    let sum = 0;
    sum = 5+5
    console.log(sum);
}

sum()

const sumTwoNumbers = (a, b) =>{
    let sum = 0;
    sum = a + b;
    console.log(sum)
}

sumTwoNumbers(4, 8);
sumTwoNumbers(27, 61);

const checkNumber = (num) => {
    if (num > 10){
        console.log(`${num} er strre end 10`)
    } else {
        console.log(`${num} er ikke strre end 10`)
    }
}

checkNumber(5);
checkNumber(11);

const countUpTo = (num) => {
    for (let i = 0; i <= num; i++){
        console.log(i);
    }
}

countUpTo(3);

const convert = (tal, enhed) => {
    let result;

    switch(enhed){
        case "kmToMiles": 
            result = tal * 0.621371;
            console.log(`Antal KM = ${tal}, Antal miles = ${result}`);
            break;
        case "fahrenheitToCelcius":
            result = (tal - 32) * 5/9;
            console.log(`Fahrenheit: ${tal}, Celcius = ${result}`);
            break;
        case "kiloToTon":
            result = tal / 1000;
            console.log(`Antal kilo: ${tal}, antal ton: ${result}`)
            break;
    }
}

convert(10, "kmToMiles");
convert(98, "fahrenheitToCelcius");
convert(5000, "kiloToTon");