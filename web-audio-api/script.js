
let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", async () => {
    play.style.display = "none"; //Hide this button on click
    playing.style.display = ""; //Replaces with "playing" string

    //Synth using Tone.js
    await Tone.start();

    //takes object as an argument
    let synth = new Tone.PolySynth({
        oscillator: {type: "square"},
        envelope: {attack: 0.0, decay: 0.4, sustain: 0.8, release: 1 }, //values are in seconds 
        volume: -6
    }).toDestination() //connects synth to audio context's output  

    // first argument is function that requires a time value, second is duration indicating how often to call first argument
    let loop = new Tone.Loop(time => {
        synth.triggerAttackRelease("C4", "16n", time);
    }, "4n");

    loop.start("0:0:0");
    loop.stop("4:0:0");
    Tone.Transport.start();
});
