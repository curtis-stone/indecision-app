// argument object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a*b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'CJ',
    cities: ['Conyers', 'Norcross', 'Jacksonville'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    },
    printPlace() {
        this.cities.forEach((city) => {
            console.log(city + ' is a place')
        });
    }
};

user.printPlacesLived();
user.printPlace(); // ES6 "Method Definition" syntax, can have arguments if needed, same as ES5
                    // syntax but with cleaner code

// this can be used with parent scope. the anonymous arrow function's scope is within the object
// so parent (the object) is valid

// can't use "this" in arrow function to start off a property because there is no parent scope
// above the object 


const user2 = {
    name: 'CJ',
    cities: ['Conyers', 'Norcross', 'Jacksonville'],
    printPlacesLivedMap() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
};

console.log(user2.printPlacesLivedMap());
// map is the most common
// we can transofrm each item in the array w/ this method! 
// DOES NOT AFFECT ORIGINAL ARRAY
// MAP IS HUGE IN THIS COURSE!!!


const multiplier = {
    numbers: [2,3,5, 100, 351655618545],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())