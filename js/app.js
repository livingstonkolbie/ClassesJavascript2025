
// Define a class named "Car" that represents a vehicle

// class Car {
//     // 
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
        
//     }


// }

class Car {
    //
    constructor () {
        make: this.make
        model: this.model
        speed: this.speed
    }

    //below, this is a function... this is how you write it...
    details() {
        console.log(`This Car's make is ${this.make} and it's model is ${this.model}`);
    }

    accelerate(mph) {
        this.speed += mph;
        console.log(`This car is going ${this.speed} mph`);
    }

    break(mph) {
        this.speed -= mph;
        console.log(`This car is going ${this.speed} mph`);
    }
}


// This created a instance of a "new Car"
let firstCar = new Car();

firstCar.make = "Chevy";
firstCar.model = "Impala";
firstCar.speed = 0;


//below is me referencing the function from that class above
firstCar.details();
firstCar.accelerate(15);
firstCar.break(10);

// You can provide new constructor values
// firstCar.tires = "0";

console.log(firstCar);

let secondCar = new Car();

secondCar.make = "Ford";
secondCar.model = "Taurus";

console.log(secondCar);





class Employee {
    // The constructor method initializes the properties "name", "title", and "catchphrase"
    constructor(name, title, catchPhrase) {
        this.name = name;
        this.title = title;
        this.catchPhrase = catchPhrase;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`);
    }

}

let spongebob = new Employee("Spongebob", "Frycook", "I'm Ready")
console.log(spongebob);
spongebob.introduce();

let squidward = new Employee("Squidward", "Cashier", "I hate everybody");
console.log(squidward);
squidward.introduce();

