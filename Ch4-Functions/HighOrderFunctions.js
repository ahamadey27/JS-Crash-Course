//High-Order functions taker another functions as its argument or outputs another function as its return value

//Finding an array by element example
let shoppingList = ["milk", "sugar", "eggs", "chicken"];
console.log( shoppingList.find(item => item.length > 6)); //element that's length is greater than 6
console.log(shoppingList.find(item => item[0] === "A")); //element that starts with the letter A

//Transforming each elements of an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8,]
let cubes = numbers.map(x => x * x* x); //returns cubed result of each argument of array
console.log(cubes);

