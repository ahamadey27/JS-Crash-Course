//Passing functions as arguments
function sayHi(){
    console.log("hi");
}
setTimeout(sayHi, 2);

//Function Expressions (function literals) : code literal whose value is a function
let addExpression = function (x,y)
{
    return x + y;
}
console.log(addExpression(1, 2));

