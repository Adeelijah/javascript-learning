//if else statement
let password = true

if (password) {
    console.log('password correct');//if the coditions are true password corect will be logged to the console
} else {
    console.log('intruder alert');//logged if the conditions are not met
}

//using comparison statements
const numberOfProducts = 50
let sales = 32

if (numberOfProducts > sales) {
    console.log('products remaining!');
} else {
    console.log('no products left!');
}

// we can also combine more if else statements

if (sales > numberOfProducts) {
    console.log('sales galore!');
} else if (sales == numberOfProducts) {
    console.log('break even');
} else {
    console.log('we need to sell more');
}


//logical operators
//using the logical and operator

let userLoggedIn = true
let userHasPremiumAccount = false
let userHasMegaPremiumAccount = true

if (userLoggedIn || userHasPremiumAccount) {
    console.log('user has upgraded');
}

//the || operator makes sure at least one condition is true

if (userLoggedIn && userHasMegaPremiumAccount) {
    console.log('user has paid account');
}
//for the && operator, both conditions has to be true before the console is logged

//the not operator
if (!userHasMegaPremiumAccount) {
    console.log('access denied!');
}
//this will check if the condition is false

//combining logical operators
let peopleAvailable = 5
const neededPeople = 10
let messageLine = ''

if (peopleAvailable > 0 && peopleAvailable < neededPeople) {
    messageLine = 'we need more people'
} else {
    messageLine = 'we have enough!'
}

console.log(messageLine);