/* Bil-klasserne */

class Car { // Changed 'car' to 'Car'
    // Objektets vrdier (Blueprintet)
    constructor(make, year, model, price,) {
        this.make = make;
        this.year = year;
        this.model = model;
        this.price = price;
        this.isSold = false;
    }

    // metode til at vise bilen
    displayInfo() {
        console.log(`Car make: ${this.make}, Year: ${this.year}, Model: ${this.model}, Price: ${this.price}`);
    }
    
    sellCar() {
        this.isSold = true;
    }

    getPrice() {
        console.log(`Price: ${this.price}`);
    }
}

class Dealership {
    constructor(name){
        this.name = name;
        this.cars = [];
    }

    addCar(car){
        this.cars.push(car)
    }

    listCars() {
        console.log(`Cars avaiable at: ${this.name}`)
        this.cars.forEach(car => car.displayInfo());
    }
}

// Lav instans af Car
const myCar = new Car("Audi", 2011, "A3", 45000); // Changed 'car' to 'Car'

// Kald funktionen displayInfo(); relateret til myCar.
myCar.displayInfo();   

const myDealership = new Dealership("Super Cars");

myDealership.addCar(myCar);

myDealership.listCars();

console.log(myDealership);