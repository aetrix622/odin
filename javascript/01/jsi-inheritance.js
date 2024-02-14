// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
// };

// let longEar = {
//     earLength: 10,
// }

// Object.setPrototypeOf(rabbit, animal);
// Object.setPrototypeOf(longEar, rabbit);

// // we can find both properties in rabbit now:
// console.log( rabbit.eats );
// console.log( rabbit.jumps );
// console.log(longEar.walk());
// console.log(longEar.jumps);

// rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!


// // NEW EXAMPLE =================================
// let user = {
//     name: "John",
//     surname: "Smith",

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     },

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     }
// };

// let admin = {
//     isAdmin: true
// };

// Object.setPrototypeOf(admin, user);

// console.log(admin.fullName);

// // setter triggers!
// admin.fullName = "Alice Cooper";

// console.log(admin.fullName);
// console.log(user.fullName);

// ANIMAL HAS METHODS
let animal =  {
    walk() {
        if (!this.isSleeping) {
            alert('I walk');
        }
    },
    sleep() {
        this.isSleeping = true;
    },
    wake() {
        this.isSleeping = false;
    },
};

let rabbit = {
    name: "White Rabbit",
}

Object.setPrototypeOf(rabbit, animal);

// maodifies rabbit.isSleeping
rabbit.sleep();

console.log('rabbit.isSleeping: ' + rabbit.isSleeping); // true
console.log('animal.isSleeping ' + animal.isSleeping); // undefined

// for ... in loops

let creature = {
    eats: true,
};

let monkey = {
    swings: true,
};

Object.setPrototypeOf(monkey, creature);

// Object.keys only returns own keys
console.log(Object.keys(monkey));
for (let prop in monkey) {
    let isOwn = monkey.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}