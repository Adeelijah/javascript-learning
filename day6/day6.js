let accountsCreated = 0
let slotsAvailable = 50

while (slotsAvailable > 0) {
    slotsAvailable--;
    accountsCreated++;
}
console.log(accountsCreated + ' accounts has been successfully created')

//handling runtime errors in js

//take for example
const firstUser = {
    firstName: 'Ayo',
    lastName: 'Funsho',
    age: 27
}

const otherUser = {
    firstName: 'Shola',
    age: 29
}

console.log(firstUser.firstName + '' + firstUser.lastName);
//this works fine. the other data (otherUser) isnt complete so its likely we run into an error
//to guide against runtime errors we can wrap our console.log in an if else statement

if (otherUser.firstName && otherUser.lastName) {
    console.log('welcome ' + otherUser.firstName + '' + otherUser.lastName);
} else {
    alert('Incorrect Account info!')
}

// The try catch method
// This method only works if the values were searching for is non-existent
try {
    console.log('welcome ' + firstUser.firstName + '' + firstUser.lastName);
}
catch (error) {
    alert('An error occured!');
    console.log(error);
}
//this will trigger an alert and log the error into the console

