class Address {
    constructor(street, city, zip, country){
        this.street = street,
        this.city = city,
        this.zip = zip,
        this.country = country
    }
}

class Customer {
    constructor(id, fullName, email, address){
        this.id = id,
        this.fullName = fullName,
        this.email = email,
        this.address = address
    }
}

class Vehicle {
    constructor(id, model, mileage){
        this.id = id,
        this.model = model,
        this.mileage = mileage
    }
}

class Contract {
    constructor(id, customer, dealership, vehicle, start, end, price){
        this.id = id,
        this.customer = customer,
        this.dealership = dealership,
        this.vehicle = vehicle,
        this.start = start,
        this.end = end,
        this.price = price
    }
}