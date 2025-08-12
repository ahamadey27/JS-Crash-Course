//Adds event handler for when user clicks the h1 element
//querySelector gets element with main-heading id and save to variable heading
let heading = document.querySelector("#main-heading");

//addEventListener tells JS to watch for a particular event happening on the element and execute a function when it does. Has two parameters: first - event type (could also be "keydown" or "scroll"). Second - Function to execute when specified event occurs (aka event handler)
heading.addEventListener("click", () => //callback function (calling a function within another function)
{
    console.log("Heading clicked");
    
});

let paragraph = document.querySelector("par-function");
paragraph.addEventListener("click", () => 
{
    console.log("par clicked!");
});

