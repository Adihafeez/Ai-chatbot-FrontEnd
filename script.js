// script.js
document.addEventListener("DOMContentLoaded", () => {
    const chatBody = document.getElementById("chat-body");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const resetBtn = document.getElementById("reset-btn");

    // Function to add messages to the chat body
    function addMessage(content, sender = "user") {
        const message = document.createElement("div");
        message.className = sender === "bot" ? "bot-message" : "user-message";
        message.textContent = content;
        chatBody.appendChild(message);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Send button event
    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage);
            userInput.value = "";
            setTimeout(() => addMessage("I'm here to assist! Could you clarify your query?", "bot"), 800);
        }
    });

    // Reset button event
    resetBtn.addEventListener("click", () => {
        chatBody.innerHTML = '<div class="bot-message">Hello! Welcome to our e-commerce platform. How can I help you today?</div>';
    });
});
