
const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const newChatButton = document.getElementById("newChat");

function sendMessage() {
    const question = userInput.value.trim();

    if (question === "") {
        return;
    }

    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = question;

    messages.appendChild(userMessage);

    const reply = document.createElement("div");
    reply.className = "message ai-message";
    reply.textContent =
        "Thanks for your question! My live AI connection is coming soon.";

    messages.appendChild(reply);

    userInput.value = "";

    messages.scrollTop = messages.scrollHeight;
}

sendButton.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

newChatButton.addEventListener("click", function() {
    messages.innerHTML = `
        <div class="message ai-message">
            Hello! I'm NEXA AI. How can I help you today?
        </div>
    `;
});
