//console.log("Hello");
// define and using function
/*
let myFunc = function() {
    console.log("This is a statement");
};

myFunc();
*/
// using rest parameter
/*
let myFunc = function(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Args: " + extraArgs[i]);
    }
}

myFunc("Adam", "sunny", "one", "two", "three");
*/

// high-order function
/*
let myFunc = function(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}

console.log(myFunc(function() {
    return "Adam";
}));
*/
// closure feature allow inner function access outer function variable
let myGlobalVar = "apple";

let myFunc = function(name) {
    let myLocalVar = "sunny";
    let innerFunc = function() {
        return ("Hello " + name + ". Today is " + myLocalVar + ". And " + myGlobalVar);
    }
    return innerFunc();
}

console.log(myFunc("Adam"));

