var colors = ['red', 'orange', 'yellow', 'blue', 'green', 'purple'];
listArrayItems(colors);

function listArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//using the math.rounded built in object
var randomNum = Math.random()
console.log(randomNum);

var firstUser = 'Michael'
firstUser = {
    name: 'Michael',
    age: 20,
    isMarried: true,
    sex: 'Male'
}

console.log(firstUser);

var me = 'Elijah'
console.log(me);


function addTwoNums(a, b) {
    try {
        if (typeof (a) != number) {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof (b) != number) {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNums(5, '5');
console.log("It still works!");


function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(20, 2);
letterFinder('cat', 'c');