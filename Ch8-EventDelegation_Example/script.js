let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", event =>
{
    let word = event.target.textContent;
    sentence.textContent += word;
    sentence.textContent += " ";
});

//Detects mouse movement on xy grid
document.querySelector("html").addEventListener("mousemove", e => 
{
    console.log(`x: ${e.clientX}, y: ${e.clientY}`);
});

//Create event handler to make box interactive 
let box = document.querySelector("#box");
document.querySelector("html").addEventListener("mousemove", e => 
{
    box.style.left = e.clientX + 2 + "px";
    box.style.top = e.clientY + 2 + "px";
});

let currentY = 0;
let currentX = 0;
document.querySelector("html").addEventListener("keydown", e => 
{
    if(e.key == "w")
    {
        currentY -= 5;
    }
    elseif(e.key == "a")
    {
        currentY += 5;
    }
    
    elseif(e.key == "d")
    {
        currentY += 5;
    }

    box.style.left = currentX + "px";
    box.style.top = currentY + "px";
    

});