let primes = [2, 3, 5, 7, 11, 13, 17, 19];

console.log(primes[0]);
console.log(primes.length);

primes[0] = 1;
console.log(primes[0]);

console.log("");
//Array methods (mutations)
let languages = [];
languages.push("C");//inserts element to end of array
languages.push("C#");
languages.push("C++");
languages.push("Rush");
console.log(languages);
languages.unshift("elem 0"); //inserts new element to start of array
languages.unshift("elem 1"); //This will now be first element of the array
console.log(languages);
languages.pop(); //removes last element of array
console.log(languages);
let leastFavLang = languages.shift(); //removes first element from array
console.log(`My least favorite element in ${leastFavLang}`);
console.log(languages);

//Combining arrays
console.log("");

let fish = ["salmon", "cod", "trout"];
let mammals = ["sheep", "cat", "tiger"];
let bugs = ["ant", "bee", "fly"]
let animals = fish.concat(mammals, bugs);
console.log(animals);







