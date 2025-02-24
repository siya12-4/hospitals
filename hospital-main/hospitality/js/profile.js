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


// ==== profile page ====

document.addEventListener("DOMContentLoaded", function () {
    const profileNav = document.getElementById("profileNav");
    const profileContainer = document.getElementById("profileContainer");
    const profileLogo = document.getElementById("profileLogo");
    const profileInitial = document.getElementById("profileInitial");
    const profileDropdown = document.getElementById("profileDropdown");
    const profileUsername = document.getElementById("profileUsername");
    const profilePic = document.getElementById("profilePic");
    const uploadPic = document.getElementById("uploadPic");
    const logoutBtn = document.getElementById("logout");

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        window.location.href = "index.html"; // Redirect to homepage if not logged in
    } else {
        // Display user details
        profileUsername.textContent = loggedInUser.username;

        if (loggedInUser.profilePic) {
            profilePic.style.backgroundImage = `url(${loggedInUser.profilePic})`;
            profileLogo.style.backgroundImage = `url(${loggedInUser.profilePic})`;
            profileInitial.style.display = "none"; // Hide initial if profile picture exists
        } else {
            profileInitial.textContent = loggedInUser.username.charAt(0).toUpperCase();
            profileInitial.style.display = "block";
        }

        profileNav.style.display = "block"; // Show profile dropdown
    }

    // Handle profile picture change
    uploadPic.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                profilePic.style.backgroundImage = `url(${imageUrl})`;
                profileLogo.style.backgroundImage = `url(${imageUrl})`;

                // Update profile picture in localStorage
                loggedInUser.profilePic = imageUrl;
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle logout
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("✅ You have been logged out.");
        window.location.href = "index.html"; // Redirect to homepage
    });

    // Toggle dropdown on profile click
    profileContainer.addEventListener("click", function () {
        profileDropdown.classList.toggle("show");
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!profileContainer.contains(e.target)) {
            profileDropdown.classList.remove("show");
        }
    });
});
