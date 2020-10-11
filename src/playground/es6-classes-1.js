class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    };
    getGreeting() {
        return `Hello! This person is ${this.name}.`
    };
    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`
    };
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    };
    hasMajor() {
        return !!this.major
        // return `${this.name} is ${this.age} and is majoring in ${this.major}`
    };
    getDescription() {
        let description = super.getDescription();

        if (this.major) {
            return description + ` Their major is ${this.major}.`
        }
        return description
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation = 'Nowhere') {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
        greeting += ` They are visiting from ${this.homeLocation}!`
    }
    return greeting
    }
}

// const me = new Person('CJ Stone', 23);
// console.log(me.getGreeting(), me.getDescription());
// console.log(me.getDescription());

// const guest = new Person();
// console.log(guest.getGreeting(), guest.getDescription());
// console.log(guest.getDescription());

// const student = new Student('CJ', 23, 'Exercise Science');
// console.log(student.getDescription());

// const undecidedStudent = new Student()
// console.log(undecidedStudent.getDescription())

const travelerOne = new Traveler('CJ Stone', 23, 'Georgia');
console.log(travelerOne.getGreeting());

const travelerTwo = new Traveler('Bofa', 22);
console.log(travelerTwo.getGreeting());