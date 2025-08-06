//Object literal
let casablanca = {
    "title": "Casablanca",
    "released": "1942",
    "director": "Michael Curtiz"
}
console.log(casablanca);

//accessing object value
console.log(casablanca['title']) 
console.log(casablanca.director); //use dot notation for values that have valid identifiers

//Setting object value
let dictionaryValue = {}
dictionaryValue.mouse = "small animal";
dictionaryValue["computer mouse"] = "pointing device";
dictionaryValue["computer mouse"] = "second device"
dictionaryValue.mouse = "second small animal"
console.log(dictionaryValue);

console.log(Object.keys(dictionaryValue)); //get all keys of an object
console.log(Object.values(dictionaryValue));


