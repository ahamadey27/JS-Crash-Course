//Object literal
let casablanca = {
    "title": "Casablanca",
    "released": "1942",
    "director": "Michael Curtiz"
}
console.log(casablanca);
// Output: { title: 'Casablanca', released: '1942', director: 'Michael Curtiz' }

//accessing object value
console.log(casablanca['title']) 
// Output: Casablanca
console.log(casablanca.director); //use dot notation for values that have valid identifiers
// Output: Michael Curtiz

//Setting object value
let dictionaryValue = {}
dictionaryValue.mouse = "small animal";
dictionaryValue["computer mouse"] = "pointing device";
dictionaryValue["computer mouse"] = "second device"
dictionaryValue.mouse = "second small animal"
console.log(dictionaryValue);
// Output: { mouse: 'second small animal', 'computer mouse': 'second device' }

console.log(Object.keys(dictionaryValue)); //get all keys of an object
// Output: [ 'mouse', 'computer mouse' ]
console.log(Object.values(dictionaryValue));
// Output: [ 'second small animal', 'second device' ]

//Combining objects
let combineObjects = {};
console.log(Object.assign(dictionaryValue, casablanca));
// Output: { mouse: 'second small animal', 'computer mouse': 'second device', title: 'Casablanca', released: '1942', director: 'Michael Curtiz' }

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
// Output: [ 'fifth season', 'obelisk gate', 'stone city' ]
console.log(trilogies[1].books[2]);
// Output: stone city

//quick for loop exercise that is same as foreach loop
let colors = ["red", "yellow", "orange"]
for (let [index, item] of colors.entries())  //entries returns key value pair for each item
{
    console.log(`${index}: ${item} is a color`);
    // Output: 0: red is a color
    // Output: 1: yellow is a color
    // Output: 2: orange is a color
}



