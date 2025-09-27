let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
    play.style = "display: none"; //Hide this button on click
    playing.style = ""; //Replaces with "playing" string

    let audioCtx = new AudioContext();

    let oscNode = audioCtx.createOscillator();
    oscNode.frequency.value = 220;

    let gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.4;

    oscNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscNode.start(audioCtx.currentTime + 0.5);
    oscNode.stop(audioCtx.currentTime + 2);
});

