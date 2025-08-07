//Rest Parameters - allows function to collect variable numbers of arguments into an array (use ...)
function myColors(name, ...favoriteColors)
{
    let colorString = favoriteColors.join(", ");
    if(favoriteColors.length <= 1)
    {
        console.log(`${name}'s favorite color is ${colorString}.`);
    }
    else
    {
        console.log(`${name}'s favorite colors are ${colorString}.`);
    }
} 

console.log(myColors("hammer", "blue", "red", "orange", "green")); //rest parameter bundles rest of arguments of array arguments 

//Second example...adds all parameters of an unassigned (size) array
function sum(...numbers)
{
    let total = 0;
    for (let number of numbers)
    {
        total +=number;
    }
    return total;
}

console.log(sum(5,10,45,2,64));
