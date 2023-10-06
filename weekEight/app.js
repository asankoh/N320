class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Welcome, ${this.name}. You are ${this.age} years old`)
    }
}

let William = new Person("William", 21);
William.greeting();

//Extend Classes
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major
    }
  /*  greeting(){
        super.greeting()
        console.log(`I am a student majoring in ${this.major}.`)
    }*/
}

let Amy = new Student('Amy', 22, "Web Design")
Amy.greeting();

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    vInfo(){
        return `This vehicle is a ${this.year} ${this.make} ${this.model}.`
    }
}

class Car extends Vehicle {
    constructor(doors, transmission, ...args){
        super(...args)
        this.doors = doors;
        this.transmission = transmission;
        this.wheels=4;
    }
}

let charger = new Car(4, "Automatic", "Dodge", "Charger", 2000);
console.log(charger.vInfo());
console.log(charger.doors, charger.transmission, charger.wheels)


class Motorcycle extends Vehicle{
    constructor(){
        super(...arguments)
        this.wheels = 2;
    }
    caution(){
        return "Make sure to wear a helmet"
    }
}

let hdCycle = new Motorcycle("Harley Davidson", "VS210", 2023)
console.log(hdCycle.vInfo())
console.log(hdCycle.caution())