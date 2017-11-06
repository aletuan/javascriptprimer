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
var myGlobalVar = "apple";
var myFunc = function (name) {
    var myLocalVar = "sunny";
    /*
    let innerFunc = function() {
        return ("Hello " + name + ". Today is " + myLocalVar + ". And " + myGlobalVar);
    }
    */
    // using lambda expresion
    var innerFunc = function () { return ("Hello " + name + ". Today is " + myLocalVar + ". And " + myGlobalVar); };
    return innerFunc();
};
console.log(myFunc("Adam"));
// using template string
var messageFunc = function (weather) {
    var message = "It is " + weather + " today";
    console.log(message);
};
messageFunc("raining");
//equal operation
var first = 5;
var second = 5;
if (first == second) {
    console.log("They are the same with equal operator");
}
else {
    console.log("They are not the same with equal operator");
}
if (first === second) {
    console.log("They are the same with identity operator");
}
else {
    console.log("They are not the same with identify operator");
}
//reduce function
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 10 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products.filter(function (item) { return item.stock <= 1; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0.01);
console.log("Total value " + totalValue);
