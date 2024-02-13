// Object Literal Syntax
const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff!
    }
};

// There are 2 ways to access object members
    // METHOD 1: Dot Notation
    myObject.property; // 'Value!'

    // METHOD 2: Bracket Notation
    myObject["obnoxious property"]; // [Function]

// dot notation is cleaner but there are instances when bracket notation is mandatory.
// For example:

    const variable = 'property';

    // this fails because it's looking for a property named variable which doesn't exist. 
    myObject.variable;

    // this works and returns 'Value!'
    myObject[variable]; 
    // please note there is no dot between the object name and opening bracket

// Tic Tac Toe Example

    // example one
    const playerOneName = "tim";
    const playerTwoName = "jenn";
    const playerOneMarker = "X";
    const playerTwoMarker = "O";

    // example two
    const playerOne = {
        name: "tim",
        marker: "X",
    };

    const playerTwo = {
        name: "jenn",
        marker: "O",
    };

    // THIS DOESN'T WORK:
    function printName(player) {
        console.log(player.name);
    }

    // instead, we have to do this, which sucks:
    console.log(playerOneName);
    console.log(playerTwoName);

    // really makes it suck if you want to do this:
    function gameOver(winningPlayer) {
        console.log("Congratulations!");
        console.log(winningPlayer.name + " is the winner!");
    }

// Introducing Object Constructors

    // this is a constructor
    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }

    // which is used by calling the function with the keyword "new"
    const player = new Player('steve', 'X');
    console.log(player.name); // 'steve'

// you can add functions to the object

    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
        this.sayName = function() {
            console.log(this.name);
        };
    }

    const player1 = new Player('steve', 'X');
    const player2 = new Player('also steve', 'O');
    player1.sayName(); // logs 'steve'
    player2.sayName(); // logs 'also steve'

// EXERCISE: Book objects - refer to books.js

// Accessing an object prototype

    Object.getPrototypeOf(player1) === Player.prototype; // returns true
    Object.getPrototypeOf(player2) === Player.prototype; // also returns true
    // this because all objects made using the constructor share the same prototype. in fact:
    Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2); // is also true

// Why define properties and functions on the object prototype?
    // 1: Do this when the property or function is the same for all objects to save memory
    // 2: Prototypal inheretance reasons

// Visualizing prototypal inheritance:
    // Player.prototype.__proto__
    Object.getPrototypeOf(Player.prototype) === Object.prototype; // TRUE
    // we see that the prototype of the prototype of Player is the object prototype
    // its prototype-ception

    player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
    // Where did valueOf() come from? we didn't define it. Instead, it was inherited from Object.prototype.

    // to see this in another light:
    player1.hasOwnProperty('valueOf'); // FALSE because the Player constructor does not define valueOf
    Object.prototype.hasOwnProperty('valueOf'); // TRUE
    Object.prototype.hasOwnProperty('hasOwnProperty'); // TRUE (double-OMGWTF360noscope-prototype-ception)

    // Final notes:
    // 1. Every prototype inherits from Object.prototype by default
    // 2. Every object's Object.getPrototypeOf() value can only be one unique prototype object.

// Recommended Method for prototypal inheritance - refer to inheritance.js





