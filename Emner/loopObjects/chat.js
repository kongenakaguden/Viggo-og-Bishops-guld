const person1 = {
    name: "John",
    age: 30,
    occupation: "developer"
};

const person2 = {
    name: "Sarah",
    age: 25,
    occupation: "designer"
};

const person3 = {
    name: "Jake",
    age: 40,
    occupation: "manager"
};

const person4 = {
    name: "Emma",
    age: 35,
    occupation: "teacher"
};

const people = [person1, person2, person3, person4]

const LoopthroughObject = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const person = arr[i];
        for (let key in person) {
        console.log(key + ": " + person[key]);
        }
        console.log("-----------")
    }
};

LoopthroughObject(people);

const findOldestPerson = (arr) => {
    let oldest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        const person = arr[i];
        if (person.age > oldest){
            oldest = person.age
        }

        }
        return oldest;

    }


console.log(findOldestPerson(people))