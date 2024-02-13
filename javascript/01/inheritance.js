// Recommended method for prototypal inheritance, according to TOP
// Use Object.setPrototypeOf() to set the prototype.

// Here we create a new constructor Person() and make the prototype of Player()

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype.
// We want Object.getPrototypeOf(Player.prototype) to return
// "Person.prototype" instead of "Object.prototype" so we do this:
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // Now this will return "Person.prototype".

const player1 = new Player('Steve', 'X');
const player2 = new Player('Irene', 'O');

player1.sayName(); // Hello, I'm Steve!
player2.sayName(); // Hello, I'm Irene!;

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'

