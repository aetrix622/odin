// Defining a module

    // modules are an immediately invoked function expression (IIFE):
    const SomeModule = ( function() {} ) ();
    //                 ^Parenthesis
    //                   ^Function
    //                                   ^Immediately invoked

console.log("=== Formatter Example ===");

const Formatter = (function() {
    console.log("Formatter Start");
    let timesRun = 0;

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const setTimesRun = () => {
        log("Setting times run");
        ++timesRun;
    };

    const makeUppercase = (text) => {
        log("Making uppercase");
        setTimesRun();
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun,
    };
})();

console.log(Formatter.makeUppercase("joe"));
console.log(Formatter.timesRun);
Formatter.timesRun = 10;
console.log(Formatter.timesRun);

const Formatter2 = (function () {
    console.log("Formatter2 Start");
    let timesRun = []; // reference types work differently

    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

    const setTimesRun = () => {
        log ("Setting times run");
        timesRun.push(null);
    };

    const makeUppercase = (text) => {
        log("Making uppercase");
        setTimesRun();
        return text.toUpperCase();
    };

    return {
        makeUppercase,
        timesRun,
    }
})();

console.log(Formatter2.makeUppercase("joe"));
console.log(Formatter2.makeUppercase("joe"));
console.log(Formatter2.makeUppercase("joe"));
console.log(Formatter2.timesRun.length);

// DECLARING MODULE DEPENDENCIES

const Formatter3 = (function(doc) {
    const log = (message) => { 
        console.log(`[${Date.now()}] Logger: ${message}`)
    };

    const makeUppercase = (text) => {
        log("Making uppercase");
        return text.toUpperCase();
    };

    // the following function is dependent on the DOM being available in a web browser
    // as a result, the function will cause an error in a different environment such
    // as a server. To fix, we have passed in the page document as an argument and wrapped
    // the statement in an if block that only runs if the page actually exists.
    const writeToDOM = (selector, message) => {
        if (!!doc && "querySelector" in doc) {
            doc.querySelector(selector).innerHTML = message;
        }
    }

    return {
        makeUppercase,
        writeToDOM,
    }
})(document); // Don't forget to pass in the document as an argument here

Formatter3.writeToDOM("#target", "Hi there");
