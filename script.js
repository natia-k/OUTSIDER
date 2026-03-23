const questions = [
    "Where do you feel like you belong?",
    "Is the door locked?",
    "Does Berlin miss you?",
    "What are you hiding from the ghost?",
    "Will you stay?"
];

let qIdx = 0;

window.onload = () => {
    const input = document.getElementById("answer");
    const qText = document.getElementById("question");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            
            // This is where your backend dev will plug in Supabase/Firebase
            console.log("Saving secret:", input.value);

            input.value = "";
            qIdx++;

            if (qIdx < questions.length) {
                qText.style.opacity = 0;
                setTimeout(() => {
                    qText.innerText = questions[qIdx];
                    qText.style.opacity = 1;
                }, 1000);
            } else {
                qText.innerText = "You are part of the room now.";
                input.style.display = "none";
            }
        }
    });
};
