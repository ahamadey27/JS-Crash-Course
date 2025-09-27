
let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
    play.style.display = "none"; //Hide this button on click
    playing.style.display = ""; //Replaces with "playing" string

    //Synth using Tone.js
    Tone.start();

    //takes object as an argument
    let synth = new Tone.PolySynth({
        oscillator: {type: "square"},
        envelope: {attack: 0.0, decay: 0.4, sustain: 0.8, release: 1 }, //values are in seconds 
        volume: -6
    }).toDestination() //connects synth to audio context's output  

    //first argument is function that requires a time value, second is duration indicating how often to call first argument 
    let loop = new Tone.Loop(time => {
        synth.triggerAttackRelease("C4", "16n", time);
    }, "4n");

    loop.start("0:0:0");
    loop.stop("4:0:0");

    Tone.Transport.start();

    //parameters are note, duration and time which note is played
    // synth.triggerAttackRelease("A3", 2, 0)
    // synth.triggerAttackRelease(["B3", "D4"], 2, 1) //first argument takes an array for polyphonic notes 
    // synth.triggerAttackRelease("C#4", 2, 2)
    // synth.triggerAttackRelease(["D4", "F#4"], 2, 3)
    // synth.triggerAttackRelease(["E4", "A4"], 2, 4)
    // synth.triggerAttackRelease("F#4", 2, 5)
    // synth.triggerAttackRelease(["G#4", "B4"], 2, 6) 
    // synth.triggerAttackRelease("A4", 2, 7) 
    
    //Basic Audio Web API oscillator with gain 
    /*let audioCtx = new AudioContext();

    let oscNode = audioCtx.createOscillator();
    oscNode.frequency.value = 220;

    let gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.4;

    oscNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscNode.start(audioCtx.currentTime + 0.5);
    oscNode.stop(audioCtx.currentTime + 2);*/
});

