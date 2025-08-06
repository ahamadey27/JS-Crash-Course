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

//Combining objects
let combineObjects = {};
console.log(Object.assign(dictionaryValue, casablanca));

//nesting with literals
let trilogies = [
    {
        title: "darm materials",
        author: "phillip pullman",
        books: ["northern lights", "subtle knife", "amber spy"]
    }, 
    {
        title: "broken earth",
        author: "nk jessem",
        books: ["fifth season", "obelisk gate", "stone city"]
    }, 
]

console.log(trilogies[1].books);
console.log(trilogies[1].books[2]);



