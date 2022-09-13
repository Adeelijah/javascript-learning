//variable scoping
let manAtHome = true

if (manAtHome) {
    let welcomeMessage = 'welcome back';
} else {
    let welcomeMessage = 'welcome new user';
}
console.log(welcomeMessage);

//the above will throw an error because the welcomeMessage only exists in the if else block and not the parent block
//to ratify this, we need to declare the welcome message in the parent block

let manAtHome = true
let welcomeMessage = ''

if (manAtHome) {
    welcomeMessage = 'welcome back';
} else {
    welcomeMessage = 'welcome new user';
}
console.log(welcomeMessage);

//switch statements

const firstUser = {
    name: 'mike bane',
    age: 25,
    accountType: 'normal'
};

//loops

const secondUser = {
    name: 'charles gates',
    age: 26,
    accountType: 'premium'
};

const thirdUser = {
    name: 'wood daniel',
    age: 30,
    accountType: 'mega-premium'
};

switch (firstUser.accountType) {
    case 'normal':
        console.log('user has a normal account!');
        break;
    case 'premium':
        console.log('user has a premium account');
        break;
    case 'mega-premium':
        console.log('user has a mega premium account');
    default:
        console.log('account type unknown!');
}
//the default case will only be executed if the variable you are checking for does not match any of the listed values

//for loops
//using an airplane boarding as an example

const numbeOfSeats = 10;

for (let i = 0; i < numbeOfSeats; i++) {
    console.log('passanger boarded!');
}

//for ... in loop
const passangers = [
    'oluwatobi mike',
    'adenuga jumia',
    'balogun tope',
    'mutiu muibi',
    'aladejare biyi'
]

for (let i = 0; i < passangers.length; i++) {
    console.log('boarding ' + passangers[i]);

}

//introducing ... in
for (let i in passangers) {
    console.log('boarding ' + passangers[i]);
}

//for ... of loop

let passangers = [
    {
        name: 'bayo bimbo',
        ticketNumber: 345645
    },
    {
        name: 'agunbiade sayo',
        ticketNumber: 345465
    },
    {
        name: 'sayo seye',
        ticketNumber: 345938
    },
    {
        name: 'dayo dodo',
        ticketNumber: 345645
    }
]

for (let passanger of passangers) {
    console.log('Boarding Passanger ' + passanger.name + ' with ticket number ' + passanger.ticketNumber)
}