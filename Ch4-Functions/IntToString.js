const numbers = [0, 1, 2, 3, 4, 5];
const strings = numbers.map(String);

function intToString(index)
{
    if (index < 0 || index > numbers.length)
    {
        return undefined;
    }
    return strings[index];
}

console.log(intToString(3));
