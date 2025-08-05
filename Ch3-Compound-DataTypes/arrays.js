let primes = [2, 3, 5, 7, 11, 13, 17, 19];

console.log(primes[0]);
console.log(primes.length);

primes[0] = 1;
console.log(primes[0]);

let languages = [];
languages.push("C");
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





