//Passing functions as arguments
function sayHi(){
    console.log("hi");
}
setTimeout(sayHi, 2);
// Output: hi (after 2ms)


//Function Expressions (function literals) : code literal whose value is a function
let addExpression = function (x,y)
{
    return x + y;
}
console.log(addExpression(1, 2));
// Output: 3


//Arrow functions - compact version of a function expression 
let addArrow = (x, y) => {
    return x + y;
};
console.log(addArrow(5, 5));
// Output: 10

let addArrowConcise = (x, y) => x + y;
console.log(addArrowConcise(10, 10));
// Output: 20

//also good for defining functions that are passed as arguments 
setInterval(() => {
    console.log("Beep");
}, 1000);
// Output: Beep (every 1 second)
