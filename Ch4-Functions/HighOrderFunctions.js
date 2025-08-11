//High-Order functions taker another functions as its argument or outputs another function as its return value

//Finding an array by element example
let shoppingList = ["milk", "sugar", "eggs", "chicken"];
console.log( shoppingList.find(item => item.length > 6)); //element that's length is greater than 6
// Output: chicken
console.log(shoppingList.find(item => item[0] === "A")); //element that starts with the letter A
// Output: undefined

//Transforming each elements of an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8,]
let cubes = numbers.map(x => x * x* x); //returns cubed result of each argument of array. Use .map instead of for loop
console.log(cubes);
// Output: [ 1, 8, 27, 64, 125, 216, 343, 512 ]

let stockList = [
    {name: "cheese", price: 3},
    {name: "milk", price: 5},
    {name: "eggs", price: 6}
];
let price = stockList.map(list => list.price);
let name = stockList.map(list => list.name);
console.log(price, name);
// Output: [ 3, 5, 6 ] [ 'cheese', 'milk', 'eggs' ]

//Custom functions that take callbacks 
function doubler(callback)
{
    callback();
    callback();
}
doubler(() => console.log("hello"));
// Output: hello
// Output: hello
