let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsContainer = document.getElementById("buttons");

// Create buttons dynamically
sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("btn", "stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
    stopSounds();
});

buttonsContainer.appendChild(stopBtn);

// Append audio elements
sounds.forEach((sound) => {
    const audio = document.createElement("audio");
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;
    document.body.appendChild(audio);
});

// Stop all sounds
function stopSounds() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

