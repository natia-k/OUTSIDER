// script.js
const questions = [
    "Are you waiting for someone?",
    "Does your shadow look like you?",
    "Is this Berlin, or just a memory of it?",
    "Are you an outsider, or are you the one who left?",
    "What is the last thing you want to say?"
];

let qIndex = 0;

window.onload = () => {
    const chatBox = document.getElementById('chat-box');
    const input = document.getElementById('existential-input');
    const display = document.getElementById('question-display');

    // Show the chat 10 seconds after the ghost starts manifesting
    setTimeout(() => {
        chatBox.style.opacity = "1";
    }, 10000);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== "") {
            
            // --- DATA READY FOR BACKEND ---
            // This is where your backend dev will "POST" the data
            console.log(`User Answered: "${input.value}" to Question: "${questions[qIndex]}"`);
            
            // Next Question Transition
            qIndex++;
            input.value = "";
            
            if (qIndex < questions.length) {
                display.style.opacity = 0;
                setTimeout(() => {
                    display.innerText = questions[qIndex];
                    display.style.opacity = 1;
                }, 1000);
            } else {
                display.innerText = "You have been heard.";
                input.style.display = "none";
            }
        }
    });
};
