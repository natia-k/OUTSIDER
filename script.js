const questions = [
    "Are you actually here?",
    "Where do you feel like you belong?",
    "Does anyone in Berlin know your name?",
    "Is the ghost behind you, or inside you?",
    "What are you leaving behind?",
    "Will you stay?"
];

let qIndex = 0;

window.onload = () => {
    const input = document.getElementById("answer");
    const qText = document.getElementById("question");
    const room = document.getElementById("base-room");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            
            // TENSION GLITCH: The room flashes
            room.style.filter = "grayscale(100%) brightness(0.6) blur(2px)";
            
            setTimeout(() => {
                room.style.filter = "grayscale(100%) brightness(0.22) blur(0px)";
                
                // Save and transition logic
                console.log("Saving secret:", input.value);
                input.value = "";
                qIndex++;

                if (qIndex < questions.length) {
                    qText.style.opacity = 0;
                    setTimeout(() => {
                        qText.innerText = questions[qIndex];
                        qText.style.opacity = 1;
                    }, 1000);
                } else {
                    qText.innerText = "You are part of the room now.";
                    input.style.display = "none";
                }
            }, 150);
        }
    });
};
