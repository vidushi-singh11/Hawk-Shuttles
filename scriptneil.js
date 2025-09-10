// script.js
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();
    if (userMessage === "") return;

    // Display user message
    chatBox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;

    // Generate bot response (simple logic or random)
    const botResponse = getBotReply(userMessage);
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";
}

function getBotReply(input) {
    const responses = [
        "That's interesting!",
        "Tell me more!",
        "I'm just a simple bot.",
        "Sorry, I don't understand yet.",
        "Can you rephrase that?"
    ];

    // You could also add basic keyword logic
    if (input.toLowerCase().includes("hello")) return "Hi there!";
    if (input.toLowerCase().includes("how are you")) return "I'm a bot, but I'm doing great!";
    if (input.toLowerCase().includes("what is your name")) return "My name is Neil";

    return responses[Math.floor(Math.random() * responses.length)];
}