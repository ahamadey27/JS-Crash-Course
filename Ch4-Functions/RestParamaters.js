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

