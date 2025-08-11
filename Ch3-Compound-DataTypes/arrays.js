let primes = [2, 3, 5, 7, 11, 13, 17, 19];

console.log(primes[0]);
// Output: 2
console.log(primes.length);
// Output: 8

primes[0] = 1;
console.log(primes[0]);
// Output: 1

console.log("");
// Output: (empty line)

//Array methods (mutations)
let languages = [];
languages.push("C");//inserts element to end of array
languages.push("C#");
languages.push("C++");
languages.push("Rush");
console.log(languages);
// Output: [ 'C', 'C#', 'C++', 'Rush' ]
languages.unshift("elem 0"); //inserts new element to start of array
languages.unshift("elem 1"); //This will now be first element of the array
console.log(languages);
// Output: [ 'elem 1', 'elem 0', 'C', 'C#', 'C++', 'Rush' ]
languages.pop(); //removes last element of array
console.log(languages);
// Output: [ 'elem 1', 'elem 0', 'C', 'C#', 'C++' ]
let leastFavLang = languages.shift(); //removes first element from array
console.log(`My least favorite element in ${leastFavLang}`);
// Output: My least favorite element in elem 1
console.log(languages);
// Output: [ 'elem 0', 'C', 'C#', 'C++' ]

//Combining arrays
console.log("");
// Output: (empty line)

let fish = ["salmon", "cod", "trout"];
let mammals = ["sheep", "cat", "tiger"];
let bugs = ["ant", "bee", "fly"]
let animals = fish.concat(mammals, bugs);
console.log(animals);
// Output: [ 'salmon', 'cod', 'trout', 'sheep', 'cat', 'tiger', 'ant', 'bee', 'fly' ]

//finding index of an array. If element is not found returns value of -1
let sizes = ["small", "medium", "large"]
console.log(sizes.indexOf("medium"));
// Output: 1

//Turning an array into a string
let numString = ["1", "2", "3", "4"]
console.log(numString.join());
// Output: 1,2,3,4

//Use join method to convert "XXX" array to "XoXoXo"
let Xxx = ["X", "X", "X"]
console.log(Xxx.join("o")); //adds argument between each array index (not after last one)
// Output: XoXoX










