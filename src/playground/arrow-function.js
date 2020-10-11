const square = function(x) {
    return x * x;
};

console.log(square(8))

// const squareArrow = (x) => {
//    return x*x;
// };

const squareArrow = (x) => x * x
// no returns for function calls, only a variable and expression

console.log(squareArrow(9))

const fullName= 'Mike Smith';
let firstName;

const getFirstName = (fullName) => {
    firstName = fullName.split(' ')[0];
    return firstName
}

console.log(getFirstName(fullName))

const getName = (fullName) => fullName.split(' ')[0]
console.log(getName(fullName))