//create an object for the variable episode

let userA = {
    email: 'adeelijah2000@gmail.com',
    userName: 'Adeelijah',
    password: 'v3y5n8aw3y24',
    loggedIn: true,
};

//this is an example of an object

//to access the key value pairs in the object
//we use the object dot notation as seen below

console.log(userA.email);

//this will fetch the value associated with the email key

//we can also retrieve the values of the object like so

let userEmail = userA.email; //'adeelijah2000@gmail.com'
let userAName = userA.userName; //and so on

//classes

class Account {
    constructor(userName, password, email, loggedIn) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.loggedIn = loggedIn;
    }
}

//with this in place we need only one line of code to create a whole
//object variable
//example

let newUser = Account('ibot', 'vyrbgayeg', 'ay@gmail.com', true);
let anotherUser = Account('vic', 'v3wibhotuhth', 'bingo@gmail.com', false);

//if you console.log these youll get a full object

//arrays

let cars = ['Honda', 'Toyota', 'nissan']
//we have just created an array of cars
//we could also create an array of cars containing features

let newCar = { name: 'Toyota', color: 'black' };
let oldCar = { name: 'Mazda', color: 'ash' };  //these are variables

let car = [newCar, oldCar]; //this is an array
