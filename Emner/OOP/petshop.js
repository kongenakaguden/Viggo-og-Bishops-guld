class Petshop {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.animals = [];
        this.products = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    addProduct(product) {
        this.products.push(product);
    }

    listAnimals() {
        console.log("Dyrene i butikken:");
        this.animals.forEach(animal => animal.describe());
    }

    listProducts() {
        console.log("Produkterne i butikken:");
        this.products.forEach(product => product.describe());
    }
}

class Animal {
    constructor(name, species, price) {
        this.name = name;
        this.species = species;
        this.price = price;
    }

    describe() {
        console.log(`Dyrets navn: ${this.name}, art: ${this.species}, pris: ${this.price} kr.`);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    describe() {
        console.log(`Produktets navn: ${this.name}, pris: ${this.price} kr.`);
    }
}

class Customer {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.ownedAnimals = [];
        this.purchasedProducts = [];
    }

    describe() {
        console.log(`Navn: ${this.name}, budget: ${this.budget} kr.`);
        console.log("Ejede dyr:");
        this.ownedAnimals.forEach(animal => animal.describe());
        console.log("Kbte produkter:");
        this.purchasedProducts.forEach(product => product.describe());
    }

    buyAnimal(animal, petShop) {
        if (this.budget < animal.price) {
            console.log(`Du har ikke nok penge til at kbe ${animal.name}.`);
            return;
        }

        const animalIndex = petShop.animals.indexOf(animal);
        if (animalIndex === -1) {
            console.log(`${animal.name} findes ikke i butikken.`);
            return;
        }

        this.budget -= animal.price;
        petShop.animals.splice(animalIndex, 1);
        this.ownedAnimals.push(animal);

        const transaction = new Transaction(this, animal, animal.price);
        transaction.summary();
    }

    buyProduct(product, petShop) {
        if (this.budget < product.price) {
            console.log(`Du har ikke nok penge til at kbe ${product.name}.`);
            return;
        }

        const productIndex = petShop.products.indexOf(product);
        if (productIndex === -1) {
            console.log(`${product.name} findes ikke i butikken.`);
            return;
        }

        this.budget -= product.price;
        petShop.products.splice(productIndex, 1);
        this.purchasedProducts.push(product);

        const transaction = new Transaction(this, product, product.price);
        transaction.summary();
    }
}

class Transaction {
    constructor(customer, item, amount) {
        this.customer = customer;
        this.item = item;
        this.amount = amount;
        this.timestamp = new Date(); // Tidspunkt for handlen
    }

    summary() {
        console.log(`[TRANSAKTION] ${this.customer.name} kbte ${this.item.name} for ${this.amount} kr. den ${this.timestamp.toLocaleString()}.`);
    }
}

// Test kode
const petshop1 = new Petshop("Viggos butik", "Kbenhavn");
const animal1 = new Animal("Klaus", "Hestus Maximus", 500);
const product1 = new Product("Kiks", 50);
const customer1 = new Customer("Viggo", 1000);

petshop1.addAnimal(animal1);
petshop1.addProduct(product1);

petshop1.listAnimals();
petshop1.listProducts();

customer1.describe();
customer1.buyAnimal(animal1, petshop1);
customer1.describe();
customer1.buyProduct(product1, petshop1);
customer1.describe();