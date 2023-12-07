// Tasks from javascript.info/object

// Hello, object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(object) {
    // extract array listing keys of object, then check array length
    if (Object.keys(object).length === 0) {
        return true;
    } else {
        return false;
    }
}

// Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key];
}
alert(`Sum of salaries: ${sum}`);

// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

multiplyNumeric(menu, 2);

function multiplyNumeric(object, factor) {
    for (let key in object) {
        if (!isNaN(object[key])) {
            object[key] = object[key] * factor;
        }
    }
    return;
}

console.log(menu);