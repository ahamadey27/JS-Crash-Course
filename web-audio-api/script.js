let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

play.addEventListener("click", () => {
    play.style = "display: none"; //Hide this button on click
    playing.style = ""; //Replaces with "playing" string

    //Synth using Tone.js
    Tone.start();

    //takes object as an argument
    let synth = new Tone.Synth({
        oscillator: {type: "sine"},
        envelope: {attack: 0, decay: 0, sustain: 1, release: 0 },
        volume: -6
    }).toDestination //connects synth to audio context's output  

    synth.triggerAttackRelease("A4", 2, 0) //parameters are note, duration and time which note is played
    
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

