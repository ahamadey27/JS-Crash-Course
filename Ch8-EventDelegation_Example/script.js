let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", event =>
{
    let word = event.target.textContent;
    sentence.textContent += word;
    sentence.textContent += " ";
});