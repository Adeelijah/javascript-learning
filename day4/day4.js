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
