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

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            
            // Visual feedback: brief fade
            qText.style.opacity = 0;
            input.style.opacity = 0;
            
            setTimeout(() => {
                input.value = "";
                qIndex++;

                if (qIndex < questions.length) {
                    qText.innerText = questions[qIndex];
                    qText.style.opacity = 1;
                    input.style.opacity = 1;
                    input.focus();
                } else {
                    qText.innerText = "You have been heard. You can leave now.";
                    input.style.display = "none";
                }
            }, 1000);
        }
    });
};
