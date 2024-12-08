class Resturant {
    constructor(name, cuisineType){
        this.name = name;
        this.cuisineType = cuisineType;
        this.menu = [];
        this.openingHours = {
            monday: "10:00 - 22:00",
            tuesday: "10:00 - 22:00",
            wednesday: "10:00 - 22:00",
            thursday: "10:00 - 22:00",
            friday: "10:00 - 22:00",
            saturday: "10:00 - 22:00",
            sunday: "10:00 - 22:00"
        }
    }

    describe(){
        console.log(`Resaurantes navn: ${this.name}, og den serverer ${this.cuisineType} mad`)
    }

    addDish(dish) {
        this.menu.push(dish)
    }

    printMenu(){
        console.log(this.menu);
    }

    getOpeningHours(day){
        if (this.openingHours[day]){
            console.log(this.openingHours[day])
        } else {
            console.log("Restauranten er lukket")
        }
    }

    removeDish(dish){
        for (let i = 0; i < this.menu.length; i++){
            if(dish === this.menu[i]){
                this.menu.splice(i, 1)
            }
        }
    }

}



const restaurant1 = new Resturant("La neta", "Mexikansk")

restaurant1.describe()

restaurant1.addDish("Tortillas");
restaurant1.addDish("Tacos");
restaurant1.addDish("Empanadas")
restaurant1.addDish("kakao")
restaurant1.addDish("hest")



restaurant1.printMenu()

restaurant1.getOpeningHours("monday");


restaurant1.removeDish("kakao");

restaurant1.printMenu()