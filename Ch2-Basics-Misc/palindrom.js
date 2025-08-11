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
        // Output: Is a palindrome (if input is a palindrome)
    } 
    else 
    {
        console.log("Is not a palindrome");
        // Output: Is not a palindrome (if input is not a palindrome)
    }
}

isPalindrome("adal");
// Output: Is not a palindrome

