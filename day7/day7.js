//functions

const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber;
    return result
}

console.log(add(4, 3));

//adding instance methods to our classes

class bankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log('balance: ' + this.balance + ' EUR')
    }
    deposit(amount) {
        console.log('depositing ' + amount + ' EUR')
        this.balance += amount;
        this.showBalance()
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('withdrawal denied!');
        } else {
            console.log('withdrawing ' + amount + ' EUR');
            this.balance -= amount;
            this.showBalance()
        }
    }
}



const newAccount = new bankAccount('Adegbenjo Elijah', 1000);

newAccount.deposit(500);
newAccount.showBalance();
newAccount.withdraw(200);


//instance methods makes our code readable and reuseable

//static classes

class BePolite {
    static sayHello() {
        console.log('Hello!');
    }
    static sayHelloTo(name) {
        console.log('Hello ' + name + '!');
    }
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // prints 'Hello!'
BePolite.sayHelloTo('Will'); // prints 'Hello Will!'
const sum = BePolite.add(2, 3); // sum = 5


const firstUser = {
    name: 'monkey poo',
    accountType: 'premium',
    onlineStatus: true,
};
const secondUser = {
    name: 'audreyy pole',
    accountType: 'normal',
    onlineStatus: true,
};
const thirdUser = {
    name: 'nikey nice',
    accountType: 'premium',
    onlineStatus: true,
};

if (firstUser.onlineStatus) {
    if (firstUser.accountType === 'normal') {
        console.log('Hello ' + firstUser.name);
    } else {
        console.log('welcome back premium ' + firstUser.name);
    }
}

if (secondUser.onlineStatus) {
    if (secondUser.accountType === 'normal') {
        console.log('Hello ' + secondUser.name);
    } else {
        console.log('welcome back premium ' + secondUser.name);
    }
}

if (thirdUser.onlineStatus) {
    if (thirdUser.accountType === 'normal') {
        console.log('Hello ' + thirdUser.name);
    } else {
        console.log('welcome back premium ' + thirdUser.name);
    }
}
//this lenghty code can be re written in an easier and shorter way to facilitate understanding
//lets refactor the code

const sendWelcomeMessageToUser = (user) => {
    if (user.onlineStatus) {
        if (user.accountType === 'normal') {
            console.log('Hello ' + user.name);
        } else {
            console.log('Welcome Premium User ' + user.name);
        }
    }
}

sendWelcomeMessageToUser(firstUser);

//by creating this function our code has the same functionality but more readable without having to repeat codes
