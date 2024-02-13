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

// EXERCISE: Book objects
// Write a constructor for making book objects. Objects should contain title,
// author, number of pages, and whether or not you've read the book.

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.info = function() {
            return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
        };
    }

    const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
    console.log(theHobbit.info());
    


