document.addEventListener("DOMContentLoaded", function () {
    // Load profile component into the wrapper div
    fetch("profile.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("profileContainerWrapper").innerHTML = data;

            // Dropdown functionality (execute after loading)
            const profileNav = document.getElementById("profileNav");
            const dropdown = document.getElementById("profileDropdown");
            const arrow = document.getElementById("dropdownArrow");

            profileNav.addEventListener("click", () => {
                dropdown.classList.toggle("show");
                arrow.classList.toggle("rotate");
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", (event) => {
                if (!profileNav.contains(event.target)) {
                    dropdown.classList.remove("show");
                    arrow.classList.remove("rotate");
                }
            });
        })
        .catch(error => console.error("Error loading profile:", error));
});



// ==== profile ==== //
document.addEventListener("DOMContentLoaded", function () {
    const registerOption = document.getElementById("registerOption");
    const profileNav = document.getElementById("profileNav");
    const profileLogo = document.getElementById("profileLogo");
    const profileInitial = document.getElementById("profileInitial");
    const profileDropdown = document.getElementById("profileDropdown");
    const profileContainer = document.getElementById("profileContainer");
    const logoutBtn = document.getElementById("logout");

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        // Remove Registration Link
        if (registerOption) {
            registerOption.style.display = "none";
        }

        // Show Profile Dropdown
        profileNav.style.display = "block";

        // Display Username Initial or Profile Pic
        if (loggedInUser.profilePic) {
            profileLogo.style.backgroundImage = `url(${loggedInUser.profilePic})`;
            profileInitial.style.display = "none";
        } else {
            profileInitial.textContent = loggedInUser.username.charAt(0).toUpperCase();
            profileInitial.style.display = "block";
        }
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("✅ You have been logged out.");
            window.location.href = "index.html"; // Redirect to homepage
        });
    }

    // Toggle Profile Dropdown
    profileContainer.addEventListener("click", function () {
        profileDropdown.classList.toggle("show");
    });

    // Hide Dropdown When Clicking Outside
    document.addEventListener("click", function (e) {
        if (!profileContainer.contains(e.target)) {
            profileDropdown.classList.remove("show");
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChat = document.getElementById("close-chat");
    const sendMessage = document.getElementById("send-message");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Open Chatbot
    chatbotIcon.addEventListener("click", function () {
        chatbotContainer.style.display = "flex";
    });

    // Close Chatbot
    closeChat.addEventListener("click", function () {
        chatbotContainer.style.display = "none";
    });

    // Send Message
    sendMessage.addEventListener("click", function () {
        const userText = chatbotInput.value.trim();
        if (userText === "") return;

        // Append User Message
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = userText;
        chatbotMessages.appendChild(userMessage);

        // Auto Reply from Bot
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("bot-message");
            botMessage.textContent = "I'm a static chatbot. How can I assist you?";
            chatbotMessages.appendChild(botMessage);
        }, 1000);

        chatbotInput.value = ""; // Clear input
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to latest message
    });
});
