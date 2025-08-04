function isPalindrome(stringInput)
{
    let revString = "";
    for(let i = stringInput.length - 1; i >=0; i--)
    {
        revString += stringInput[i];
    }
    if (stringInput === revString) 
    {
        console.log("Is a palindrome");
    } 
    else 
    {
        console.log("Is not a palindrome");
    }
}

isPalindrome("adal");

