//Getting a character from a string
let alphabet = "ABCDEFG";
console.log(alphabet[0], alphabet[1]);

//get multiple characters from a string... gets 4th position to 7th
let sentence = "12345678";
console.log(sentence.slice(3, 7));

//Trimming white space from a string
let inputText = " Here is my input ";
console.log(inputText.trim());
console.log(inputText);

//String to lowercase and upper case
let upLowString = "Hello my name is Alex Hamadey"
console.log(upLowString.toLowerCase());
console.log(upLowString.toUpperCase());

//Returns string with repeated count times
let repeatedString = "CAREFUL\n";
console.log(repeatedString.repeat(3));